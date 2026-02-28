import React from 'react';
import { Link } from 'react-router-dom';
import { Cookie, CheckCircle2, Home } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-2 mb-6 group">
              <div className="bg-[#f25f5c] p-2 rounded-xl group-hover:bg-[#e04e4b] transition-colors relative">
                <Home className="w-6 h-6 text-white" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full mt-1"></div>
                </div>
              </div>
              <span className="font-extrabold text-2xl tracking-tight text-white">
                ChildPlay
              </span>
            </Link>
            <p className="text-slate-400 text-lg max-w-md leading-relaxed mb-8">
              Zero-prep activity ideas for tired parents. Using stuff you already have at home.
            </p>
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700/50">
                <Cookie className="w-4 h-4 text-[#f25f5c]" />
                <span className="text-sm font-medium text-slate-300">Cookie-free website</span>
              </div>
              <div className="flex items-center gap-2 bg-slate-800/50 rounded-full px-4 py-2 border border-slate-700/50">
                <CheckCircle2 className="w-4 h-4 text-[#f25f5c]" />
                <span className="text-sm font-medium text-slate-300">120+ zero-prep activities</span>
              </div>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Browse</h4>
            <ul className="space-y-4">
              <li><Link to="/activities" className="hover:text-[#f25f5c] transition-colors">All Activities</Link></li>
              <li><Link to="/energy/tired" className="hover:text-[#f25f5c] transition-colors">Tired Parent Mode</Link></li>
              <li><Link to="/5-minute-activities-for-toddlers" className="hover:text-[#f25f5c] transition-colors">5-Minute Activities</Link></li>
              <li><Link to="/rainy-day-activities-for-toddlers" className="hover:text-[#f25f5c] transition-colors">Rainy Day Ideas</Link></li>
              <li><Link to="/screen-free-activities" className="hover:text-[#f25f5c] transition-colors">Screen-Free</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/about" className="hover:text-[#f25f5c] transition-colors">About</Link></li>
              <li><Link to="/privacy" className="hover:text-[#f25f5c] transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-[#f25f5c] transition-colors">Terms of Use</Link></li>
              <li><Link to="/contact" className="hover:text-[#f25f5c] transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} ChildPlay. Made with care for tired parents everywhere.
          </p>
          <p className="text-slate-600 text-sm">
            Not a real company. Demo project.
          </p>
        </div>
      </div>
    </footer>
  );
}
