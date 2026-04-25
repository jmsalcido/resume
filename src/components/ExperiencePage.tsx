import React from 'react';
import ReactMarkdown from 'react-markdown';
import { Experience as ExperienceType } from '../data/resume';

interface ExperiencePageProps {
  leadership: ExperienceType[];
  softwareEngineering: ExperienceType[];
}

function ExperienceCard({ item, featured = false }: { item: ExperienceType; featured?: boolean }) {
  return (
    <article className={`rounded-[8px] border p-6 shadow-[var(--shadow-card)] ${
      featured
        ? 'border-[var(--border-default)] bg-[var(--bg-elevated)]/78'
        : 'border-[var(--border-subtle)] bg-[var(--bg-ocean)]/72'
    }`}>
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="font-mono text-xs text-[var(--accent-sand)]">{item.company} · {item.location}</p>
          <h3 className="mt-2 font-display text-2xl leading-snug text-[var(--text-main)]">{item.position}</h3>
        </div>
        <span className="rounded-[4px] border border-[var(--border-subtle)] px-2 py-1 font-mono text-xs text-[var(--text-muted)]/72">{item.time}</span>
      </div>
      <div className="mt-5 text-sm leading-7 text-[var(--text-muted)]">
        <ReactMarkdown>{item.description}</ReactMarkdown>
      </div>
      {item.description_extra && (
        <>
          <div className="mt-6 h-px w-16 bg-[var(--accent-orange)]/70" />
          <div className="mt-5 text-sm leading-7 text-[var(--text-muted)]/80">
            <ReactMarkdown>{item.description_extra}</ReactMarkdown>
          </div>
        </>
      )}
      {item.technologies && item.technologies.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2">
          {item.technologies.map((tech) => (
            <span key={tech} className="rounded-[100px] border border-[var(--border-subtle)] px-3 py-1 text-xs text-[var(--text-muted)]/82">
              {tech}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function ExperiencePage({ leadership, softwareEngineering }: ExperiencePageProps) {
  return (
    <div className="animate-fade-up space-y-24 pb-10">
      <section>
        <div className="border-t border-[var(--border-subtle)] pt-8">
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Business & roaster leadership</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--text-main)] md:text-6xl">
            Directing with craft and discipline.
          </h1>
        </div>
        <div className="mt-10 space-y-4">
          {leadership.map((item) => (
            <ExperienceCard key={`${item.company}-${item.position}`} item={item} featured />
          ))}
        </div>
      </section>

      <section>
        <div className="border-t border-[var(--border-subtle)] pt-8">
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Software engineering</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--text-main)] md:text-5xl">
            A decade of systems thinking.
          </h2>
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {softwareEngineering.map((item) => (
            <ExperienceCard key={`${item.company}-${item.position}-${item.time}`} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default ExperiencePage;
