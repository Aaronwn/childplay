import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "What is ChildPlay?",
    answer: "ChildPlay is a free library of over 120 zero-prep activity ideas for kids ages 1-6. It's designed specifically for tired parents who need quick, easy ways to entertain their children without buying new supplies or spending hours setting up."
  },
  {
    question: "Do I need special supplies for these activities?",
    answer: "No! Every activity on ChildPlay is designed to use common household items you probably already have lying around—like pillows, socks, cardboard boxes, tape, and water."
  },
  {
    question: "What ages are these activities for?",
    answer: "Our activities are designed for toddlers and preschoolers, generally ages 1 to 6 years old. You can filter activities by specific age ranges to find the perfect fit for your child."
  },
  {
    question: "What is Tired Parent Mode?",
    answer: "Tired Parent Mode is a special filter that only shows activities where you can sit down, lie down, or exert minimal physical energy while your child plays. It's perfect for those days when you're completely exhausted but still need to keep them entertained."
  },
  {
    question: "Is ChildPlay free to use?",
    answer: "Yes, completely free. No subscriptions, no paywalls, and no annoying ads."
  }
];

export function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="w-full max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => (
        <div 
          key={index} 
          className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300 hover:border-slate-200"
        >
          <button
            className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none"
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            <span className="font-bold text-lg text-slate-800 pr-8">{faq.question}</span>
            <ChevronDown 
              className={`w-5 h-5 text-emerald-500 transition-transform duration-300 flex-shrink-0 ${
                openIndex === index ? 'rotate-180' : ''
              }`} 
            />
          </button>
          
          <div 
            className={`px-6 overflow-hidden transition-all duration-300 ease-in-out ${
              openIndex === index ? 'max-h-96 pb-6 opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <p className="text-slate-600 leading-relaxed">
              {faq.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
