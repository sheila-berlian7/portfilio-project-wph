import { testimonialsData } from '../data/portfolioData';

export default function Testimonials() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-center">Client Testimonials</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {testimonialsData.map((test, index) => (
          <div key={index} className="bg-[#141419] border border-gray-800 p-8 rounded-2xl space-y-4">
            <p className="text-gray-300 text-sm italic">"{test.text}"</p>
            <div>
              <h4 className="font-bold">{test.name}</h4>
              <p className="text-xs text-gray-400">{test.role}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}