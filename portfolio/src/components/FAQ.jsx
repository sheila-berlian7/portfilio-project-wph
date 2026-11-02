import { useState } from 'react';
import { faqData } from '../data/portfolioData';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(null);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 px-6 max-w-3xl mx-auto space-y-8">
      <h2 className="text-3xl font-bold text-center">Frequently Asked Questions</h2>
      <div className="space-y-4">
        {faqData.map((item, idx) => (
          <div key={idx} className="bg-[#141419] border border-gray-800 rounded-xl overflow-hidden">
            <button 
              onClick={() => toggle(idx)}
              className="w-full p-5 text-left font-medium flex justify-between items-center hover:bg-[#1e1e24] transition"
            >
              <span>{item.question}</span>
              <span className="text-purple-400 font-bold">{openIdx === idx ? '-' : '+'}</span>
            </button>
            {openIdx === idx && (
              <div className="p-5 pt-0 text-sm text-gray-400 border-t border-gray-800/50">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}