import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BriefcaseBusiness, Coffee, Mail, Shapes, Sparkles } from 'lucide-react';

const navItems = [
  { to: '/', label: 'Home', icon: Shapes },
  { to: '/experience', label: 'Experience', icon: BriefcaseBusiness },
  { to: '/skills', label: 'Skills', icon: Sparkles },
  { to: '/fun', label: 'Fun', icon: Coffee },
  { to: '/contact', label: 'Contact', icon: Mail },
];

function Navigation() {
  return (
    <nav className="relative z-50 px-5 md:px-8">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-5 border-b border-[var(--border-subtle)] py-5">
        <Link to="/" className="group min-w-0">
          <div className="font-mono text-xs font-semibold tracking-[0.14em] text-[var(--text-main)]">JMSALCIDO</div>
          <div className="mt-1 hidden text-xs text-[var(--text-muted)]/65 sm:block">software · systems · operations</div>
        </Link>

        <ul className="flex items-center gap-1 text-sm text-[var(--text-muted)]">
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
                <span className="hidden md:inline">{label}</span>
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
