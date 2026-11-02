export default function Navbar() {
  return (
    <nav className="sticky top-0 z-40 bg-[#0b0b0e]/80 backdrop-blur-md border-b border-gray-800/50 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="font-bold text-xl tracking-wider bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent">
          PORTFOLIO.
        </a>
        <div className="hidden md:flex space-x-8 text-sm text-gray-300">
          <a href="#about" className="hover:text-purple-400 transition">About</a>
          <a href="#projects" className="hover:text-purple-400 transition">Projects</a>
          <a href="#experience" className="hover:text-purple-400 transition">Experience</a>
          <a href="#faq" className="hover:text-purple-400 transition">FAQ</a>
        </div>
        <a href="#contact" className="px-4 py-2 text-sm bg-purple-600 hover:bg-purple-500 rounded-lg font-medium transition">
          Let's Talk
        </a>
      </div>
    </nav>
  );
}