export default function SuccessModal({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#141419] border border-gray-800 p-8 rounded-2xl max-w-md w-full text-center space-y-4">
        <div className="w-16 h-16 bg-purple-500/20 text-purple-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
          ✓
        </div>
        <h3 className="text-2xl font-bold">Message Sent!</h3>
        <p className="text-gray-400 text-sm">
          Thank you for reaching out. I’ll get back to you within 24 hours.
        </p>
        <button 
          onClick={onClose}
          className="w-full py-3 bg-purple-600 rounded-xl font-medium hover:bg-purple-500 transition"
        >
          Got it
        </button>
      </div>
    </div>
  );
}