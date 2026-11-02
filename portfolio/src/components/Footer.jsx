export default function Footer() {
  return (
    <footer className="border-t border-gray-800/80 py-8 px-6 text-center text-sm text-gray-500">
      <p>© {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS.</p>
    </footer>
  );
}