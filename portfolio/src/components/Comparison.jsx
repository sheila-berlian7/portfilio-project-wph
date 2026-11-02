import { comparisonData } from '../data/portfolioData';

export default function Comparison() {
  return (
    <section className="py-20 px-6 max-w-5xl mx-auto space-y-10">
      <div className="text-center space-y-2">
        <h2 className="text-3xl font-bold">Why Work With Me?</h2>
        <p className="text-gray-400 text-sm">How my workflow compares to standard alternatives.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-[#141419] border border-purple-500/40 p-6 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-purple-400">With Me</h3>
          <ul className="space-y-3 text-sm text-gray-300">
            {comparisonData.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-purple-400 font-bold">✓</span> {item.me}
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-[#141419]/50 border border-gray-800 p-6 rounded-2xl space-y-4">
          <h3 className="text-xl font-bold text-gray-400">Other Developers</h3>
          <ul className="space-y-3 text-sm text-gray-500">
            {comparisonData.map((item, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-red-500 font-bold">✕</span> {item.others}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}