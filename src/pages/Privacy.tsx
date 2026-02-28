import React from 'react';

export function Privacy() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">Privacy Policy</h1>
      <div className="prose prose-lg prose-emerald max-w-none text-slate-600">
        <p>Last updated: February 28, 2026</p>
        <p>
          At ChildPlay, we believe your privacy is a fundamental right. Our privacy policy is simple: <strong>we do not collect, store, or share your personal data.</strong>
        </p>
        <h2>Cookie-Free Experience</h2>
        <p>
          ChildPlay is a cookie-free website. We do not use tracking cookies, analytics cookies, or advertising cookies. When you visit our site, we do not track your behavior across the web.
        </p>
        <h2>No Accounts</h2>
        <p>
          We do not require you to create an account to use ChildPlay. All of our activity ideas are freely available to everyone, without any login walls or email capture forms.
        </p>
        <h2>Analytics</h2>
        <p>
          We do not use Google Analytics or any other third-party tracking tools that collect personally identifiable information.
        </p>
        <h2>Changes to This Policy</h2>
        <p>
          If we ever decide to change our privacy policy, we will post those changes on this page. However, our commitment to a tracking-free, privacy-first experience will not change.
        </p>
      </div>
    </div>
  );
}
