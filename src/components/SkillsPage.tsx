import React from 'react';
import { Skill } from '../../src/data/resume';

interface SkillsPageProps {
  skillItems: Skill[];
}

function SkillsPage({ skillItems }: SkillsPageProps) {
  return (
    <div className="space-y-10 animate-fade-up">
      <section className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
          Signature Strengths
        </p>
        <ul className="mt-5 space-y-4 text-sm text-[var(--ink)]">
          <li className="rounded-2xl bg-[var(--paper)] p-4 leading-relaxed">
            Placeholder for strength item
          </li>
        </ul>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
          Skills Blend
        </p>
        <div className="mt-5 flex flex-wrap gap-2">
          {skillItems.map((skill) => (
            <div
              key={skill.name}
              className="rounded-full border border-[var][var(--border)] bg-[var(--paper)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)]"
            >
              {skill.name}
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
          Languages & Interests
        </p>
        <div className="mt-5 space-y-4 text-sm text-[var(--ink)]">
           <p>Content will be injected via props or data fetch.</p>
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;




