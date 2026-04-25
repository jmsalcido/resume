import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BriefcaseBusiness, Coffee, Mail, Menu, Shapes, Sparkles, X } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Shapes },
  { to: '/experience', label: 'Experience', icon: BriefcaseBusiness },
  { to: '/skills', label: 'Skills', icon: Sparkles },
  { to: '/fun', label: 'Fun', icon: Coffee },
  { to: '/contact', label: 'Contact', icon: Mail },
];

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 px-5 md:px-8">
      <div className="relative mx-auto flex max-w-6xl items-center justify-between gap-5 border-b border-[var(--border-subtle)] py-5">
        <Link to="/" className="group min-w-0" onClick={() => setIsOpen(false)}>
          <div className="font-mono text-xs font-semibold tracking-[0.14em] text-[var(--text-main)]">JMSALCIDO</div>
          <div className="mt-1 hidden text-xs text-[var(--text-muted)]/65 sm:block">software · systems · operations</div>
        </Link>

        <button
          className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[var(--border-subtle)] text-[var(--text-main)] transition hover:border-[var(--primary-soft)] hover:text-[var(--primary-soft)] active:scale-[0.97] md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          {isOpen ? <X aria-hidden="true" size={18} strokeWidth={1.5} /> : <Menu aria-hidden="true" size={18} strokeWidth={1.5} />}
        </button>

        <ul className="hidden items-center gap-1 text-sm text-[var(--text-muted)] md:flex">
          {navItems.map(({ to, label, icon: Icon }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) =>
                  `inline-flex h-10 items-center gap-2 rounded-[8px] border px-3 transition active:scale-[0.97] ${
                    isActive
                      ? 'border-[var(--border-default)] bg-[var(--bg-ocean)] text-[var(--text-main)]'
                      : 'border-transparent text-[var(--text-muted)]/78 hover:border-[var(--border-subtle)] hover:text-[var(--primary-soft)]'
                  }`
                }
              >
                <Icon aria-hidden="true" size={16} strokeWidth={1.5} />
                <span>{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>

        <div
          className={`absolute left-0 right-0 top-[calc(100%+1px)] z-50 rounded-b-[8px] border border-t-0 border-[var(--border-subtle)] bg-[rgba(6,60,107,0.96)] p-3 shadow-[var(--shadow-card)] transition-all duration-200 ease-out md:hidden ${
            isOpen ? 'translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <ul className="grid gap-2 text-sm text-[var(--text-muted)]">
            {navItems.map(({ to, label, icon: Icon }) => (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-[8px] border px-3 py-3 transition active:scale-[0.98] ${
                      isActive
                        ? 'border-[var(--border-default)] bg-[var(--bg-ocean)] text-[var(--text-main)]'
                        : 'border-transparent hover:border-[var(--border-subtle)] hover:text-[var(--primary-soft)]'
                    }`
                  }
                >
                  <Icon aria-hidden="true" size={17} strokeWidth={1.5} />
                  <span>{label}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
