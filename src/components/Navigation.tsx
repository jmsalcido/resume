import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-white/70 backdrop-blur px-6 py-4">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <Link to="/" className="font-display text-lg font-bold text-[var(--ink)]">
          JS
        </Link>
        <ul className="flex gap-8 text-xs uppercase tracking-[0.2em] text-[var(--muted)] sm:text-sm">
          <li>
            <Link to="/" className="transition hover:text-[var(--accent)]">Home</Link>
          </li>
          <li>
            <Link to="/experience" className="transition hover:text-[var(--accent)]">Experience</Link>
          </li>
          <li>
            <Link to="/skills" className="transition hover:text-[var(--accent)]">Skills</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
