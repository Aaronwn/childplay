import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ActivityCard } from '../components/ActivityCard';
import { activities } from '../data/activities';
import { filterActivities, FilterParams } from '../lib/filterActivities';
import { ChevronRight, Sparkles } from 'lucide-react';

interface CategoryPageProps {
  title: string;
  description: string;
  filters: FilterParams;
}

export function CategoryPage({ title, description, filters }: CategoryPageProps) {
  const location = useLocation();
  const filteredActivities = filterActivities(filters);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-8">
        <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-900">{title}</span>
      </nav>

      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          {title}
        </h1>
        <p className="text-lg text-slate-600 max-w-2xl">
          {description}
        </p>
      </div>

      {filteredActivities.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-slate-300" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">No activities found</h3>
          <p className="text-slate-500 mb-8">We're still adding activities to this category.</p>
          <Link 
            to="/activities"
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors inline-block"
          >
            Browse all activities
          </Link>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredActivities.map(activity => (
            <ActivityCard key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  );
}
