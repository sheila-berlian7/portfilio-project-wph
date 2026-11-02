import { useState } from 'react';
import SuccessModal from '../modals/SuccessModal';
import ErrorModal from '../modals/ErrorModal';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [modalState, setModalState] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate API request trigger
    const isSuccess = true; 
    setModalState(isSuccess ? 'success' : 'error');
  };

  return (
    <section id="contact" className="py-20 px-6 max-w-3xl mx-auto">
      <div className="text-center space-y-2 mb-10">
        <h2 className="text-3xl font-bold">Start a Conversation</h2>
        <p className="text-gray-400 text-sm">Have a project in mind? Let's build something awesome together.</p>
      </div>

      <form onSubmit={handleSubmit} className="bg-[#141419] border border-gray-800 p-8 rounded-2xl space-y-5">
        <div>
          <label className="block text-sm text-gray-400 mb-2">What should I call you?</label>
          <input 
            type="text" 
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-[#1e1e24] border border-gray-700/80 rounded-xl p-3.5 text-white focus:outline-none focus:border-purple-500 transition"
            placeholder="John Doe"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Email Address</label>
          <input 
            type="email" 
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full bg-[#1e1e24] border border-gray-700/80 rounded-xl p-3.5 text-white focus:outline-none focus:border-purple-500 transition"
            placeholder="john@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm text-gray-400 mb-2">Message</label>
          <textarea 
            rows="4"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="w-full bg-[#1e1e24] border border-gray-700/80 rounded-xl p-3.5 text-white focus:outline-none focus:border-purple-500 transition"
            placeholder="Tell me about your project..."
            required
          />
        </div>
        <button 
          type="submit" 
          className="w-full py-4 bg-purple-600 hover:bg-purple-500 rounded-xl font-medium transition shadow-lg shadow-purple-600/20"
        >
          Let's Build Something
        </button>
      </form>

      {modalState === 'success' && <SuccessModal onClose={() => setModalState(null)} />}
      {modalState === 'error' && <ErrorModal onRetry={() => setModalState(null)} />}
    </section>
  );
}