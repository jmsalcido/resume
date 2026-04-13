import React from 'react';
import ReactMarkdown from 'react-markdown';
import developer from '../../src/data/developer';
import resume from '../../src/data/resume';

interface HomeProps {
  contactItems: { label: string; value: string; href: string }[];
}

function Home({ contactItems }: HomeProps) {
  return (
    <div className="space-y-10 animate-fade-up">
      <header className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-6" style={{ animationDelay: '0.05s' }}>
          <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
            {developer.profile.tagline}
          </p>
          <h1 className="font-display text-5xl text-[var(--ink)] sm:text-6xl lg:text-7xl">
            {developer.profile.name}
          </h1>
          <p className="text-lg text-[var(--muted)] sm:text-xl">
            {resume.headline}
          </p>
          <div className="flex flex-wrap gap-2 screen-only">
            {resume.focusAreas.map((item: string) => (
              <span
                key={item}
                className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)]"
              >
                {item}
              </span>
            ))}
          </div>
          <p className="print-only mt-2 text-sm text-[var(--muted)]">
            {resume.focusAreas.join(' • ')}
          </p>
        </div>

        <div className="rounded-3xl border border-[var(--border)] bg-white/80 p-6 shadow-[var(--shadow)] backdrop-blur animate-fade-up" style={{ animationDelay: '0.15s' }}>
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-[var(--muted)]">
              Contact
            </p>
            <span className="text-xs text-[var(--muted)]">Open to collaborations</span>
          </div>
          <div className="space-y-3 text-sm text-[var(--ink)]">
            {contactItems.map((item) => (
              <div key={item.label} className="flex items-center justify-between gap-4">
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {item.label}
                </span>
                <a
                  className="font-medium text-[var(--ink)] transition hover:text-[var(--accent)]"
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {item.value}
                </a>
              </div>
            ))}
          </div>
          <div className="mt-5 rounded-2xl bg-[var(--paper)] px-4 py-3 text-xs uppercase tracking-[0.25em] text-[var(--muted)]">
            {developer.profile.tagline}
          </div>
        </div>
      </header>

      <section className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur animate-fade-up" style={{ animationDelay: '0.2s' }}>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
          Profile
        </p>
        <div className="mt-4 text-lg leading-relaxed text-[var(--ink)]">
          <ReactMarkdown>{resume.summary}</ReactMarkdown>
        </div>
      </section>

      <section className="rounded-3xl border border-[
    var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur animate-fade-up" style={{ animationDelay: '0.4s' }}>
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
          Ventures & Community
        </p>
        <p className="mt-3 text-sm text-[var(--muted)]">{resume.ventures.header}</p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {resume.ventures.items.map((item: { name: string; url: string; description: string }) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-2xl border border-transparent bg-[var(--paper)] p-4 transition hover:-translate-y-1 hover:border-[var(--accent)] hover:shadow-[var(--shadow)]"
            >
              <h3 className="font-display text-xl text-[var(--ink)] group-hover:text-[var(--accent)]">
                {item.name}
              </h3>
              <p className="mt-2 text-sm text-[var(--muted)]">{item.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;











