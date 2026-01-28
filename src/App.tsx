import React from 'react';
import ReactMarkdown from 'react-markdown';
import Footer from './components/Footer/Footer';
import developer from './data/developer';
import resume from './data/resume';

function App() {
  const contactItems = [
    { label: 'Email', value: developer.contact.email, href: `mailto:${developer.contact.email}` },
    { label: 'Phone', value: developer.contact.phone, href: `tel:${developer.contact.phone}` },
    { label: 'Website', value: developer.contact.website.name, href: developer.contact.website.url },
    { label: 'LinkedIn', value: developer.contact.linkedin, href: `https://linkedin.com/in/${developer.contact.linkedin}` },
    { label: 'GitHub', value: developer.contact.github, href: `https://github.com/${developer.contact.github}` }
  ];

  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top,_#f5efe6_0%,_#ede2d5_40%,_#e2d6c7_100%)] text-[var(--ink)]">
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute -top-20 -right-24 h-80 w-80 rounded-full bg-[radial-gradient(circle,_rgba(199,118,58,0.25),_transparent_70%)] blur-2xl animate-float" />
        <div className="pointer-events-none absolute bottom-0 left-[-120px] h-72 w-72 rounded-full bg-[radial-gradient(circle,_rgba(47,111,109,0.25),_transparent_70%)] blur-2xl animate-float" />

        <main className="relative mx-auto max-w-6xl px-6 py-12 lg:py-16">
          <div className="print-only mb-3">
            <h1 className="font-display text-3xl text-[var(--ink)]">{developer.profile.name}</h1>
            <p className="text-sm text-[var(--muted)]">{developer.profile.tagline}</p>
            <p className="mt-1 text-xs text-[var(--muted)]">
              {developer.contact.email} · {developer.contact.phone} · {developer.contact.website.name}
            </p>
          </div>

          <header className="grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-6 animate-fade-up" style={{ animationDelay: '0.05s' }}>
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
                {resume.focusAreas.map((item) => (
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

            <div className="rounded-3xl border border-[var(--border)] bg-white/80 p-6 shadow-[var(--shadow)] backdrop-blur animate-fade-up screen-only" style={{ animationDelay: '0.15s' }}>
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

          <section className="mt-12 grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="space-y-10">
              <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur animate-fade-up" style={{ animationDelay: '0.2s' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                  Profile
                </p>
                <div className="mt-4 text-lg leading-relaxed text-[var(--ink)]">
                  <ReactMarkdown>{resume.summary}</ReactMarkdown>
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur animate-fade-up" style={{ animationDelay: '0.3s' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                  Business & Roaster Leadership
                </p>
                <div className="mt-6 space-y-6">
                  {resume.leadership.map((item) => (
                    <div key={`${item.company}-${item.position}`} className="rounded-2xl bg-[var(--paper)] p-5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <div>
                          <h3 className="font-display text-2xl text-[var(--ink)]">{item.position}</h3>
                          <p className="text-sm text-[var(--muted)]">{item.company} • {item.location}</p>
                        </div>
                        <span className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">{item.time}</span>
                      </div>
                      <div className="mt-4 space-y-3 text-sm leading-relaxed text-[var(--ink)]">
                        <ReactMarkdown>{item.description}</ReactMarkdown>
                        {item.description_extra ? <ReactMarkdown>{item.description_extra}</ReactMarkdown> : null}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur animate-fade-up" style={{ animationDelay: '0.4s' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                  Ventures & Community
                </p>
                <p className="mt-3 text-sm text-[var(--muted)]">{resume.ventures.header}</p>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {resume.ventures.items.map((item) => (
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
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur animate-fade-up" style={{ animationDelay: '0.5s' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                  Software Engineering Timeline
                </p>
                <div className="mt-6 space-y-6">
                  {resume.softwareTimeline.map((item) => (
                    <div key={`${item.company}-${item.position}`} className="relative rounded-2xl bg-[var(--paper)] p-5">
                      <div className="flex flex-wrap items-start justify-between gap-2">
                        <div>
                          <h3 className="font-display text-xl text-[var(--ink)]">{item.position}</h3>
                          <p className="text-sm text-[var(--muted)]">{item.company} • {item.location}</p>
                        </div>
                        <span className="text-xs uppercase tracking-[0.25em] text-[var(--muted)]">{item.time}</span>
                      </div>
                      <div className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--ink)]">
                        <ReactMarkdown>{item.description}</ReactMarkdown>
                        {item.description_extra ? <ReactMarkdown>{item.description_extra}</ReactMarkdown> : null}
                      </div>
                      {item.technologies && item.technologies.length > 0 ? (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {item.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="rounded-full border border-[var(--border)] bg-white/70 px-3 py-1 text-[11px] uppercase tracking-[0.2em] text-[var(--muted)]"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur animate-fade-up" style={{ animationDelay: '0.25s' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                  Signature Strengths
                </p>
                <ul className="mt-5 space-y-4 text-sm text-[var(--ink)]">
                  {resume.highlights.map((item) => (
                    <li key={item} className="rounded-2xl bg-[var(--paper)] p-4 leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur animate-fade-up" style={{ animationDelay: '0.35s' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                  Skills Blend
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {resume.skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[var(--ink)]"
                    >
                      {skill.name}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-3xl border border-[var(--border)] bg-white/85 p-7 shadow-[var(--shadow)] backdrop-blur animate-fade-up" style={{ animationDelay: '0.45s' }}>
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--muted)]">
                  Languages & Interests
                </p>
                <div className="mt-5 space-y-4 text-sm text-[var(--ink)]">
                  <div className="flex flex-wrap gap-2">
                    {developer.languages.map((language) => (
                      <span
                        key={language.name}
                        className="rounded-full border border-[var(--border)] bg-[var(--paper)] px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]"
                      >
                        {language.name} · {language.level}
                      </span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {developer.interests.map((interest) => (
                      <span
                        key={interest}
                        className="rounded-full border border-[var(--border)] bg-white/70 px-4 py-2 text-xs uppercase tracking-[0.2em] text-[var(--muted)]"
                      >
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
      <div className="print-only mt-4 text-center text-[10px] tracking-[0.25em] text-[var(--muted)]">
        {developer.contact.website.name} · {developer.contact.linkedin} · {developer.contact.github}
      </div>
      <Footer />
    </div>
  );
}

export default App;
