import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { activities } from '../data/activities';
import { ActivityCard } from '../components/ActivityCard';
import { Clock, User, Moon, CheckCircle2, ArrowLeft, Sparkles, AlertCircle, ChevronRight } from 'lucide-react';
import { ActivityImage } from '../components/ActivityImage';

export function ActivityDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  
  const activity = activities.find(a => a.id === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!activity) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center px-4">
        <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
          <AlertCircle className="w-12 h-12 text-slate-400" />
        </div>
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Activity not found</h1>
        <p className="text-lg text-slate-600 mb-8 max-w-md">
          We couldn't find the activity you're looking for. It might have been moved or deleted.
        </p>
        <Link 
          to="/activities" 
          className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3 px-8 rounded-full transition-colors flex items-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to all activities
        </Link>
      </div>
    );
  }

  const isTiredFriendly = activity.tags.includes('Tired-friendly') || activity.energyLevel === 'tired';
  
  // Find related activities (same type or age range, excluding current)
  const relatedActivities = activities
    .filter(a => a.id !== activity.id && (
      a.types.some(t => activity.types.includes(t)) || 
      (a.ageMin <= activity.ageMax && a.ageMax >= activity.ageMin)
    ))
    .slice(0, 4);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-sm text-slate-500 font-medium mb-8">
        <Link to="/" className="hover:text-emerald-600 transition-colors">Home</Link>
        <ChevronRight className="w-4 h-4" />
        <Link to="/activities" className="hover:text-emerald-600 transition-colors">Activities</Link>
        <ChevronRight className="w-4 h-4" />
        <span className="text-slate-900 truncate max-w-[200px] sm:max-w-none">{activity.title}</span>
      </nav>

      {/* Hero Image */}
      <div className="relative w-full aspect-[16/9] md:aspect-[21/9] rounded-3xl overflow-hidden mb-12 shadow-lg bg-slate-100">
        <ActivityImage 
          activity={activity} 
          className="w-full h-full object-cover"
        />
        {isTiredFriendly && (
          <div className="absolute top-6 right-6 bg-indigo-600 text-white text-sm font-bold px-4 py-2 rounded-full flex items-center gap-2 shadow-lg backdrop-blur-sm bg-opacity-90">
            <Moon className="w-4 h-4 fill-current" />
            <span>Tired-friendly</span>
          </div>
        )}
      </div>

      {/* Header Info */}
      <div className="mb-16">
        <div className="flex flex-wrap gap-3 mb-6">
          {activity.types.map(type => (
            <span 
              key={type} 
              className="text-xs uppercase tracking-wider font-bold px-3 py-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-100"
            >
              {type}
            </span>
          ))}
        </div>
        
        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
          {activity.title}
        </h1>
        
        <div className="flex flex-wrap items-center gap-6 text-slate-600 font-medium bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex items-center gap-2.5">
            <div className="bg-emerald-100 p-2 rounded-lg">
              <User className="w-5 h-5 text-emerald-700" />
            </div>
            <span className="text-lg">{activity.ageMin}-{activity.ageMax} years old</span>
          </div>
          <div className="hidden sm:block w-px h-8 bg-slate-200"></div>
          <div className="flex items-center gap-2.5">
            <div className="bg-amber-100 p-2 rounded-lg">
              <Clock className="w-5 h-5 text-amber-700" />
            </div>
            <span className="text-lg">{activity.durationMin}-{activity.durationMax} minutes</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
        {/* Materials Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 sticky top-28">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-500" />
              What you need
            </h3>
            <ul className="space-y-4">
              {activity.materials.map((material, index) => (
                <li key={index} className="flex items-start gap-3 text-slate-700">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{material}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-slate-200">
              <p className="text-sm text-slate-500 font-medium italic">
                *No special purchases required. Use what you have!
              </p>
            </div>
          </div>
        </div>

        {/* Steps Content */}
        <div className="md:col-span-2">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">How to play</h2>
          <div className="space-y-8">
            {activity.steps.map((step, index) => (
              <div key={index} className="flex gap-6 group">
                <div className="flex-shrink-0 w-12 h-12 bg-emerald-100 text-emerald-700 rounded-2xl flex items-center justify-center font-bold text-xl shadow-sm border border-emerald-200 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
                  {index + 1}
                </div>
                <p className="text-lg text-slate-700 leading-relaxed pt-2">
                  {step}
                </p>
              </div>
            ))}
          </div>

          {activity.variants && activity.variants.length > 0 && (
            <div className="mt-16 bg-indigo-50 p-8 rounded-3xl border border-indigo-100">
              <h3 className="text-xl font-bold text-indigo-900 mb-6 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-indigo-500" />
                Make it different
              </h3>
              <ul className="space-y-4">
                {activity.variants.map((variant, index) => (
                  <li key={index} className="flex items-start gap-3 text-indigo-800">
                    <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2.5 flex-shrink-0"></div>
                    <span className="leading-relaxed">{variant}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      {/* Related Activities */}
      {relatedActivities.length > 0 && (
        <div className="pt-16 border-t border-slate-100">
          <h2 className="text-3xl font-bold text-slate-900 mb-8">You might also like</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {relatedActivities.map(related => (
              <ActivityCard key={related.id} activity={related} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
