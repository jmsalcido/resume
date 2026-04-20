import React from 'react';
import { Experience as ExperienceType } from '../../src/data/resume';

interface ExperiencePageProps {
  leadership: ExperienceType[];
  softwareEngineering: ExperienceType[];
}

function ExperiencePage({ leadership, softwareEngineering }: ExperiencePageProps) {
  return (
    <div className="animate-fade-up space-y-24 pb-10">
      {/* Business & Leadership */}
      <section>
        <div className="border-t border-[#063C6B]/12 pt-8">
          <div className="text-xs uppercase tracking-[0.26em] text-[#063C6B]/42">Business & Roaster Leadership</div>
          <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] md:text-5xl">Directing with craft and discipline.</h2>
        </div>
        <div className="mt-10 space-y-6">
          {leadership.map((item, index) => (
            <article
              key={index}
              className="rounded-[2rem] border border-[#063C6B]/10 bg-[#063C6B] p-7 text-[#F2F1F0] shadow-[0_18px_56px_rgba(6,60,107,0.12)]"
            >
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div>
                  <div className="text-xs uppercase tracking-[0.22em] text-[#CFD3D2]/70">{item.company} · {item.location}</div>
                  <h3 className="mt-2 font-display text-2xl tracking-[-0.03em] md:text-3xl">{item.position}</h3>
                </div>
                <span className="text-xs uppercase tracking-[0.22em] text-[#CFD3D2]/70">{item.time}</span>
              </div>
              <p className="mt-5 text-sm leading-7 text-[#CFD3D2]">{item.description}</p>
              {item.description_extra && (
                <>
                  <div className="mt-6 h-px w-20 bg-[#6FA3C2]/45" />
                  <p className="mt-5 text-sm leading-7 text-[#CFD3D2]/88">{item.description_extra}</p>
                </>
              )}
              {item.technologies && item.technologies.length > 0 && (
                <div className="mt-6 flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-[#6FA3C2]/30 px-3 py-1 text-xs text-[#CFD3D2]/80">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Software Engineering */}
      <section>
        <div className="border-t border-[#063C6B]/12 pt-8">
          <div className="text-xs uppercase tracking-[0.26em] text-[#063C6B]/42">Software Engineering</div>
          <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] md:text-5xl">A decade of systems thinking.</h2>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            {softwareEngineering.filter((_, i) => i % 2 === 0).map((item, index) => (
              <article
                key={index}
                className={`rounded-[2rem] border border-[#063C6B]/10 bg-white/60 p-7 shadow-[0_12px_40px_rgba(6,60,107,0.05)] backdrop-blur-sm ${index > 0 ? 'md:ml-10' : ''}`}
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-[#063C6B]/42">{item.company} · {item.location}</div>
                    <h3 className="mt-2 font-display text-2xl tracking-[-0.03em]">{item.position}</h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.22em] text-[#063C6B]/42">{item.time}</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#063C6B]/72">{item.description}</p>
                {item.description_extra && (
                  <p className="mt-3 text-sm leading-7 text-[#063C6B]/60">{item.description_extra}</p>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-[#063C6B]/10 px-3 py-1 text-xs text-[#063C6B]/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
          <div className="space-y-6 md:pt-14">
            {softwareEngineering.filter((_, i) => i % 2 === 1).map((item, index) => (
              <article
                key={index}
                className="rounded-[2rem] border border-[#063C6B]/10 bg-white/60 p-7 shadow-[0_12px_40px_rgba(6,60,107,0.05)] backdrop-blur-sm"
              >
                <div className="flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <div className="text-xs uppercase tracking-[0.22em] text-[#063C6B]/42">{item.company} · {item.location}</div>
                    <h3 className="mt-2 font-display text-2xl tracking-[-0.03em]">{item.position}</h3>
                  </div>
                  <span className="text-xs uppercase tracking-[0.22em] text-[#063C6B]/42">{item.time}</span>
                </div>
                <p className="mt-5 text-sm leading-7 text-[#063C6B]/72">{item.description}</p>
                {item.description_extra && (
                  <p className="mt-3 text-sm leading-7 text-[#063C6B]/60">{item.description_extra}</p>
                )}
                {item.technologies && item.technologies.length > 0 && (
                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.technologies.map((tech) => (
                      <span key={tech} className="rounded-full border border-[#063C6B]/10 px-3 py-1 text-xs text-[#063C6B]/70">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default ExperiencePage;
