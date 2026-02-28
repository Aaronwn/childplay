import React from 'react';

export function About() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-8">About ChildPlay</h1>
      <div className="prose prose-lg prose-emerald max-w-none text-slate-600">
        <p>
          ChildPlay was built for tired parents. You know the feeling—it's 4 PM on a rainy Tuesday, your toddler is bouncing off the walls, and you have exactly zero energy to set up a complicated craft involving pipe cleaners and googly eyes.
        </p>
        <p>
          We believe that keeping kids entertained shouldn't require a trip to the craft store, a Pinterest board, or an hour of prep time.
        </p>
        <h2>Our Philosophy</h2>
        <ul>
          <li><strong>Zero Prep:</strong> If it takes longer to set up than it does to play, it's not on ChildPlay.</li>
          <li><strong>Household Items Only:</strong> We only use things you already have lying around—pillows, socks, cardboard boxes, tape, and water.</li>
          <li><strong>Tired-Friendly:</strong> We have a whole category dedicated to activities where you can sit or lie down while your child plays.</li>
          <li><strong>No Ads, No Tracking:</strong> We don't want your data, and we don't want to show you ads. ChildPlay is cookie-free and completely free to use.</li>
        </ul>
        <p>
          This is a demo project created to showcase a 1:1 replica of the original ChildPlay.app.
        </p>
      </div>
    </div>
  );
}
