import React from 'react';
import CoffeeGame from './MainContent/Games/CoffeeGame';

function FunPage() {
  return (
    <div className="animate-fade-up pb-10">
      <section>
        <div className="mb-8 border-t border-[var(--border-subtle)] pt-8">
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Play mode</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--text-main)] md:text-6xl">
            The Specialty Sprint.
          </h1>
        </div>
        <CoffeeGame />
      </section>
    </div>
  );
}

export default FunPage;
