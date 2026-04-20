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
      {/* Highlights */}
      <section>
        <div className="border-t border-[#063C6B]/12 pt-8">
          <div className="text-xs uppercase tracking-[0.26em] text-[#063C6B]/42">Signature Strengths</div>
          <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] md:text-5xl">Discipline below the surface.</h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          {highlights?.map((highlight, index) => (
            <article
              key={highlight}
              className={`rounded-[2rem] border border-[#063C6B]/10 bg-white/60 p-7 shadow-[0_12px_40px_rgba(6,60,107,0.05)] backdrop-blur-sm ${index === 1 ? 'md:mt-10' : ''}`}
            >
              <p className="text-sm leading-7 text-[#063C6B]/72">{highlight}</p>
            </article>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="grid gap-10 md:grid-cols-[0.86fr_1.14fr]">
        <div className="border-t border-[#063C6B]/10 pt-8">
          <div className="text-xs uppercase tracking-[0.26em] text-[#063C6B]/42">Skills Blend</div>
          <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] md:text-5xl">The stack beneath the work.</h2>
          <p className="mt-5 max-w-md text-base leading-8 text-[#063C6B]/72">
            Tools and disciplines used across business, product, and engineering contexts.
          </p>
        </div>
        <div className="rounded-[2rem] border border-[#063C6B]/10 bg-white/60 p-7 shadow-[0_12px_40px_rgba(6,60,107,0.05)] backdrop-blur-sm">
          <div className="grid grid-cols-2 gap-3">
            {skillItems.map((skill) => (
              <div
                key={skill.name}
                className="rounded-2xl border border-[#063C6B]/10 px-4 py-4 text-center text-sm text-[#063C6B]/80"
              >
                {skill.name}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Languages & Interests */}
      <section className="grid gap-10 md:grid-cols-[0.95fr_1.05fr]">
        <div className="border-t border-[#063C6B]/10 pt-8">
          <div className="text-xs uppercase tracking-[0.26em] text-[#063C6B]/42">Languages & Interests</div>
          <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] md:text-4xl">Beyond the screen.</h2>
        </div>
        <div className="border-t border-[#063C6B]/10 pt-8 space-y-8">
          {languages && languages.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-[#063C6B]/42 mb-4">Languages</div>
              <ul className="space-y-3">
                {languages.map((lang, index) => (
                  <li key={index} className="flex justify-between items-center border-b border-[#063C6B]/10 pb-3 text-sm text-[#063C6B]/80">
                    <span>{lang.name}</span>
                    <span className="text-xs uppercase tracking-[0.18em] text-[#063C6B]/42">{lang.level}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
          {interests && interests.length > 0 && (
            <div>
              <div className="text-xs uppercase tracking-[0.22em] text-[#063C6B]/42 mb-4">Interests</div>
              <div className="grid grid-cols-2 gap-3">
                {interests.map((interest) => (
                  <div key={interest} className="rounded-2xl border border-[#063C6B]/10 px-4 py-3 text-sm text-[#063C6B]/80">
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
