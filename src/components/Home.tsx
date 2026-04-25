import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { ArrowUpRight, Mail, Route } from 'lucide-react';
import developer from '../data/developer';
import resume from '../data/resume';

function SystemsPrint() {
  return (
    <div className="brand-surface relative overflow-hidden p-4 md:p-6">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_68%_18%,rgba(242,180,140,0.14),transparent_16rem)]" />
      <svg
        className="relative aspect-[4/5] w-full"
        viewBox="0 0 520 650"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Abstract wave and systems illustration"
      >
        <rect x="1" y="1" width="518" height="648" rx="8" fill="#063C6B" stroke="rgba(207,211,210,0.18)" />
        <path d="M42 425C104 388 152 368 204 368C270 368 306 418 364 418C420 418 454 382 486 360" stroke="#6FA3C2" strokeWidth="2" />
        <path d="M34 472C100 438 146 422 204 422C278 422 312 482 384 482C438 482 470 452 502 430" stroke="#F2B48C" strokeOpacity="0.7" strokeWidth="1.5" />
        <path d="M36 520C114 494 166 482 226 482C292 482 328 532 392 532C444 532 478 510 506 494" stroke="#CFD3D2" strokeOpacity="0.52" strokeWidth="1.2" />
        <path d="M170 162C226 116 304 112 366 156C418 194 436 256 412 318" stroke="#CFD3D2" strokeOpacity="0.7" strokeWidth="1.5" />
        <path d="M128 334C148 278 194 242 254 238C330 232 394 270 430 342" stroke="#6FA3C2" strokeWidth="1.7" />
        <path d="M156 230L226 178L312 214L380 154" stroke="#F07A20" strokeWidth="1.7" />
        <circle cx="156" cy="230" r="6" fill="#F2B48C" />
        <circle cx="226" cy="178" r="6" fill="#F2B48C" />
        <circle cx="312" cy="214" r="6" fill="#F2B48C" />
        <circle cx="380" cy="154" r="6" fill="#F2B48C" />
        <path d="M82 86H218M82 114H176M82 142H236" stroke="#CFD3D2" strokeOpacity="0.55" strokeLinecap="round" />
        <path d="M76 80V148" stroke="#F07A20" strokeWidth="2" strokeLinecap="round" />
      </svg>
      <div className="relative mt-4 flex items-center justify-between gap-4 border-t border-[var(--border-subtle)] pt-4">
        <p className="font-mono text-xs text-[var(--text-muted)]/72">systems in motion</p>
        <p className="text-xs text-[var(--accent-sand)]">{new Date().getFullYear()}</p>
      </div>
    </div>
  );
}

function Home() {
  return (
    <div className="animate-fade-up">
      <section className="grid min-h-[78vh] items-center gap-12 py-10 md:grid-cols-[1.08fr_0.92fr] md:py-16">
        <div className="max-w-3xl">
          <span className="rule-accent mb-6" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">software · systems · operations · coffee</p>
          <h1 className="mt-6 font-display text-5xl leading-[1.02] text-[var(--text-main)] md:text-7xl">
            Build with intent.
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-[var(--text-muted)]">
            I lead coffee, software, and operations work with the same discipline: clear systems, durable products, and calm execution.
          </p>
          <p className="mt-4 max-w-xl text-sm leading-7 text-[var(--text-muted)]/72">
            {developer.profile.tagline}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link
              to="/experience"
              className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--primary)] bg-[var(--primary)] px-5 py-3 text-sm font-medium text-white transition hover:brightness-110 active:scale-[0.97]"
            >
              View experience
              <Route aria-hidden="true" size={16} strokeWidth={1.5} />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-[8px] border border-[var(--border-default)] px-5 py-3 text-sm font-medium text-[var(--text-main)] transition hover:border-[var(--primary-soft)] hover:text-[var(--primary-soft)] active:scale-[0.97]"
            >
              Get in touch
              <Mail aria-hidden="true" size={16} strokeWidth={1.5} />
            </Link>
          </div>
        </div>

        <SystemsPrint />
      </section>

      <section className="grid gap-10 border-t border-[var(--border-subtle)] pt-8 md:grid-cols-[0.9fr_1.1fr]">
        <div>
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Profile</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--text-main)] md:text-5xl">
            Craft, business, and systems in one operating rhythm.
          </h2>
        </div>
        <div>
          <div className="max-w-2xl text-base leading-8 text-[var(--text-muted)]">
            <ReactMarkdown>{resume.summary}</ReactMarkdown>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {resume.focusAreas.map((item: string) => (
              <div key={item} className="rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-ocean)]/70 px-4 py-4 text-sm text-[var(--text-muted)]">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24">
        <div className="border-b border-[var(--border-subtle)] pb-6">
          <span className="rule-accent mb-5" />
          <p className="font-mono text-xs text-[var(--text-muted)]/64">Ventures & community</p>
          <h2 className="mt-4 font-display text-3xl leading-tight text-[var(--text-main)] md:text-5xl">
            Work arranged by discipline and care.
          </h2>
        </div>

        <div className="mt-8 grid gap-4 md:grid-cols-2">
          {resume.ventures.items.map((item) => (
            <a
              key={item.name}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="group rounded-[8px] border border-[var(--border-subtle)] bg-[var(--bg-ocean)]/72 p-6 shadow-[var(--shadow-card)] transition hover:border-[var(--primary-soft)] hover:bg-[var(--bg-ocean)] active:scale-[0.99]"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-[var(--accent-sand)]">{item.description.split(' ').slice(0, 3).join(' ')}</p>
                  <h3 className="mt-3 font-display text-2xl leading-snug text-[var(--text-main)]">{item.name}</h3>
                </div>
                <ArrowUpRight aria-hidden="true" size={18} strokeWidth={1.5} className="mt-1 text-[var(--text-muted)] transition group-hover:text-[var(--primary-soft)]" />
              </div>
              <p className="mt-4 text-sm leading-7 text-[var(--text-muted)]/78">{item.description}</p>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
