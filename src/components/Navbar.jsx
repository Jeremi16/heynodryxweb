import { Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { to: '/', label: 'home' },
    { to: '/docs', label: 'docs' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <Link to="/" className="font-mono text-sm font-semibold tracking-tight">
            Hey<span className="text-accent">Nodryx</span>
          </Link>
          {pathname.startsWith('/docs') && (
            <span className="text-muted text-xs font-mono hidden sm:inline">/ docs</span>
          )}
        </div>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-6 text-sm font-mono">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={
                pathname === link.to
                  ? 'text-[#EDEDED]'
                  : 'text-muted hover:text-[#EDEDED] transition-colors'
              }
            >
              {link.label}
            </Link>
          ))}
          <a href="#" className="text-accent hover:text-accent-glow transition-colors text-xs">
            GitHub →
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="sm:hidden font-mono text-sm text-muted hover:text-[#EDEDED] transition-colors"
        >
          menu
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="sm:hidden border-t border-border bg-bg/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-3 font-mono text-sm text-muted">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#EDEDED] transition-colors"
              >
                - {link.label}
              </Link>
            ))}
            <a href="#" className="text-accent hover:text-accent-glow transition-colors">
              - GitHub →
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
