import React from 'react';
import { Experience as ExperienceType } from '../../src/data/resume';

interface ExperiencePageProps {
  leadership: ExperienceType[];
  softwareEngineering: ExperienceType[];
}

function ExperiencePage({ leadership, softwareEngineering }: ExperiencePageProps) {
  return (
    <div className="space-y-10 animate-fade-up">
      <section className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
          Business & Roaster Leadership
        </p>
        <div className="mt-6 space-y-6">
          {leadership.map((item, index) => (
            <div key={index} className="rounded-2xl bg-[var(--paper)] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font-display text-2xl text-[var(--ink)]">{item.position}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.company} • {item.location}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">{item.time}</span>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink)]">
                <pre className="whitespace-pre-wrap font-sans">{item.description}</pre>
                {item.description_extra && <pre className="whitespace-pre-wrap font-sans">{item.description_extra}</pre>}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
          Software Engineering
        </p>
        <div className="mt-6 space-y-6">
          {softwareEngineering.map((item, index) => (
            <div key={index} className="rounded-2xl bg-[var(--paper)] p-5">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div>
                  <h3 className="font	font-display text-2xl text-[var(--ink)]">{item.position}</h3>
                  <p className="text-sm text-[var(--muted)]">{item.company} • {item.location}</p>
                </div>
                <span className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">{item.time}</span>
              </div>
              <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink)]">
                <pre className="whitespace-pre-wrap font-sans">{item.description}</pre>
                {item.description_extra && <pre className="whitespace-pre-wrap font-sans">{item.description_extra}</pre>}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExperiencePage;



