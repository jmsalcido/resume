import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="relative z-50 px-6 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-[#063C6B]/10 pb-5 pt-8">
        <Link to="/" className="group">
          <div className="font-medium text-sm tracking-[0.24em] uppercase text-[#063C6B]/85">JMSALCIDO</div>
          <div className="mt-1 text-xs tracking-[0.16em] uppercase text-[#063C6B]/45">software · systems · operations</div>
        </Link>
        <ul className="hidden md:flex gap-8 text-sm text-[#063C6B]/68">
          <li>
            <Link to="/" className="transition hover:text-[#F07A20]">Home</Link>
          </li>
          <li>
            <Link to="/experience" className="transition hover:text-[#F07A20]">Experience</Link>
          </li>
          <li>
            <Link to="/skills" className="transition hover:text-[#F07A20]">Skills</Link>
          </li>
          <li>
            <Link to="/contact" className="transition hover:text-[#F07A20]">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
