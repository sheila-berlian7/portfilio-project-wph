export default function ErrorModal({ onRetry }) {
  return (
    <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
      <div className="bg-[#141419] border border-gray-800 p-8 rounded-2xl max-w-md w-full text-center space-y-4">
        <div className="w-16 h-16 bg-red-500/20 text-red-400 rounded-full flex items-center justify-center mx-auto text-2xl font-bold">
          ✕
        </div>
        <h3 className="text-2xl font-bold">Oops, Something Went Wrong</h3>
        <p className="text-gray-400 text-sm">
          Your message couldn't be sent. Please check your connection and try again.
        </p>
        <button 
          onClick={onRetry}
          className="w-full py-3 bg-red-600 rounded-xl font-medium hover:bg-red-500 transition"
        >
          Try Again
        </button>
      </div>
    </div>
  );
}