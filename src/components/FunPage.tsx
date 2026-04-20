import React from 'react';
import CoffeeGame from './MainContent/Games/CoffeeGame';

function FunPage() {
  return (
    <div className="animate-fade-up pb-10">
      <section>
        <div className="border-t border-[#063C6B]/12 pt-8 mb-8">
          <div className="text-xs uppercase tracking-[0.26em] text-[#063C6B]/42">Play Mode</div>
          <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] md:text-5xl">The Specialty Sprint.</h2>
        </div>
        <CoffeeGame />
      </section>
    </div>
  );
}

export default FunPage;