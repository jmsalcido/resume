import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Coffee, Music2 } from 'lucide-react';

const funProjects = [
  {
    title: 'The Specialty Sprint',
    eyebrow: 'Game · live',
    description: 'Catch beans and commits with a steady hand.',
    cta: 'Play',
    href: '/fun/specialty-sprint',
    icon: Coffee,
  },
  {
    title: 'Spotify to Apple Music',
    eyebrow: 'Tool · live',
    description: 'Paste a Spotify track and find its Apple Music match.',
    cta: 'Convert',
    href: '/fun/spotify-to-apple',
    icon: Music2,
  },
];

function FunPage() {
  return (
    <div className="animate-fade-up space-y-10 pb-10">
      <section>
        <div className="border-t border-[var(--border-subtle)] pt-8">
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Fun projects</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--text-main)] md:text-6xl">
            Small experiments with intent.
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-[var(--text-muted)]/78 md:text-base">
            Games, tools, and other side quests that deserve their own room.
          </p>
        </div>
      </section>

      <section aria-label="Fun project cards">
        <div className="grid gap-4 md:grid-cols-2">
          {funProjects.map((project) => (
            <ProjectCard key={project.href} project={project} />
          ))}
        </div>
      </section>
    </div>
  );
}

type FunProject = (typeof funProjects)[number];

function ProjectCard({ project }: { project: FunProject }) {
  const Icon = project.icon;

  return (
    <Link
      to={project.href}
      className="brand-surface group flex min-h-56 flex-col justify-between p-6 transition hover:border-[var(--border-default)] hover:shadow-[0_8px_32px_rgba(6,60,107,0.62)] active:scale-[0.97]"
    >
      <div>
        <div className="flex items-center justify-between gap-4">
          <p className="font-mono text-xs text-[var(--accent-sand)]">{project.eyebrow}</p>
          <span className="inline-flex h-10 w-10 items-center justify-center rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-deep)]/42 text-[var(--primary-soft)] transition group-hover:text-[var(--text-main)]">
            <Icon aria-hidden="true" size={18} strokeWidth={1.5} />
          </span>
        </div>
        <h2 className="mt-5 font-display text-3xl leading-tight text-[var(--text-main)]">
          {project.title}
        </h2>
        <p className="mt-4 max-w-md text-sm leading-7 text-[var(--text-muted)]/78">
          {project.description}
        </p>
      </div>

      <span className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--primary-soft)] transition group-hover:text-[var(--text-main)]">
        {project.cta}
        <ArrowUpRight aria-hidden="true" size={16} strokeWidth={1.5} />
      </span>
    </Link>
  );
}

export default FunPage;
