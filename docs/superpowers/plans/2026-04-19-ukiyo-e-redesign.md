# Ukiyo-e Visual Redesign Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Replace the existing warm earthy design system with the Ukiyo-e-inspired navy/ocean palette, SVG wave decorations, frosted glass cards, and asymmetric layouts — while preserving all data and adding a /contact route.

**Architecture:** Shell-first — update global CSS tokens and Layout/Navigation first, then restyle each page component independently. A new ContactPage component is added and wired into App.tsx. No data files are modified.

**Tech Stack:** React 18, TypeScript, Tailwind CSS v4, Vite, React Router v6

---

## File Map

| File | Action |
|---|---|
| `src/index.css` | Update CSS variables, paper texture, remove floatSlow |
| `src/components/Layout.tsx` | Rebuild: waves, crest orbs, paper texture, new container |
| `src/components/Navigation.tsx` | Rebuild: brand block, new link style, add Contact |
| `src/components/Home.tsx` | Rebuild: hero grid, decorative SVG card, frosted ventures |
| `src/components/ExperiencePage.tsx` | Restyle: new section headers, frosted cards, dark CEO card |
| `src/components/SkillsPage.tsx` | Restyle: frosted highlights, pill tags, section headers |
| `src/components/ContactPage.tsx` | Create: new contact page component |
| `src/App.tsx` | Add /contact route, remove contactItems from Home |

> **Note:** This project has no automated test suite. Verification is done visually via `npm run dev`. Each task ends with a dev server check and a commit.

---

## Task 1: Update CSS design tokens and global styles

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Update CSS variables and remove floatSlow**

Replace the entire contents of `src/index.css` with:

```css
@import "tailwindcss";

@import url('https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=Space+Grotesk:wght@400;500;600;700&display=swap');

:root {
  --bg: #F2F1F0;
  --ink: #063C6B;
  --muted: rgba(6, 60, 107, 0.60);
  --accent: #F07A20;
  --accent-2: #6FA3C2;
  --border: rgba(6, 60, 107, 0.10);
  --shadow: 0 12px 40px rgba(6, 60, 107, 0.05);
}

body {
  font-family: 'Space Grotesk', 'Segoe UI', system-ui, -apple-system, sans-serif;
  background-color: #F2F1F0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.font-display {
  font-family: 'Fraunces', 'Times New Roman', serif;
}

@keyframes fadeUp {
  from {
    opacity: 0;
    transform: translateY(16px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-up {
  animation: fadeUp 0.9s ease both;
}

@media print {
  :root {
    --bg: #ffffff;
    --ink: #111111;
    --muted: #333333;
    --accent: #000000;
    --accent-2: #000000;
    --border: rgba(0, 0, 0, 0.18);
    --shadow: none;
  }

  * {
    animation: none !important;
    box-shadow: none !important;
    text-shadow: none !important;
    background: transparent !important;
    opacity: 1 !important;
    color: #000000 !important;
  }

  body {
    background: #ffffff !important;
    color: #000000 !important;
    -webkit-print-color-adjust: exact;
    print-color-adjust: exact;
  }

  main {
    padding: 0 !important;
  }

  header,
  section,
  footer {
    break-inside: avoid;
    page-break-inside: avoid;
  }

  header {
    display: none !important;
  }

  .print-only {
    break-after: avoid-page;
    page-break-after: avoid;
  }

  .min-h-screen {
    min-height: auto !important;
  }

  a {
    color: #000000 !important;
    text-decoration: none !important;
  }

  .animate-fade-up {
    animation: none !important;
  }

  .backdrop-blur {
    backdrop-filter: none !important;
  }

  .grid {
    display: block !important;
  }

  .gap-10,
  .gap-6,
  .gap-5 {
    gap: 0.75rem !important;
  }

  .space-y-10 > :not([hidden]) ~ :not([hidden]),
  .space-y-6 > :not([hidden]) ~ :not([hidden]),
  .space-y-5 > :not([hidden]) ~ :not([hidden]) {
    margin-top: 0.75rem !important;
  }

  .rounded-3xl,
  .rounded-2xl,
  .rounded-full {
    border-radius: 0 !important;
  }

  [class*="border"] {
    border: none !important;
  }

  .screen-only {
    display: none !important;
  }

  .print-only {
    display: block !important;
  }
}

.print-only {
  display: none;
}
```

- [ ] **Step 2: Run dev server and verify background is #F2F1F0**

```bash
npm run dev
```

Open `http://localhost:5173`. The page background should be a light warm gray (`#F2F1F0`). The accent colors won't be visible yet since component classes still reference old values — that's expected.

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: update design tokens to Ukiyo-e palette"
```

---

## Task 2: Rebuild Layout.tsx — shell with waves, orbs, paper texture

**Files:**
- Modify: `src/components/Layout.tsx`

- [ ] **Step 1: Replace Layout.tsx**

```tsx
import React from 'react';
import Footer from './Footer/Footer';
import Navigation from './Navigation';

interface LayoutProps {
  children: React.ReactNode;
}

function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen bg-[#F2F1F0] text-[#063C6B] selection:bg-[#F07A20] selection:text-white">
      <div className="relative overflow-hidden">
        {/* Paper texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.05] mix-blend-multiply [background-image:radial-gradient(rgba(6,60,107,0.65)_0.7px,transparent_0.7px)] [background-size:12px_12px]" />

        {/* Wave lines */}
        <svg
          className="pointer-events-none absolute left-0 top-0 h-[520px] w-full opacity-[0.14]"
          viewBox="0 0 1440 520"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path d="M0 196C119 168 166 121 279 121C409 121 468 240 607 240C732 240 806 149 932 149C1060 149 1111 247 1228 247C1325 247 1373 204 1440 176" stroke="#063C6B" strokeWidth="1.5" />
          <path d="M0 266C97 266 161 212 273 212C415 212 460 332 607 332C739 332 794 251 929 251C1078 251 1131 356 1243 356C1324 356 1380 317 1440 285" stroke="#6FA3C2" strokeWidth="1.2" />
          <path d="M0 352C137 319 188 286 301 286C426 286 493 395 615 395C751 395 812 317 942 317C1068 317 1113 407 1229 407C1324 407 1377 372 1440 339" stroke="#063C6B" strokeWidth="1" />
        </svg>

        {/* Crest orbs */}
        <div className="pointer-events-none absolute right-[-8rem] top-24 h-[32rem] w-[32rem] rounded-[42%] border border-[#063C6B]/12 bg-[#6FA3C2]/14 blur-[1px]" />
        <div className="pointer-events-none absolute right-[2rem] top-16 h-[22rem] w-[22rem] rounded-[45%] border border-[#063C6B]/10 bg-white/30" />

        <Navigation />

        <main className="relative mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-10">
          {children}
        </main>
      </div>
      <Footer />
    </div>
  );
}

export default Layout;
```

- [ ] **Step 2: Verify in browser**

With `npm run dev` still running, reload `http://localhost:5173`. You should see:
- Light `#F2F1F0` background
- Faint dot texture across the page
- Three SVG wave lines visible in the upper portion of the page
- Two soft rounded blob shapes in the top-right corner

- [ ] **Step 3: Commit**

```bash
git add src/components/Layout.tsx
git commit -m "feat: rebuild Layout with Ukiyo-e waves, orbs, paper texture"
```

---

## Task 3: Rebuild Navigation.tsx

**Files:**
- Modify: `src/components/Navigation.tsx`

- [ ] **Step 1: Replace Navigation.tsx**

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <nav className="relative z-50 px-6 md:px-10">
      <div className="mx-auto flex max-w-6xl items-center justify-between border-b border-[#063C6B]/10 pb-5 pt-8">
        <Link to="/" className="group">
          <div className="font-medium text-sm tracking-[0.24em] uppercase text-[#063C6B]/85">JMSALCIDO</div>
          <div className="mt-1 text-xs tracking-[0.16em] uppercase text-[#063C6B]/45">software · systems · operations</div>
        </Link>
        <ul className="hidden md:flex gap-8 text-sm text-[#063C6B]/68">
          <li>
            <Link to="/" className="transition hover:text-[#F07A20]">Home</Link>
          </li>
          <li>
            <Link to="/experience" className="transition hover:text-[#F07A20]">Experience</Link>
          </li>
          <li>
            <Link to="/skills" className="transition hover:text-[#F07A20]">Skills</Link>
          </li>
          <li>
            <Link to="/contact" className="transition hover:text-[#F07A20]">Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navigation;
```

- [ ] **Step 2: Verify in browser**

Reload. The nav should now show:
- "JMSALCIDO" in navy with wide letter spacing
- Sub-label "software · systems · operations" below in muted navy
- Links: Home / Experience / Skills / Contact — navy tinted, orange on hover
- No white background pill — transparent over the wave/paper shell
- Links are hidden on mobile (visible at `md:` breakpoint and up)

- [ ] **Step 3: Commit**

```bash
git add src/components/Navigation.tsx
git commit -m "feat: rebuild Navigation with Ukiyo-e style and Contact link"
```

---

## Task 4: Rebuild Home.tsx

**Files:**
- Modify: `src/components/Home.tsx`

The `contactItems` prop is removed — the contact card is replaced by a decorative SVG. The Contact page handles contact info now.

- [ ] **Step 1: Replace Home.tsx**

```tsx
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
```

- [ ] **Step 2: Update App.tsx to remove contactItems from Home**

In `src/App.tsx`, find the Home route and remove the `contactItems` prop:

```tsx
<Route 
  path="/" 
  element={<Home />} 
/>
```

Also remove the `contactItems` array from the `App` function body (it will be rebuilt in Task 7).

- [ ] **Step 3: Verify in browser**

Reload `http://localhost:5173`. Check:
- Hero: two-column layout with headline on left, SVG art card on right
- "View experience" and "Get in touch" CTA buttons (rounded pill, outlined and filled)
- Profile summary section below with two-column split
- Ventures grid: first two ventures left-column (second offset right), third venue dark navy, fourth light

- [ ] **Step 4: Commit**

```bash
git add src/components/Home.tsx src/App.tsx
git commit -m "feat: rebuild Home with Ukiyo-e hero, SVG card, frosted ventures"
```

---

## Task 5: Restyle ExperiencePage.tsx

**Files:**
- Modify: `src/components/ExperiencePage.tsx`

- [ ] **Step 1: Replace ExperiencePage.tsx**

```tsx
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
```

- [ ] **Step 2: Verify in browser**

Navigate to `http://localhost:5173/experience`. Check:
- "Business & Roaster Leadership" section: eyebrow label + serif h2 + dark navy card for CEO role
- "Software Engineering" section: eyebrow + serif h2 + two-column asymmetric frosted glass cards
- Technology tags: small bordered pills inside each card

- [ ] **Step 3: Commit**

```bash
git add src/components/ExperiencePage.tsx
git commit -m "feat: restyle ExperiencePage with Ukiyo-e frosted cards and asymmetric grid"
```

---

## Task 6: Restyle SkillsPage.tsx

**Files:**
- Modify: `src/components/SkillsPage.tsx`

- [ ] **Step 1: Replace SkillsPage.tsx**

```tsx
import React from 'react';
import { Skill } from '../../src/data/resume';

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
              key={index}
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
          <div className="grid grid-cols-2 gap-3 md:grid-cols-2">
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
                {interests.map((interest, index) => (
                  <div key={index} className="rounded-2xl border border-[#063C6B]/10 px-4 py-3 text-sm text-[#063C6B]/80">
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
```

- [ ] **Step 2: Verify in browser**

Navigate to `http://localhost:5173/skills`. Check:
- "Signature Strengths": two frosted glass cards in a grid, second card offset
- "Skills Blend": left text column + right grid of bordered pill boxes
- "Languages & Interests": two-column layout, language rows with border-bottom, interests as bordered pills

- [ ] **Step 3: Commit**

```bash
git add src/components/SkillsPage.tsx
git commit -m "feat: restyle SkillsPage with Ukiyo-e card and pill patterns"
```

---

## Task 7: Create ContactPage.tsx and wire into App.tsx

**Files:**
- Create: `src/components/ContactPage.tsx`
- Modify: `src/App.tsx`

- [ ] **Step 1: Create src/components/ContactPage.tsx**

```tsx
import React from 'react';

interface ContactPageProps {
  email: string;
  linkedin: string;
  github: string;
}

function ContactPage({ email, linkedin, github }: ContactPageProps) {
  return (
    <div className="animate-fade-up pb-10 pt-10">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[#063C6B]/10" />
      <div className="grid gap-8 md:grid-cols-[1.1fr_0.9fr] md:items-end">
        <div>
          <div className="text-xs uppercase tracking-[0.26em] text-[#063C6B]/42">Contact</div>
          <h1 className="mt-4 font-display text-4xl tracking-[-0.045em] md:text-6xl">
            Build something with structure and breath.
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[#063C6B]/72">
            Software, systems, workflow design, and products that need engineering judgment without losing aesthetic discipline.
          </p>
        </div>
        <div className="flex flex-col gap-4 md:justify-self-end">
          <a
            href={`mailto:${email}`}
            className="inline-flex items-center rounded-full border border-[#063C6B] px-6 py-3 text-sm text-[#063C6B] transition hover:border-[#F07A20] hover:text-[#F07A20]"
          >
            {email}
          </a>
          <a
            href={`https://linkedin.com/in/${linkedin}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[#063C6B]/40 px-6 py-3 text-sm text-[#063C6B]/80 transition hover:border-[#F07A20] hover:text-[#F07A20]"
          >
            linkedin.com/in/{linkedin}
          </a>
          <a
            href={`https://github.com/${github}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-full border border-[#063C6B]/40 px-6 py-3 text-sm text-[#063C6B]/80 transition hover:border-[#F07A20] hover:text-[#F07A20]"
          >
            github.com/{github}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
```

- [ ] **Step 2: Update App.tsx to add /contact route**

Replace the full contents of `src/App.tsx` with:

```tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './components/Home';
import ExperiencePage from './components/ExperiencePage';
import SkillsPage from './components/SkillsPage';
import ContactPage from './components/ContactPage';
import developer from './data/developer';
import resume from './data/resume';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/experience"
            element={<ExperiencePage leadership={resume.leadership} softwareEngineering={resume.softwareTimeline} />}
          />
          <Route
            path="/skills"
            element={<SkillsPage skillItems={resume.skills} highlights={resume.highlights} languages={developer.languages} interests={developer.interests} />}
          />
          <Route
            path="/contact"
            element={<ContactPage email={developer.contact.email} linkedin={developer.contact.linkedin} github={developer.contact.github} />}
          />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
```

- [ ] **Step 3: Verify in browser**

Navigate to `http://localhost:5173/contact`. Check:
- Left column: "Contact" eyebrow, large serif headline, description paragraph
- Right column: three rounded-full bordered links (email, LinkedIn, GitHub) stacked vertically
- Orange hover effect on all links
- Navigation "Contact" link works and routes correctly

- [ ] **Step 4: Commit**

```bash
git add src/components/ContactPage.tsx src/App.tsx
git commit -m "feat: add ContactPage and /contact route"
```

---

## Task 8: Final cross-page verification

- [ ] **Step 1: Visit all routes and check for regressions**

With `npm run dev` running, visit:
1. `http://localhost:5173/` — Home: hero, profile, ventures
2. `http://localhost:5173/experience` — Experience: leadership + software timeline
3. `http://localhost:5173/skills` — Skills: highlights, skill pills, languages
4. `http://localhost:5173/contact` — Contact: headline, contact links

Check on each page:
- Paper dot texture visible
- SVG wave lines visible in upper area
- Crest orbs visible top-right
- Navigation shows all 4 links, orange hover works
- No console errors in browser DevTools
- No TypeScript errors in terminal

- [ ] **Step 2: Run TypeScript check**

```bash
npx tsc --noEmit
```

Expected: no errors. If errors appear, fix them before proceeding.

- [ ] **Step 3: Build check**

```bash
npm run build
```

Expected: `dist/` folder created with no errors. Warnings about bundle size are acceptable.

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "feat: complete Ukiyo-e visual redesign"
```
