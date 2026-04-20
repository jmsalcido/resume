import React from 'react';
import Footer from './Footer/Footer';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F2F1F0] text-[#063C6B] selection:bg-[#F07A20] selection:text-white">
      <div className="relative overflow-hidden">
        {/* Paper texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply [background-image:radial-gradient(rgba(6,60,107,0.65)_0.7px,transparent_0.7px)] [background-size:12px_12px]" />

        {/* Wave lines */}
        <svg
          className="pointer-events-none absolute left-0 top-0 h-[520px] w-full opacity-[0.14]"
          viewBox="0 0 1440 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 196C119 168 166 121 279 121C409 121 468 240 607 240C732 240 806 149 932 149C1060 149 1111 247 1228 247C1325 247 1373 204 1440 176" stroke="#063C6B" strokeWidth="1.5" />
          <path d="M0 266C97 266 161 212 273 212C415 212 460 332 607 332C739 332 794 251 929 251C1078 251 1131 356 1243 356C1324 356 1380 317 1440 285" stroke="#6FA3C2" strokeWidth="1.2" />
          <path d="M0 352C137 319 188 286 301 286C426 286 493 395 615 395C751 395 812 317 942 317C1068 317 1113 407 1229 407C1324 407 1377 372 1440 339" stroke="#063C6B" strokeWidth="1" />
        </svg>

        {/* Crest orbs */}
        <div className="pointer-events-none absolute right-[-8rem] top-24 h-[32rem] w-[32rem] rounded-[42%] border border-[#063C6B]/12 bg-[#6FA3C2]/14 blur-[1px]" />
        <div className="pointer-events-none absolute right-[2rem] top-16 h-[22rem] w-[22rem] rounded-[45%] border border-[#063C6B]/10 bg-white/30" />

        <Navigation />

        <main className="relative mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-10">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
