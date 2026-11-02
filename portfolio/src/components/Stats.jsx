import { statsData } from '../data/portfolioData';

export default function Stats() {
  return (
    <section className="py-12 px-6 max-w-5xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 bg-[#141419] border border-gray-800/80 p-8 rounded-2xl">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center space-y-1">
            <h3 className="text-3xl md:text-4xl font-extrabold text-purple-400">{stat.value}</h3>
            <p className="text-sm text-gray-400">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}