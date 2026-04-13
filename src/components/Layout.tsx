import React from 'react';
import Footer from './Footer/Footer';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f5efe6_0%,_#ede2d5_40%,_#e2d6c7_100%)] text-[var(--ink)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(199,118,58,0.25),_transparent_70%)] blur-2xl animate-float" />
        <div className="pointer-events-none absolute bottom-0 left-[-120px] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(47,111,109,0.25),_transparent_70%)] blur-2xl animate-float" />
        
        <Navigation />

        <main className="relative mx-auto max-w-6xl px-6 py-12 lg:py-16">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
