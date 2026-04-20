import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="relative z-50 px-6 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-[#063C6B]/10 pb-5 pt-8">
        <Link to="/" className="group" onClick={() => setIsOpen(false)}>
          <div className="font-medium text-sm tracking-[0.24em] uppercase text-[#063C6B]/85">JMSALCIDO</div>
          <div className="mt-1 text-xs tracking-[0.16em] uppercase text-[#063C6B]/45">software · systems · operations</div>
        </Link>

        {/* Mobile Menu Button */}
        <button 
          className="block text-[#063C6B] md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-16 6h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
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
            <Link to="/fun" className="transition hover:text-[#F07A20]">Fun</Link>
          </li>
          <li>
            <Link to="/contact" className="transition hover:text-[#F07A20]">Contact</Link>
          </li>
        </ul>

        {/* Mobile Menu Overlay */}
        <div className={`absolute left-0 right-0 top-[100%] z-50 bg-[#F2F1F0] border-b border-[#063C6B]/10 p-6 transition-all duration-300 ease-in-out md:hidden ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0 pointer-events-none'}`}>
          <ul className="flex flex-col gap-4 text-base text-[#063C6B]/80">
            <li>
              <Link to="/" className="block transition hover:text-[#F07A20]" onClick={() => setIsOpen(false)}>Home</Link>
            </li>
            <li>
              <Link to="/experience" className="block transition hover:text-[#F07A20]" onClick={() => setIsOpen(false)}>Experience</Link>
            </li>
            <li>
              <Link to="/skills" className="block transition hover:text-[#F07A20]" onClick={() => setIsOpen(false)}>Skills</Link>
            </li>
            <li>
              <Link to="/fun" className="block transition hover:text-[#F07A20]" onClick={() => setIsOpen(false)}>Fun</Link>
            </li>
            <li>
              <Link to="/contact" className="block transition hover:text-[#F07A20]" onClick={() => setIsOpen(false)}>Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navigation;
