import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Sparkles, Home } from 'lucide-react';

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBrowseOpen, setIsBrowseOpen] = useState(false);
  const location = useLocation();

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsBrowseOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group" onClick={closeMenu}>
            <div className="bg-[#f25f5c] p-2 rounded-xl group-hover:bg-[#e04e4b] transition-colors relative">
              <Home className="w-6 h-6 text-white" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full mt-1"></div>
              </div>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-slate-900">
              ChildPlay
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <div className="relative group">
              <button 
                className="flex items-center gap-1.5 text-slate-600 hover:text-[#f25f5c] font-semibold py-2 transition-colors"
                onMouseEnter={() => setIsBrowseOpen(true)}
                onMouseLeave={() => setIsBrowseOpen(false)}
              >
                Browse <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Dropdown Menu */}
              <div 
                className={`absolute top-full left-1/2 -translate-x-1/2 w-[600px] bg-white rounded-2xl shadow-xl border border-slate-100 p-6 grid grid-cols-3 gap-8 transition-all duration-200 origin-top ${
                  isBrowseOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                }`}
                onMouseEnter={() => setIsBrowseOpen(true)}
                onMouseLeave={() => setIsBrowseOpen(false)}
              >
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">By Age</h3>
                  <ul className="space-y-3">
                    <li><Link to="/activities-for-1-year-olds" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">1 Year Olds</Link></li>
                    <li><Link to="/activities-for-2-year-olds" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">2 Year Olds</Link></li>
                    <li><Link to="/activities-for-3-year-olds" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">3 Year Olds</Link></li>
                    <li><Link to="/age/3-4" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">3-4 Year Olds</Link></li>
                    <li><Link to="/age/5-6" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">5-6 Year Olds</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">By Type</h3>
                  <ul className="space-y-3">
                    <li><Link to="/sensory-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">Sensory</Link></li>
                    <li><Link to="/easy-crafts-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">Crafts</Link></li>
                    <li><Link to="/gross-motor-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">Gross Motor</Link></li>
                    <li><Link to="/fine-motor-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">Fine Motor</Link></li>
                    <li><Link to="/indoor-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">Indoor</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-4">By Situation</h3>
                  <ul className="space-y-3">
                    <li><Link to="/5-minute-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">5-Minute</Link></li>
                    <li><Link to="/rainy-day-activities-for-toddlers" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">Rainy Day</Link></li>
                    <li><Link to="/sick-day-activities" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">Sick Day</Link></li>
                    <li><Link to="/no-mess-activities-for-kids" className="text-slate-600 hover:text-[#f25f5c] font-medium transition-colors block">No Mess</Link></li>
                    <li><Link to="/energy/tired" className="text-[#9b5de5] hover:text-[#8a4bd4] font-bold transition-colors block flex items-center gap-1.5">Tired Parent Mode</Link></li>
                  </ul>
                </div>
                <div className="col-span-3 pt-4 mt-2 border-t border-slate-100">
                  <Link to="/activities" className="text-[#f25f5c] hover:text-[#e04e4b] font-bold transition-colors flex items-center justify-center">
                    Browse all 120+ activities &rarr;
                  </Link>
                </div>
              </div>
            </div>
            
            <Link to="/activities" className="text-slate-600 hover:text-[#f25f5c] font-semibold transition-colors">
              All Activities
            </Link>
            
            <a 
              href="#generator" 
              className="bg-[#f25f5c] hover:bg-[#e04e4b] text-white px-6 py-2.5 rounded-full font-bold transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
              onClick={(e) => {
                if (location.pathname !== '/') {
                  // Let router handle it, or we'll navigate manually in a real app
                } else {
                  e.preventDefault();
                  document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Get ideas
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 absolute w-full left-0 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-1 max-h-[80vh] overflow-y-auto">
            <Link 
              to="/activities" 
              className="block px-4 py-3 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-xl"
              onClick={closeMenu}
            >
              All Activities
            </Link>
            <Link 
              to="/energy/tired" 
              className="block px-4 py-3 text-base font-bold text-[#9b5de5] hover:bg-purple-50 rounded-xl"
              onClick={closeMenu}
            >
              Tired Parent Mode
            </Link>
            
            <div className="pt-4 pb-2">
              <p className="px-4 text-xs font-bold uppercase tracking-wider text-slate-400">By Age</p>
              <div className="mt-2 grid grid-cols-2 gap-2 px-2">
                <Link to="/activities-for-1-year-olds" className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={closeMenu}>1 Year</Link>
                <Link to="/activities-for-2-year-olds" className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={closeMenu}>2 Years</Link>
                <Link to="/activities-for-3-year-olds" className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={closeMenu}>3 Years</Link>
                <Link to="/age/3-4" className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={closeMenu}>3-4 Years</Link>
              </div>
            </div>

            <div className="pt-4 pb-2 border-t border-slate-100">
              <p className="px-4 text-xs font-bold uppercase tracking-wider text-slate-400">By Type</p>
              <div className="mt-2 grid grid-cols-2 gap-2 px-2">
                <Link to="/sensory-activities-for-toddlers" className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={closeMenu}>Sensory</Link>
                <Link to="/easy-crafts-for-toddlers" className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={closeMenu}>Crafts</Link>
                <Link to="/gross-motor-activities-for-toddlers" className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={closeMenu}>Gross Motor</Link>
                <Link to="/indoor-activities-for-toddlers" className="px-4 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50 rounded-lg" onClick={closeMenu}>Indoor</Link>
              </div>
            </div>

            <div className="pt-6 px-4">
              <a 
                href="#generator" 
                className="block w-full text-center bg-[#f25f5c] hover:bg-[#e04e4b] text-white px-6 py-3.5 rounded-xl font-bold transition-colors"
                onClick={(e) => {
                  closeMenu();
                  if (location.pathname === '/') {
                    e.preventDefault();
                    document.getElementById('generator')?.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                Get ideas
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
