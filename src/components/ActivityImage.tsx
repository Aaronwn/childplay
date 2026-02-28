import React, { useState, useEffect } from 'react';
import { Activity } from '../data/activities';
import { generateActivityImage } from '../lib/imageService';
import { Image as ImageIcon, Loader2 } from 'lucide-react';
import { cn } from '../lib/utils';

interface ActivityImageProps {
  activity: Activity;
  className?: string;
  containerClassName?: string;
}

export function ActivityImage({ activity, className, containerClassName }: ActivityImageProps) {
  const [imageUrl, setImageUrl] = useState<string | null>(activity.image || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    let isMounted = true;

    const loadImage = async () => {
      try {
        setLoading(true);
        setError(false);
        if (process.env.GEMINI_API_KEY) {
          const url = await generateActivityImage(activity.id, activity.title, activity.description);
          if (isMounted) {
            setImageUrl(url);
          }
        }
      } catch (err) {
        console.error('Failed to load image for', activity.title, err);
        if (isMounted && !activity.image) {
          setError(true);
        }
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    loadImage();

    return () => {
      isMounted = false;
    };
  }, [activity.id, activity.title, activity.description, activity.image]);

  if (error || !imageUrl) {
    return (
      <div className={cn("w-full h-full bg-slate-100 flex flex-col items-center justify-center text-slate-400 gap-2 p-4 text-center", containerClassName, className)}>
        <ImageIcon className="w-8 h-8" />
        <span className="text-xs font-medium">Image unavailable</span>
      </div>
    );
  }

  return (
    <div className={cn("relative w-full h-full", containerClassName)}>
      <img
        src={imageUrl}
        alt={activity.title}
        loading="lazy"
        referrerPolicy="no-referrer"
        className={cn("w-full h-full object-cover", className)}
        onLoad={() => setLoading(false)}
        onError={() => { setError(true); setLoading(false); }}
      />
      {loading && (
        <div className="absolute inset-0 bg-slate-900/20 flex items-center justify-center backdrop-blur-[2px] transition-opacity duration-300">
          <Loader2 className="w-8 h-8 text-white animate-spin" />
        </div>
      )}
    </div>
  );
}
