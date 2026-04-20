import React from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import developer from '../../src/data/developer';
import resume from '../../src/data/resume';

function Home() {
  return (
    <div className="animate-fade-up">
      {/* Hero */}
      <section className="relative grid min-h-[78vh] items-center gap-16 py-14 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="relative z-10 max-w-3xl">
          <div className="mb-6 text-xs uppercase tracking-[0.28em] text-[#063C6B]/45">
            software · systems · operations · automation
          </div>
          <h1 className="font-display text-5xl leading-[0.94] tracking-[-0.045em] md:text-7xl lg:text-[5.6rem]">
            {resume.headline.split(',')[0]}
          </h1>
          <p className="mt-8 max-w-2xl text-base leading-8 text-[#063C6B]/72 md:text-lg">
            {resume.summary}
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              to="/experience"
              className="inline-flex items-center rounded-full border border-[#063C6B]/18 bg-white/60 px-6 py-3 text-sm text-[#063C6B] backdrop-blur-sm transition hover:border-[#F07A20]/50 hover:text-[#F07A20]"
            >
              View experience
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-[#063C6B] bg-[#063C6B] px-6 py-3 text-sm text-[#F2F1F0] transition hover:bg-[#0C4A80]"
            >
              Get in touch
            </Link>
          </div>
        </div>

        {/* Decorative SVG art card */}
        <div className="relative mx-auto w-full max-w-[30rem]">
          <div className="absolute -left-10 top-10 h-[24rem] w-[24rem] rounded-[48%] border border-[#063C6B]/10 bg-[#6FA3C2]/10" />
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[#063C6B]/10 bg-white/60 shadow-[0_24px_80px_rgba(6,60,107,0.08)] backdrop-blur-sm">
            <div className="aspect-[4/5] w-full bg-[linear-gradient(180deg,rgba(255,255,255,0.75),rgba(255,255,255,0.45))]">
              <svg className="h-full w-full" viewBox="0 0 520 650" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M-40 405C58 375 104 328 175 328C238 328 271 365 320 365C377 365 409 322 468 322C527 322 578 373 635 392" stroke="#063C6B" strokeWidth="2" />
                <path d="M-30 442C76 413 123 382 195 382C264 382 302 427 356 427C416 427 448 385 504 385C560 385 602 420 655 445" stroke="#6FA3C2" strokeWidth="2" />
                <path d="M250 132C284 122 315 133 340 164C364 194 364 226 344 259C325 289 296 307 258 312" stroke="#063C6B" strokeWidth="2" />
                <path d="M205 312C220 281 251 257 289 250C336 242 381 258 415 301C449 344 453 392 427 443" stroke="#063C6B" strokeWidth="2" />
                <path d="M85 459C127 422 168 404 208 404C257 404 304 430 347 482" stroke="#063C6B" strokeWidth="1.5" />
                <path d="M300 130C344 86 404 77 453 111C503 146 515 205 487 266" stroke="#6FA3C2" strokeWidth="1.5" />
                <circle cx="392" cy="142" r="32" fill="#F2F1F0" stroke="#063C6B" strokeWidth="1.2" />
              </svg>
              <div className="absolute left-6 top-6 text-[11px] uppercase tracking-[0.28em] text-[#063C6B]/45">Systems in motion</div>
              <div className="absolute bottom-6 left-6 max-w-[15rem] text-sm leading-6 text-[#063C6B]/58">
                {developer.profile.name} · {new Date().getFullYear()}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Profile summary */}
      <section className="relative mt-4 grid gap-10 md:grid-cols-[0.95fr_1.05fr] md:gap-14">
        <div className="relative border-t border-[#063C6B]/12 pt-8">
          <div className="text-xs uppercase tracking-[0.26em] text-[#063C6B]/42">Profile</div>
          <h2 className="mt-4 font-display text-3xl tracking-[-0.04em] md:text-5xl">
            Built at the intersection of craft and systems.
          </h2>
        </div>
        <div className="relative border-t border-[#063C6B]/12 pt-8 text-[#063C6B]/72">
          <div className="max-w-2xl text-base leading-8">
            <ReactMarkdown>{resume.summary}</ReactMarkdown>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {resume.focusAreas.map((item: string) => (
              <div key={item} className="rounded-2xl border border-[#063C6B]/10 bg-white/55 px-4 py-4 text-sm backdrop-blur-sm">
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ventures */}
      <section className="mt-24">
        <div className="flex items-end justify-between gap-8 border-b border-[#063C6B]/10 pb-4">
          <div>
            <div className="text-xs uppercase tracking-[0.26em] text-[#063C6B]/42">Ventures & Community</div>
            <h2 className="mt-3 font-display text-3xl tracking-[-0.04em] md:text-5xl">Projects arranged in flow.</h2>
          </div>
          <div className="hidden text-sm text-[#063C6B]/42 md:block">community · craft · culture</div>
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            {resume.ventures.items.slice(0, 2).map((item, idx) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={`block rounded-[2rem] border border-[#063C6B]/10 bg-white/60 p-7 shadow-[0_12px_40px_rgba(6,60,107,0.05)] backdrop-blur-sm transition hover:-translate-y-1 hover:border-[#F07A20]/30 ${idx === 1 ? 'md:ml-10' : ''}`}
              >
                <div className="text-xs uppercase tracking-[0.22em] text-[#063C6B]/42">{item.description.split(' ').slice(0, 3).join(' ')}</div>
                <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] md:text-3xl">{item.name}</h3>
                <p className="mt-4 max-w-2xl text-sm leading-7 text-[#063C6B]/72">{item.description}</p>
              </a>
            ))}
          </div>
          <div className="md:pt-14">
            {resume.ventures.items.slice(2).map((item, idx) => (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className={`block rounded-[2rem] border border-[#063C6B]/10 p-7 shadow-[0_18px_56px_rgba(6,60,107,0.12)] transition hover:-translate-y-1 ${idx === 0 ? 'bg-[#063C6B] text-[#F2F1F0]' : 'bg-white/60 backdrop-blur-sm mt-6'}`}
              >
                <div className={`text-xs uppercase tracking-[0.22em] ${idx === 0 ? 'text-[#CFD3D2]/70' : 'text-[#063C6B]/42'}`}>
                  {item.description.split(' ').slice(0, 3).join(' ')}
                </div>
                <h3 className="mt-3 font-display text-2xl tracking-[-0.03em] md:text-3xl">{item.name}</h3>
                <p className={`mt-4 text-sm leading-7 ${idx === 0 ? 'text-[#CFD3D2]' : 'text-[#063C6B]/72'}`}>{item.description}</p>
                {idx === 0 && <div className="mt-8 h-px w-20 bg-[#6FA3C2]/45" />}
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
