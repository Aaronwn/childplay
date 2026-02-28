import { GoogleGenAI } from "@google/genai";

// Lazy-initialize the Gemini API client to avoid crashing at module load time
// when GEMINI_API_KEY is not configured
let ai: GoogleGenAI | null = null;

function getAI(): GoogleGenAI {
  if (!ai) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error('GEMINI_API_KEY is not configured. Create a .env file with your API key.');
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
}

const DB_NAME = 'ChildPlayImagesDB';
const STORE_NAME = 'images';

// Initialize IndexedDB
function initDB(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1);
    
    request.onerror = () => reject(request.error);
    request.onsuccess = () => resolve(request.result);
    
    request.onupgradeneeded = (event) => {
      const db = (event.target as IDBOpenDBRequest).result;
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME);
      }
    };
  });
}

async function getCachedImage(id: string): Promise<string | null> {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readonly');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.get(id);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve(request.result || null);
    });
  } catch (error) {
    console.error('Error reading from IndexedDB:', error);
    return null;
  }
}

async function cacheImage(id: string, base64Data: string): Promise<void> {
  try {
    const db = await initDB();
    return new Promise((resolve, reject) => {
      const transaction = db.transaction(STORE_NAME, 'readwrite');
      const store = transaction.objectStore(STORE_NAME);
      const request = store.put(base64Data, id);
      
      request.onerror = () => reject(request.error);
      request.onsuccess = () => resolve();
    });
  } catch (error) {
    console.error('Error writing to IndexedDB:', error);
  }
}

// Queue for image generation to avoid rate limits
let isGenerating = false;
const generationQueue: Array<() => Promise<void>> = [];

async function processQueue() {
  if (isGenerating || generationQueue.length === 0) return;
  
  isGenerating = true;
  const task = generationQueue.shift();
  if (task) {
    await task();
    // Wait a bit between generations to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  isGenerating = false;
  processQueue();
}

export async function generateActivityImage(id: string, title: string, description: string): Promise<string> {
  // Check cache first
  const cached = await getCachedImage(id);
  if (cached) {
    return cached;
  }

  return new Promise((resolve, reject) => {
    generationQueue.push(async () => {
      try {
        console.log(`Generating image for ${title}...`);
        const prompt = `A high quality, bright, and cheerful photo showing a toddler activity: ${title}. ${description}. The image should look like a professional lifestyle photo, well lit, safe, and fun. No text in the image.`;
        
        const response = await getAI().models.generateContent({
          model: 'gemini-2.5-flash-image',
          contents: {
            parts: [{ text: prompt }],
          },
          config: {
            imageConfig: {
              aspectRatio: "4:3"
            }
          },
        });
        
        if (response.candidates && response.candidates[0] && response.candidates[0].content && response.candidates[0].content.parts) {
          for (const part of response.candidates[0].content.parts) {
            if (part.inlineData) {
              const base64Data = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
              await cacheImage(id, base64Data);
              resolve(base64Data);
              return;
            }
          }
        }
        reject(new Error('No image data returned'));
      } catch (error) {
        console.error(`Failed to generate image for ${title}:`, error);
        reject(error);
      }
    });
    
    processQueue();
  });
}
