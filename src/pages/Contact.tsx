import React, { useState } from 'react';
import { Send, CheckCircle2 } from 'lucide-react';

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">Contact Us</h1>
      <p className="text-lg text-slate-600 mb-12">
        Have a question, feedback, or a great activity idea you'd like to share? We'd love to hear from you!
      </p>

      {submitted ? (
        <div className="bg-emerald-50 border border-emerald-200 rounded-3xl p-12 text-center">
          <div className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="w-10 h-10 text-emerald-600" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Message sent!</h2>
          <p className="text-slate-600">
            Thanks for reaching out. We'll get back to you as soon as we can (usually between nap times).
          </p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-8 shadow-sm border border-slate-100">
          <div className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-bold text-slate-700 mb-2">Name</label>
              <input 
                type="text" 
                id="name" 
                required
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-4 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-bold text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                id="email" 
                required
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-4 focus:ring-emerald-500 focus:border-emerald-500 transition-colors"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-bold text-slate-700 mb-2">Message</label>
              <textarea 
                id="message" 
                required
                rows={5}
                className="w-full bg-slate-50 border border-slate-200 text-slate-900 rounded-xl p-4 focus:ring-emerald-500 focus:border-emerald-500 transition-colors resize-none"
                placeholder="How can we help?"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-xl transition-colors flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5" />
              Send Message
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
