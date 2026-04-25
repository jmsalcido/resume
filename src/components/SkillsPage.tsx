import React from 'react';
import { Skill } from '../data/resume';

interface SkillsPageProps {
  skillItems: Skill[];
  highlights?: string[];
  languages?: { name: string; level: string }[];
  interests?: string[];
}

function SkillsPage({ skillItems, highlights, languages, interests }: SkillsPageProps) {
  return (
    <div className="animate-fade-up space-y-24 pb-10">
      <section>
        <div className="border-t border-[var(--border-subtle)] pt-8">
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Signature strengths</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--text-main)] md:text-6xl">
            Discipline below the surface.
          </h1>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {highlights?.map((highlight) => (
            <article
              key={highlight}
              className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-ocean)]/72 p-6 shadow-[var(--shadow-card)]"
            >
              <p className="text-sm leading-7 text-[var(--text-muted)]/82">{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[0.86fr_1.14fr]">
        <div className="border-t border-[var(--border-subtle)] pt-8">
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Skills blend</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--text-main)] md:text-5xl">
            The stack beneath the work.
          </h2>
          <p className="mt-5 max-w-md text-base leading-8 text-[var(--text-muted)]/78">
            Tools and disciplines used across business, product, and engineering contexts.
          </p>
        </div>
        <div className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-ocean)]/72 p-6 shadow-[var(--shadow-card)]">
          <div className="grid gap-3 sm:grid-cols-2">
            {skillItems.map((skill) => (
              <div key={skill.name} className="rounded-[4px] border border-[var(--border-subtle)] bg-[rgba(6,60,107,0.32)] p-4">
                <div className="flex items-center justify-between gap-3 text-sm text-[var(--text-main)]">
                  <span>{skill.name}</span>
                  <span className="font-mono text-xs text-[var(--accent-sand)]">{skill.value}</span>
                </div>
                <div className="mt-3 h-1 overflow-hidden rounded-[100px] bg-[rgba(207,211,210,0.12)]">
                  <div className="h-full rounded-[100px] bg-[var(--primary-soft)]" style={{ width: `${skill.value}%` }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div className="border-t border-[var(--border-subtle)] pt-8">
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Languages & interests</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--text-main)] md:text-5xl">
            Beyond the screen.
          </h2>
        </div>
        <div className="space-y-8 border-t border-[var(--border-subtle)] pt-8">
          {languages && languages.length > 0 && (
            <div>
              <p className="mb-4 font-mono text-xs text-[var(--accent-sand)]">Languages</p>
              <ul className="space-y-3">
                {languages.map((lang) => (
                  <li key={lang.name} className="flex items-center justify-between gap-4 border-b border-[var(--border-subtle)] pb-3 text-sm text-[var(--text-muted)]">
                    <span>{lang.name}</span>
                    <span className="font-mono text-xs text-[var(--text-muted)]/62">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {interests && interests.length > 0 && (
            <div>
              <p className="mb-4 font-mono text-xs text-[var(--accent-sand)]">Interests</p>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <div key={interest} className="rounded-[4px] border border-[var(--border-subtle)] bg-[var(--bg-ocean)]/50 px-4 py-3 text-sm text-[var(--text-muted)]">
                    {interest}
                  </div>
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
