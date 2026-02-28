import React from 'react';
import { Link } from 'react-router-dom';
import { Clock, Home, ArrowRight, Smile } from 'lucide-react';
import { Activity } from '../data/activities';
import { cn } from '../lib/utils';
import { ActivityImage } from './ActivityImage';

interface ActivityListCardProps {
  activity: Activity;
  className?: string;
}

export function ActivityListCard({ activity, className }: ActivityListCardProps) {
  return (
    <Link
      to={`/activities/${activity.id}`}
      className={cn(
        "group flex flex-col sm:flex-row bg-white rounded-3xl p-4 sm:p-6 gap-6 border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300",
        className
      )}
    >
      {/* Image */}
      <div className="flex-shrink-0 w-full sm:w-48 h-48 rounded-2xl overflow-hidden bg-slate-100">
        <ActivityImage 
          activity={activity} 
          className="transition-transform duration-500 group-hover:scale-105" 
        />
      </div>
      
      {/* Content */}
      <div className="flex flex-col flex-grow min-w-0">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-bold text-slate-900 group-hover:text-[#f25f5c] transition-colors truncate pr-4">
            {activity.title}
          </h3>
          <div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center flex-shrink-0 group-hover:bg-red-50 transition-colors">
            <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-[#f25f5c] transition-colors" />
          </div>
        </div>
        
        {/* Meta info */}
        <div className="flex flex-wrap items-center gap-4 text-sm text-slate-500 font-medium mb-4">
          <div className="flex items-center gap-1.5">
            <Smile className="w-4 h-4 text-slate-400" />
            <span>{activity.ageMin}-{activity.ageMax} years</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-4 h-4 text-slate-400" />
            <span>{activity.durationMin}-{activity.durationMax} min</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Home className="w-4 h-4 text-slate-400" />
            <span className="capitalize">{activity.space} space</span>
          </div>
        </div>
        
        {/* Description */}
        <p className="text-slate-600 leading-relaxed mb-6 line-clamp-2">
          {activity.description}
        </p>
        
        {/* Tags */}
        <div className="mt-auto flex flex-wrap gap-2">
          {activity.types.map(type => (
            <span 
              key={type} 
              className="text-xs font-semibold px-3 py-1 rounded-full bg-slate-100 text-slate-600"
            >
              {type}
            </span>
          ))}
          {activity.tags.includes('Tired-friendly') && (
            <span className="text-xs font-semibold px-3 py-1 rounded-full bg-indigo-50 text-indigo-600">
              Tired-friendly
            </span>
          )}
        </div>
      </div>
    </Link>
  );
}
