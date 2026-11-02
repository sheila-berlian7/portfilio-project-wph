import { skillsData } from '../data/portfolioData';

export default function Skills() {
  return (
    <section className="py-16 px-6 max-w-5xl mx-auto text-center space-y-8">
      <h2 className="text-2xl font-bold">Tech Stack & Tools</h2>
      <div className="flex flex-wrap justify-center gap-3">
        {skillsData.map((skill, index) => (
          <span key={index} className="px-4 py-2 bg-[#141419] border border-gray-800 rounded-xl text-sm font-medium text-gray-300">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}