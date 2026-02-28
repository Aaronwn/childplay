import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, User, Moon } from 'lucide-react';
import { Activity } from '../data/activities';
import { cn } from '../lib/utils';
import { ActivityImage } from './ActivityImage';

interface ActivityCardProps {
  activity: Activity;
  className?: string;
}

export function ActivityCard({ activity, className }: ActivityCardProps) {
  const isTiredFriendly = activity.tags.includes('Tired-friendly') || activity.energyLevel === 'tired';

  return (
    <Link
      to={`/activities/${activity.id}`}
      className={cn(
        "group flex flex-col bg-white rounded-[1.5rem] overflow-hidden border border-slate-100 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1",
        className
      )}
    >
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <ActivityImage 
          activity={activity} 
          className="transition-transform duration-500 group-hover:scale-105" 
        />
        {isTiredFriendly && (
          <div className="absolute top-3 right-3 bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-sm backdrop-blur-sm bg-opacity-90">
            <Moon className="w-3.5 h-3.5" />
            <span>Tired-friendly</span>
          </div>
        )}
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-slate-900 mb-3 line-clamp-2 group-hover:text-[#f25f5c] transition-colors">
          {activity.title}
        </h3>
        
        <div className="flex items-center gap-4 text-sm text-slate-500 font-medium mb-4">
          <div className="flex items-center gap-1.5">
            <User className="w-4 h-4 text-slate-400" />
            <span>{activity.ageMin}-{activity.ageMax} yrs</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{activity.durationMin}-{activity.durationMax} min</span>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-2">
          {activity.types.slice(0, 3).map(type => (
            <span 
              key={type} 
              className="text-xs font-medium px-3 py-1 rounded-full bg-slate-50 text-slate-600 border border-slate-200"
            >
              {type}
            </span>
          ))}
        </div>
      </div>
    </Link>
  );
}
