import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="font-mono text-xs text-muted">
          &copy; 2026 <span className="text-[#EDEDED]">HeyNodryx</span>
          &nbsp;&nbsp;<span className="text-border">—</span>&nbsp;&nbsp;Built with Python
        </div>
        <div className="flex items-center gap-4 font-mono text-xs text-muted">
          <Link to="/" className="hover:text-accent transition-colors">home</Link>
          <Link to="/docs" className="hover:text-accent transition-colors">docs</Link>
          <a href="#" className="hover:text-accent transition-colors">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
