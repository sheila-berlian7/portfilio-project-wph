export default function Hero() {
  return (
    <section id="about" className="py-24 px-6 max-w-5xl mx-auto text-center space-y-6">
      <div className="inline-block px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold uppercase tracking-wider">
        Available for Freelance & Full-time Roles
      </div>
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
        Building Digital Experiences <br />
        <span className="bg-gradient-to-r from-purple-400 via-indigo-400 to-pink-400 bg-clip-text text-transparent">
          That Matter & Convert
        </span>
      </h1>
      <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
        I'm a frontend developer passionate about creating performant, scalable, and visually stunning web applications with modern architectures.
      </p>
      <div className="flex justify-center gap-4 pt-4">
        <a href="#projects" className="px-6 py-3 bg-purple-600 hover:bg-purple-500 rounded-xl font-medium transition shadow-lg shadow-purple-600/20">
          View Projects
        </a>
        <a href="#contact" className="px-6 py-3 bg-[#141419] border border-gray-800 hover:border-gray-700 rounded-xl font-medium transition">
          Contact Me
        </a>
      </div>
    </section>
  );
}