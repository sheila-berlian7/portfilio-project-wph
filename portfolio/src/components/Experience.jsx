import { experienceData } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-6 max-w-4xl mx-auto space-y-10">
      <h2 className="text-3xl font-bold text-center">Work Experience</h2>
      <div className="border-l border-gray-800 ml-4 md:ml-0 space-y-10 pl-6">
        {experienceData.map((exp, index) => (
          <div key={index} className="relative space-y-2">
            <div className="absolute -left-[31px] top-1.5 w-3.5 h-3.5 rounded-full bg-purple-500 ring-4 ring-[#0b0b0e]" />
            <span className="text-xs text-purple-400 font-semibold">{exp.period}</span>
            <h3 className="text-xl font-bold">{exp.role} <span className="text-gray-400 font-normal">@ {exp.company}</span></h3>
            <p className="text-sm text-gray-400">{exp.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}