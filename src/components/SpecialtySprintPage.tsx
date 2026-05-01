import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import CoffeeGame from './MainContent/Games/CoffeeGame';

function SpecialtySprintPage() {
  return (
    <div className="animate-fade-up pb-10">
      <section>
        <div className="mb-8 border-t border-[var(--border-subtle)] pt-8">
          <Link
            to="/fun"
            className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--text-muted)]/78 transition hover:text-[var(--primary-soft)] active:scale-[0.97]"
          >
            <ArrowLeft aria-hidden="true" size={16} strokeWidth={1.5} />
            Back to fun
          </Link>
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

export default SpecialtySprintPage;
