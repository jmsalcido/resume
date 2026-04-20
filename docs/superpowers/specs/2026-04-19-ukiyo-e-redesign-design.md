# Ukiyo-e Visual Redesign

**Date:** 2026-04-19  
**Status:** Approved

## Overview

Apply the Ukiyo-e-inspired design system from the approved mock to the existing multi-page resume site. All existing content and data remain unchanged. A new Contact route is added. The approach is shell-first: rebuild Layout and Navigation, then update each page, then add Contact.

## Design Tokens

Replace all CSS variables in `src/index.css`:

| Token | Value | Replaces |
|---|---|---|
| `--bg` | `#F2F1F0` | `--paper` (#f7f1e8) |
| `--ink` | `#063C6B` | `--ink` (#1e1713) |
| `--accent` | `#F07A20` | `--accent` (#c7763a) |
| `--accent-2` | `#6FA3C2` | `--accent-2` (#2f6f6d, was unused) |
| `--border` | `rgba(6,60,107,0.10)` | `--border` |
| `--muted` | `rgba(6,60,107,0.60)` | `--muted` (#5f554d) |

Paper texture: absolute `radial-gradient(rgba(6,60,107,0.65) 0.7px, transparent 0.7px)` at `12px 12px` spacing, `opacity-[0.05] mix-blend-multiply`, pointer-events-none, placed in `Layout.tsx`.

Fonts unchanged: Fraunces (serif headings) + Space Grotesk (body).

## Layout Shell (`src/components/Layout.tsx`)

The outer wrapper becomes the visual stage for all pages.

- Background: `bg-[#F2F1F0]`, text `text-[#063C6B]`, selection highlight `selection:bg-[#F07A20] selection:text-white`
- Paper texture dot overlay (absolute, inset-0, pointer-events-none)
- SVG wave lines: 3 `<path>` elements (navy + steel blue strokes, width 1–1.5px), absolute top-0 left-0, `h-[520px] w-full opacity-[0.14]`, `preserveAspectRatio="none"`
- Crest orbs: two absolute right-positioned `div`s with `rounded-[42%]` / `rounded-[45%]`, navy/steel-blue tinted backgrounds at low opacity
- Remove: existing floating gradient circles (`floatSlow` animation blobs)
- Content container: `relative mx-auto max-w-6xl px-6 py-8 md:px-10 md:py-10`

## Navigation (`src/components/Navigation.tsx`)

- Layout: `flex items-center justify-between border-b border-[#063C6B]/10 pb-5`
- Brand block (left):
  - Primary: `font-medium text-sm tracking-[0.24em] uppercase text-[#063C6B]/85` → "JMSALCIDO"
  - Sub-label: `text-xs tracking-[0.16em] uppercase text-[#063C6B]/45` → current tagline (short form)
- Nav links (right, hidden on mobile): Home · Experience · Skills · Contact
  - `text-sm text-[#063C6B]/68 transition hover:text-[#F07A20]`
- No background fill — transparent over the paper/wave shell

## Home Page (`src/components/Home.tsx`)

**Hero section** — `min-h-[78vh]`, asymmetric two-column grid `md:grid-cols-[1.1fr_0.9fr]`:

- Left column:
  - Eyebrow: `text-xs uppercase tracking-[0.28em] text-[#063C6B]/45` — "software · systems · operations · automation"
  - Headline: `font-serif text-5xl md:text-7xl lg:text-[5.6rem] leading-[0.94] tracking-[-0.045em]` — pulled from `resume.headline`
  - Summary paragraph: `text-[#063C6B]/72 leading-8`
  - Two CTA buttons (rounded-full):
    - Outlined: `border border-[#063C6B]/18 bg-white/60 backdrop-blur-sm hover:border-[#F07A20]/50 hover:text-[#F07A20]` → links to `/experience`
    - Filled navy: `border border-[#063C6B] bg-[#063C6B] text-[#F2F1F0] hover:bg-[#0C4A80]` → links to `/contact`

- Right column: decorative SVG art card (wave contour lines inside a frosted glass rounded card, matching mock's "Layer study" block). Static SVG, no content.

**Ventures section** — existing ventures data, each card becomes:
- `rounded-[2rem] border border-[#063C6B]/10 bg-white/60 p-7 shadow-[0_12px_40px_rgba(6,60,107,0.05)] backdrop-blur-sm`
- Eyebrow label in `text-xs uppercase tracking-[0.22em] text-[#063C6B]/42`
- Title in `font-serif`

## Experience Page (`src/components/ExperiencePage.tsx`)

Section headers use the eyebrow + serif heading pattern:
- Eyebrow: `text-xs uppercase tracking-[0.26em] text-[#063C6B]/42`
- H2: `font-serif text-3xl md:text-5xl tracking-[-0.04em]`
- Thin border-top separator: `border-t border-[#063C6B]/12 pt-8`

Each experience card:
- `rounded-[2rem] border border-[#063C6B]/10 bg-white/60 p-7 shadow-[0_12px_40px_rgba(6,60,107,0.05)] backdrop-blur-sm`
- Role title in `font-serif`
- Company + date in `text-xs uppercase tracking-[0.22em] text-[#063C6B]/42`
- Description in `text-sm leading-7 text-[#063C6B]/72`

Featured/most-recent role (CEO at Culto al Perro Café): dark navy card — `bg-[#063C6B] text-[#F2F1F0]`, description `text-[#CFD3D2]`, eyebrow `text-[#CFD3D2]/70`.

Layout: two-column asymmetric grid separating Business leadership from Software engineering timeline, with `md:pt-14` offset on the second column for visual flow.

## Skills Page (`src/components/SkillsPage.tsx`)

**Highlights section** — two-column grid, each highlight as a frosted glass card.

**Skill tags** — grid `grid-cols-2 md:grid-cols-4`, each tag:
- `rounded-2xl border border-[#063C6B]/10 px-4 py-4 text-center text-sm text-[#063C6B]/80`
- No filled backgrounds — just bordered pills

**Languages & Interests** — simple list, same eyebrow/section pattern.

## Contact Page (`src/components/ContactPage.tsx`) — New

New file and new route `/contact` added to `src/App.tsx`.

Layout: two-column `md:grid-cols-[1.1fr_0.9fr] md:items-end` (matches mock contact section):
- Left: eyebrow "Contact", large serif headline, brief paragraph
- Right: contact links as `rounded-full border` buttons:
  - Email → `mailto:` from `developer.contact.email`
  - LinkedIn → from `developer.contact.linkedin`
  - GitHub → from `developer.contact.github`
  - All use `border-[#063C6B] hover:border-[#F07A20] hover:text-[#F07A20]` treatment

Navigation updated to include Contact link.

## Routing

`src/App.tsx` — add:
```tsx
<Route path="/contact" element={<ContactPage developer={developer} />} />
```

Navigation gets the fourth link: `{ label: 'Contact', path: '/contact' }`.

## What Does NOT Change

- All data files (`src/data/developer.ts`, `src/data/resume.ts`) — untouched
- Font imports (Fraunces, Space Grotesk)
- Print styles — preserved, update color values to new tokens
- Analytics integration
- Unused legacy components in `MainContent/` and `Sidebar/` — left as-is

## File Change Summary

| File | Action |
|---|---|
| `src/index.css` | Update CSS variables, paper texture, remove old animations |
| `src/components/Layout.tsx` | Rebuild shell with waves, orbs, paper texture |
| `src/components/Navigation.tsx` | New nav style, add Contact link |
| `src/components/Home.tsx` | New hero layout, frosted glass venture cards |
| `src/components/ExperiencePage.tsx` | New card styles, section layout |
| `src/components/SkillsPage.tsx` | New card/tag styles, section layout |
| `src/components/ContactPage.tsx` | New file |
| `src/App.tsx` | Add `/contact` route |
