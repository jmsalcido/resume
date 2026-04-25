import React from 'react';
import { Code2, Mail, Network } from 'lucide-react';

interface ContactPageProps {
  email: string;
  linkedin: string;
  github: string;
}

function ContactPage({ email, linkedin, github }: ContactPageProps) {
  return (
    <div className="animate-fade-up pb-10 pt-8">
      <div className="grid gap-10 border-t border-[var(--border-subtle)] pt-8 md:grid-cols-[1.05fr_0.95fr] md:items-start">
        <div>
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Contact</p>
          <h1 className="mt-4 font-display text-4xl leading-tight text-[var(--text-main)] md:text-6xl">
            Build something with structure and breath.
          </h1>
          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--text-muted)]/82">
            Software, systems, workflow design, and products that need engineering judgment without losing aesthetic discipline.
          </p>
        </div>
        <div className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-ocean)]/72 p-5 shadow-[var(--shadow-card)]">
          <div className="space-y-3">
            <a
              href={`mailto:${email}`}
              className="flex items-center gap-3 rounded-[8px] border border-[var(--border-default)] px-4 py-3 text-sm text-[var(--text-main)] transition hover:border-[var(--primary-soft)] hover:text-[var(--primary-soft)] active:scale-[0.98]"
            >
              <Mail aria-hidden="true" size={17} strokeWidth={1.5} />
              <span className="break-all">{email}</span>
            </a>
            <a
              href={`https://linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-[8px] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-muted)] transition hover:border-[var(--primary-soft)] hover:text-[var(--primary-soft)] active:scale-[0.98]"
            >
              <Network aria-hidden="true" size={17} strokeWidth={1.5} />
              <span className="break-all">linkedin.com/in/{linkedin}</span>
            </a>
            <a
              href={`https://github.com/${github}`}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 rounded-[8px] border border-[var(--border-subtle)] px-4 py-3 text-sm text-[var(--text-muted)] transition hover:border-[var(--primary-soft)] hover:text-[var(--primary-soft)] active:scale-[0.98]"
            >
              <Code2 aria-hidden="true" size={17} strokeWidth={1.5} />
              <span className="break-all">github.com/{github}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
