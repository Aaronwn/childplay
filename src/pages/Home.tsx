import React from 'react';
import { Link } from 'react-router-dom';
import { ActivityGenerator } from '../components/ActivityGenerator';
import { ActivityCard } from '../components/ActivityCard';
import { FAQAccordion } from '../components/FAQAccordion';
import { activities } from '../data/activities';
import { Sparkles, Check, Filter, Video, Target, Clock, ArrowRight } from 'lucide-react';

export function Home() {
  const popularActivities = activities.slice(0, 4);

  return (
    <div className="flex flex-col min-h-screen font-sans">
      {/* Hero Section */}
      <section className="relative pt-20 pb-20 overflow-hidden bg-gradient-to-b from-[#fff5f5] to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 text-slate-600 font-medium text-sm mb-8 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#f25f5c]" />
            <span>120+ zero-prep activities</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6 leading-tight max-w-4xl mx-auto">
            Activity ideas for <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#f25f5c] to-[#9b5de5]">tired parents</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
            Zero-prep activities using stuff you already have.<br className="hidden md:block" /> No Pinterest boards required.
          </p>

          <div className="flex justify-center mb-8">
            <a 
              href="#generator"
              className="bg-[#f25f5c] hover:bg-[#e04e4b] text-white font-bold text-lg py-4 px-8 rounded-2xl shadow-lg shadow-red-200 transition-all duration-300 hover:-translate-y-0.5 flex items-center gap-2"
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <Sparkles className="w-5 h-5" />
              Find an activity
            </a>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium text-slate-500">
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Common household items only
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              3-6 simple steps
            </div>
            <div className="flex items-center gap-2">
              <Check className="w-4 h-4" />
              Ages 1-6 years
            </div>
          </div>
        </div>
      </section>

      {/* Generator Section */}
      <section id="generator" className="py-20 bg-white scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">What are you looking for?</h2>
          <p className="text-lg text-slate-600 mb-12">Set your preferences or jump straight in</p>
          <ActivityGenerator />
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How it works</h2>
            <p className="text-lg text-slate-600">Get a fun activity idea in seconds</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="text-center bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-16 h-16 mx-auto bg-red-50 rounded-2xl flex items-center justify-center mb-6">
                <Filter className="w-8 h-8 text-[#f25f5c]" />
              </div>
              <div className="inline-block px-3 py-1 bg-red-50 text-[#f25f5c] text-xs font-bold rounded-full mb-4">STEP 1</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Pick your filters</h3>
              <p className="text-slate-600 leading-relaxed">Age, duration, energy level, space — or skip and get a surprise</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-16 h-16 mx-auto bg-purple-50 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-[#9b5de5]" />
              </div>
              <div className="inline-block px-3 py-1 bg-purple-50 text-[#9b5de5] text-xs font-bold rounded-full mb-4">STEP 2</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Generate</h3>
              <p className="text-slate-600 leading-relaxed">We find something perfect from 120+ tested activity ideas</p>
            </div>
            
            <div className="text-center bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-16 h-16 mx-auto bg-green-50 rounded-2xl flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 text-emerald-500" />
              </div>
              <div className="inline-block px-3 py-1 bg-green-50 text-emerald-600 text-xs font-bold rounded-full mb-4">STEP 3</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Play!</h3>
              <p className="text-slate-600 leading-relaxed">Simple steps, household items — just grab and go</p>
            </div>
          </div>
        </div>
      </section>

      {/* Built for real life */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Built for real life</h2>
            <p className="text-lg text-slate-600">We know you're tired. We designed for that.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-6">
                <Video className="w-6 h-6 text-[#9b5de5]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Exhausted? We get it</h3>
              <p className="text-slate-600 leading-relaxed">
                Tired Parent Mode shows low-energy activities you can supervise from the couch. No judgement here.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-red-50 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-[#f25f5c]" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Ages 1-6, sorted</h3>
              <p className="text-slate-600 leading-relaxed">
                Every activity is tagged by age range so you get ideas that actually work for your kid's stage.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-emerald-500" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">No shopping required</h3>
              <p className="text-slate-600 leading-relaxed">
                Every activity uses common household items. Paper, tape, boxes, kitchen stuff — things you already have.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular activities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Popular activities</h2>
          <p className="text-lg text-slate-600 mb-12">A taste of what you'll find</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 text-left">
            {popularActivities.map(activity => (
              <ActivityCard key={activity.id} activity={activity} />
            ))}
          </div>

          <Link 
            to="/activities" 
            className="inline-flex items-center gap-2 text-[#f25f5c] font-bold hover:text-[#e04e4b] transition-colors"
          >
            Browse all 120+ activities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Browse activities */}
      <section className="py-24 bg-white border-t border-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Browse activities</h2>
          <p className="text-lg text-slate-600 mb-16">Find exactly what you need</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto text-left mb-16">
            {/* By Age */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">BY AGE</h3>
              <ul className="space-y-4">
                <li><Link to="/activities-for-1-year-olds" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Activities for 1 year olds</Link></li>
                <li><Link to="/activities-for-2-year-olds" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Activities for 2 year olds</Link></li>
                <li><Link to="/activities-for-3-year-olds" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Activities for 3 year olds</Link></li>
                <li><Link to="/age/3-4" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Activities for 3-4 year olds</Link></li>
                <li><Link to="/age/5-6" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Activities for 5-6 year olds</Link></li>
              </ul>
            </div>

            {/* By Type */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">BY TYPE</h3>
              <ul className="space-y-4">
                <li><Link to="/sensory-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Sensory activities</Link></li>
                <li><Link to="/easy-crafts-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Easy crafts</Link></li>
                <li><Link to="/gross-motor-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Gross motor activities</Link></li>
                <li><Link to="/fine-motor-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Fine motor activities</Link></li>
                <li><Link to="/indoor-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] transition-colors">All indoor activities</Link></li>
              </ul>
            </div>

            {/* By Situation */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">BY SITUATION</h3>
              <ul className="space-y-4">
                <li><Link to="/energy/tired" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Tired parent mode</Link></li>
                <li><Link to="/rainy-day-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Rainy day activities</Link></li>
                <li><Link to="/sick-day-activities" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Sick day activities</Link></li>
                <li><Link to="/screen-free-activities" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Screen-free activities</Link></li>
              </ul>
            </div>

            {/* Quick & Easy */}
            <div className="bg-white p-8 rounded-[2rem] shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-6">QUICK & EASY</h3>
              <ul className="space-y-4">
                <li><Link to="/5-minute-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] transition-colors">5-minute activities</Link></li>
                <li><Link to="/no-mess-activities-for-kids" className="text-slate-600 hover:text-[#f25f5c] transition-colors">No-mess activities</Link></li>
                <li><Link to="/quiet-activities-for-kids" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Quiet activities</Link></li>
                <li><Link to="/space/small" className="text-slate-600 hover:text-[#f25f5c] transition-colors">Small space activities</Link></li>
              </ul>
            </div>
          </div>

          <Link 
            to="/activities" 
            className="inline-flex items-center gap-2 text-[#f25f5c] font-bold hover:text-[#e04e4b] transition-colors"
          >
            View all 120+ activities
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
          </div>
          <FAQAccordion />
        </div>
      </section>
    </div>
  );
}
