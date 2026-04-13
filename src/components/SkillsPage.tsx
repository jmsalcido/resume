import React from 'react';
import { Skill } from '../../src/data/resume';

interface SkillsPageProps {
  skillItems: Skill[];
  highlights?: string[];
  languages?: { name: string; level: string }[];
  interests?: string[];
}

function SkillsPage({ skillItems, highlights, languages, interests }: SkillsPageProps) {
  return (
    <div className="space-y-10 animate-fade-up">
      <section className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
          Signature Strengths
        </p>
        <ul className="mt-5 space-y-4 text-sm text-[var(--ink)]">
          {highlights?.map((highlight, index) => (
            <li key={index} className="rounded-2xl bg-[var(--paper)] p-4 leading-relaxed">
              {highlight}
            </li>
          )) || (
            <li className="rounded-2xl bg-[var(--paper)] p-4 leading-relaxed">
              Placeholder for strength item
            </li>
          )}
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
              className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)]"
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
        <div className="mt-5 space-y-6 text-sm text-[var(--ink)]">
          {languages && languages.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-[var(--muted)]">Languages</h4>
              <ul className="space-y-2">
                {languages.map((lang, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-[var(--border)] pb-1">
                    <span>{lang.name}</span>
                    <span className="text-[var(--muted)] text-xs">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {interests && interests.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider mb-3 text-[var(--muted)]">Interests</h4>
              <div className="flex flex-wrap gap-2">
                {interests.map((interest, index) => (
                  <span key={index} className="rounded-full bg-[var(--paper)] px-3 py-1 text-xs border border-[var(--border)]">
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

export default SkillsPage;





