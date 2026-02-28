import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sparkles, Clock, Home, User, Video } from 'lucide-react';
import { filterActivities, getRandomActivity } from '../lib/filterActivities';
import { SpaceRequirement } from '../data/activities';

export function ActivityGenerator() {
  const [tiredMode, setTiredMode] = useState(false);
  const [age, setAge] = useState<number | undefined>();
  const [time, setTime] = useState<number | undefined>();
  const [space, setSpace] = useState<SpaceRequirement | undefined>();
  const navigate = useNavigate();

  const handleGenerate = () => {
    const filtered = filterActivities({ age, time, space, tiredMode });
    const activity = getRandomActivity(filtered);
    
    if (activity) {
      navigate(`/activities/${activity.id}`);
    } else {
      // Fallback: relax constraints if no match
      const relaxedFiltered = filterActivities({ tiredMode });
      const fallbackActivity = getRandomActivity(relaxedFiltered);
      if (fallbackActivity) {
        navigate(`/activities/${fallbackActivity.id}`);
      }
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto bg-white rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 p-8 md:p-10">
      {/* Tired Parent Mode Toggle */}
      <div className="flex justify-center mb-10">
        <button
          onClick={() => setTiredMode(!tiredMode)}
          className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 border ${
            tiredMode 
              ? 'bg-indigo-50 border-indigo-100 text-indigo-600 shadow-sm' 
              : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'
          }`}
        >
          <Video className="w-4 h-4" />
          Tired Parent Mode
        </button>
      </div>

      <div className="space-y-8 mb-10">
        {/* Age Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider w-24 shrink-0">
            <User className="w-4 h-4" />
            AGE
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '1-2 yrs', value: 1 },
              { label: '2-3 yrs', value: 2 },
              { label: '3-4 yrs', value: 3 },
              { label: '5-6 yrs', value: 5 }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setAge(age === option.value ? undefined : option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border ${
                  age === option.value
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Time Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider w-24 shrink-0">
            <Clock className="w-4 h-4" />
            TIME
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { label: '5 min', value: 5 },
              { label: '10 min', value: 10 },
              { label: '15+ min', value: 15 }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setTime(time === option.value ? undefined : option.value)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border flex items-center gap-1.5 ${
                  time === option.value
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                {option.label}
              </button>
            ))}
          </div>
        </div>

        {/* Space Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4">
          <label className="flex items-center gap-2 text-xs font-bold text-slate-400 uppercase tracking-wider w-24 shrink-0">
            <Home className="w-4 h-4" />
            SPACE
          </label>
          <div className="flex flex-wrap gap-2">
            {[
              { label: 'Small', value: 'small' },
              { label: 'Normal', value: 'normal' },
              { label: 'Yard', value: 'yard' }
            ].map((option) => (
              <button
                key={option.value}
                onClick={() => setSpace(space === option.value ? undefined : option.value as SpaceRequirement)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors border flex items-center gap-1.5 ${
                  space === option.value
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {option.value === 'yard' ? <Sparkles className="w-3.5 h-3.5" /> : <Home className="w-3.5 h-3.5" />}
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleGenerate}
          className="bg-[#f25f5c] hover:bg-[#e04e4b] text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-0.5 flex items-center justify-center gap-2"
        >
          <Sparkles className="w-5 h-5" />
          Show me an activity
        </button>
      </div>
    </div>
  );
}

