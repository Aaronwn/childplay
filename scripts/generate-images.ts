import { GoogleGenAI } from "@google/genai";
import fs from 'fs';
import path from 'path';
import { loadEnv } from 'vite';
import { activities } from '../src/data/activities';

const env = loadEnv('', process.cwd(), '');
const apiKey = env.GEMINI_API_KEY;

if (!apiKey) {
  console.error("GEMINI_API_KEY is not set.");
  process.exit(1);
}

const ai = new GoogleGenAI({ apiKey });

async function generateImage(prompt: string, filename: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash-image',
      contents: {
        parts: [
          {
            text: prompt,
          },
        ],
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
          const base64EncodeString: string = part.inlineData.data;
          fs.writeFileSync(filename, Buffer.from(base64EncodeString, 'base64'));
          return true;
        }
      }
    }
    console.error(`No image data returned for ${prompt}`);
    return false;
  } catch (err) {
    console.error(`Failed to generate image for ${prompt}:`, err);
    return false;
  }
}

async function main() {
  const publicImagesDir = path.join(process.cwd(), 'public', 'images');
  if (!fs.existsSync(publicImagesDir)) {
    fs.mkdirSync(publicImagesDir, { recursive: true });
  }

  for (const activity of activities) {
    const filename = path.join(publicImagesDir, `${activity.id}.png`);
    if (fs.existsSync(filename)) {
      console.log(`Skipping ${activity.id}, image already exists.`);
      continue;
    }

    console.log(`Generating image for ${activity.id}...`);
    const prompt = `A high quality, bright, and cheerful photo showing a toddler activity: ${activity.title}. ${activity.description}. The image should look like a professional lifestyle photo, well lit, safe, and fun.`;
    
    await generateImage(prompt, filename);
    // Add a small delay to avoid rate limits
    await new Promise(resolve => setTimeout(resolve, 2000));
  }
  
  console.log('Done generating images.');
}

main().catch(console.error);
