import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Skills from './components/Skills';
import Comparison from './components/Comparison';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0b0b0e] text-white">
      <Navbar />
      <Hero />
      <Stats />
      <Skills />
      <Comparison />
      <Experience />
      <Projects />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  );
}
