import { projectsData } from '../data/portfolioData';

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-6 max-w-6xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Featured Projects</h2>
        <p className="text-gray-400 text-sm">A selection of things I've built recently.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projectsData.map((project, index) => (
          <div key={index} className="bg-[#141419] border border-gray-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition group">
            <div className="h-48 bg-[#1e1e24] flex items-center justify-center text-gray-600 font-medium">
              Project Preview
            </div>
            <div className="p-6 space-y-3">
              <span className="text-xs text-purple-400 font-semibold">{project.category}</span>
              <h3 className="text-xl font-bold group-hover:text-purple-300 transition">{project.title}</h3>
              <a href={project.link} className="inline-block text-sm text-purple-400 font-medium hover:underline">
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}