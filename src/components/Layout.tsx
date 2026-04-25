import React from 'react';
import Footer from './Footer/Footer';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--bg-deep)] text-[var(--text-main)] selection:bg-[var(--accent-orange)] selection:text-white">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[560px] opacity-45">
        <svg
          className="h-full w-full"
          viewBox="0 0 1440 560"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <path className="wave-1" d="M0 210C132 176 190 128 318 128C468 128 520 246 666 246C800 246 858 156 1000 156C1138 156 1192 256 1320 256C1378 256 1415 242 1440 230" stroke="#6FA3C2" strokeWidth="1.2" />
          <path className="wave-2" d="M0 302C118 288 176 228 318 228C470 228 514 352 668 352C814 352 862 268 1008 268C1160 268 1200 376 1330 376C1378 376 1416 358 1440 344" stroke="#CFD3D2" strokeOpacity="0.55" strokeWidth="1" />
          <path className="wave-3" d="M0 404C142 366 216 334 350 334C496 334 548 444 682 444C824 444 890 366 1028 366C1162 366 1218 452 1340 452C1384 452 1418 438 1440 426" stroke="#F2B48C" strokeOpacity="0.34" strokeWidth="1" />
        </svg>
      </div>

      <Navigation />

      <main className="relative z-10 mx-auto max-w-6xl px-5 py-8 md:px-8 md:py-12">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default Layout;
