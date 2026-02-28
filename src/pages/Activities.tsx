import React, { useState, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { ActivityListCard } from '../components/ActivityListCard';
import { activities, ActivityType, EnergyLevel, SpaceRequirement } from '../data/activities';
import { filterActivities } from '../lib/filterActivities';
import { Search, Moon, ChevronRight, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';

export function Activities() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState('');

  // Parse filters from URL
  const age = searchParams.get('age') ? Number(searchParams.get('age')) : undefined;
  const time = searchParams.get('time') ? Number(searchParams.get('time')) : undefined;
  const space = (searchParams.get('space') as SpaceRequirement) || undefined;
  const tiredMode = searchParams.get('tiredMode') === 'true';

  const filteredActivities = filterActivities({ age, time, space, tiredMode }).filter(activity => {
    if (!searchQuery) return true;
    const lowerQuery = searchQuery.toLowerCase();
    return activity.title.toLowerCase().includes(lowerQuery) || 
           activity.description.toLowerCase().includes(lowerQuery);
  });

  const toggleFilter = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (newParams.get(key) === value) {
      newParams.delete(key);
    } else {
      newParams.set(key, value);
    }
    setSearchParams(newParams);
  };

  const toggleTiredMode = () => {
    const newParams = new URLSearchParams(searchParams);
    if (tiredMode) {
      newParams.delete('tiredMode');
    } else {
      newParams.set('tiredMode', 'true');
    }
    setSearchParams(newParams);
  };

  const clearFilters = () => {
    setSearchParams(new URLSearchParams());
    setSearchQuery('');
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-8">
        <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
        <span className="text-slate-300">/</span>
        <span className="text-slate-900">All Activities</span>
      </nav>

      <div className="mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          All Activities
        </h1>
        <p className="text-lg text-slate-600">
          {activities.length} activities to explore. All simple, all using household items.
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-12 space-y-6">
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search activities..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-slate-200 text-slate-900 rounded-2xl py-4 px-6 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 transition-colors text-lg shadow-sm placeholder:text-slate-400"
            />
          </div>
          <button className="bg-white border border-slate-200 text-slate-900 font-bold py-4 px-8 rounded-2xl hover:bg-slate-50 transition-colors shadow-sm flex items-center justify-center gap-2 text-lg">
            <Search className="w-5 h-5" />
            Search
          </button>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center gap-3">
          <button
            onClick={toggleTiredMode}
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full font-semibold transition-colors border shadow-sm",
              tiredMode 
                ? "bg-indigo-50 border-indigo-200 text-indigo-700" 
                : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
            )}
          >
            <Moon className={cn("w-4 h-4", tiredMode ? "fill-current" : "")} />
            Tired mode
          </button>

          <div className="w-px h-6 bg-slate-200 mx-1 hidden sm:block"></div>

          {/* Age Filters */}
          {[
            { label: '1–2y', value: '1' },
            { label: '2–3y', value: '2' },
            { label: '3–4y', value: '3' },
            { label: '5–6y', value: '5' },
          ].map(f => (
            <button
              key={f.value}
              onClick={() => toggleFilter('age', f.value)}
              className={cn(
                "px-5 py-2.5 rounded-full font-semibold transition-colors border shadow-sm",
                age === Number(f.value)
                  ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              )}
            >
              {f.label}
            </button>
          ))}

          <div className="w-px h-6 bg-slate-200 mx-1 hidden sm:block"></div>

          {/* Time Filters */}
          {[
            { label: '5m', value: '5' },
            { label: '10m', value: '10' },
            { label: '15m+', value: '15' },
          ].map(f => (
            <button
              key={f.value}
              onClick={() => toggleFilter('time', f.value)}
              className={cn(
                "px-5 py-2.5 rounded-full font-semibold transition-colors border shadow-sm",
                time === Number(f.value)
                  ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              )}
            >
              {f.label}
            </button>
          ))}

          <div className="w-px h-6 bg-slate-200 mx-1 hidden sm:block"></div>

          {/* Space Filters */}
          {[
            { label: 'Small', value: 'small' },
            { label: 'Normal', value: 'normal' },
            { label: 'Yard', value: 'yard' },
          ].map(f => (
            <button
              key={f.value}
              onClick={() => toggleFilter('space', f.value)}
              className={cn(
                "px-5 py-2.5 rounded-full font-semibold transition-colors border shadow-sm",
                space === f.value
                  ? "bg-emerald-50 border-emerald-200 text-emerald-700"
                  : "bg-white border-slate-200 text-slate-700 hover:bg-slate-50"
              )}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Results */}
      {filteredActivities.length === 0 ? (
        <div className="text-center py-24 bg-white rounded-3xl border border-slate-100 shadow-sm">
          <div className="w-20 h-20 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
            <Sparkles className="w-10 h-10 text-slate-300" />
          </div>
          <h3 className="text-2xl font-bold text-slate-900 mb-2">No activities found</h3>
          <p className="text-slate-500 mb-8">Try adjusting your filters to see more results.</p>
          <button 
            onClick={clearFilters}
            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors"
          >
            Clear all filters
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {filteredActivities.map(activity => (
            <ActivityListCard key={activity.id} activity={activity} />
          ))}
        </div>
      )}
    </div>
  );
}
