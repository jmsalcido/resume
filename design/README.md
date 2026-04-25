# Jose Salcido — Personal Brand Design System

## Overview

This design system captures the visual identity, tone, and UI language for **Jose Salcido** — entrepreneur, stoic thinker, and creative mind. The brand lives at the intersection of Japanese ukiyo-e aesthetics, calm business authority, and quiet cool. Think deep ocean blues, warm woodblock ink, and intentional restraint.

**Sources provided:**
- Brand color palette (manual specification — no Figma or codebase attached)
- Personal brand brief describing aesthetic, philosophy, and personality

---

## Brand Personality

- **Entrepreneur** — decisive, results-oriented, strategic
- **Stoic** — calm under pressure, long-horizon thinking, disciplined
- **Ukiyo-e influenced** — visual restraint, layered depth, ink-wash textures, nature motifs
- **Dog person** — approachable, loyal, grounded
- **Cool but calm** — confident without being loud

---

## Content Fundamentals

### Tone & Voice
- **First person, direct**: "I build..." not "We help clients..."
- **Restrained and deliberate**: fewer words, more weight. Never verbose.
- **Stoic framing**: talk about process, discipline, and perspective — not hype
- **Business-forward but personal**: professional but never corporate-cold
- **No emoji** — the brand communicates through texture and form, not symbols

### Casing
- Sentence case for all UI and body copy
- Title Case only for formal headings or project/product names
- ALL CAPS reserved for rare emphasis labels only (e.g. section markers)

### Copywriting Examples
- ✓ "Build with intent."
- ✓ "Clarity is the first strategy."
- ✓ "Products that last are built slowly."
- ✗ "We're excited to announce 🚀..."
- ✗ "Unlock your potential TODAY!!!"

---

## Visual Foundations

### Colors
Deep ocean blues anchor the palette. Warm red-orange accents are used sparingly — punctuation, not wallpaper. Sand and muted rose tones provide warmth at small scale.

| Token | Hex | Use |
|---|---|---|
| bg_deep | #063C6B | Primary backgrounds, hero sections |
| bg_ocean | #114D8A | Secondary backgrounds, cards |
| primary | #1675A6 | CTAs, links, active states |
| primary_soft | #6FA3C2 | Hover states, secondary UI |
| accent_red | #F02E2B | Emphasis, critical highlights |
| accent_orange | #F07A20 | Secondary accent, warmth |
| accent_sand | #F2B48C | Subtle warmth, large type on dark |
| text_main | #F2F1F0 | Primary text on dark backgrounds |
| text_muted | #CFD3D2 | Secondary text, borders |
| shadow | #743D4C | Subtle depth, warm contrast shadows |

### Typography
- **Display / headings**: Shippori Mincho (Japanese-flavored serif) or Noto Serif — evokes ukiyo-e woodblock type. Closest Google Fonts substitution used.
- **Body**: DM Sans or similar geometric humanist — clean, readable, modern
- **Mono**: JetBrains Mono — for code or data display
- Scale: 12/14/16/18/24/32/48/64/96px

### Backgrounds
- Full-bleed deep blue (#063C6B) as primary canvas
- Subtle noise/grain texture overlay for ink-wash depth feel
- No busy gradients — max 2-stop radial vignette allowed
- Occasional warm overlay wash (shadow color) for depth contrast

### Cards
- Background: bg_ocean (#114D8A) or semi-transparent overlay
- Border: 1px solid rgba(207, 211, 210, 0.15) — text_muted at low opacity
- Border-radius: 8px standard, 4px compact, 0px for full-bleed panels
- Shadow: 0 4px 24px rgba(6, 60, 107, 0.5) — deep blue shadow, not black

### Spacing
- Base unit: 8px
- Scale: 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128px
- Generous whitespace — ukiyo-e principle of ma (間, negative space)

### Animation
- Minimal and intentional
- Easing: ease-out for enter, ease-in for exit
- Duration: 200ms micro-interactions, 400ms page transitions
- No bounce, no spring — calm and deliberate
- Fade + subtle translateY(8px) for entry

### Hover States
- Links: color shift to primary_soft (#6FA3C2)
- Buttons: opacity 0.85, slight brightness increase
- Cards: border brightens, subtle shadow expansion

### Press / Active States
- Scale(0.97) + slight darken — small, confident press

### Borders & Dividers
- Lines: 1px solid rgba(207,211,210,0.2)
- No heavy borders — prefer spacing to separate elements
- Decorative rule: 2px solid accent_orange at 40px wide (section markers)

### Corner Radii
- Small/compact: 4px
- Standard: 8px
- Pill/badge: 100px
- Never large radius (24px+) unless pill

### Imagery
- Color vibe: cool, slightly desaturated, deep blues — matches bg palette
- Ukiyo-e reference: flat perspective, bold outlines, nature motifs (water, waves, mountains, birds)
- Grain/texture overlay on images
- No stock-photo warmth or bright lifestyle photography

### Iconography
See ICONOGRAPHY section in README below.

---

## Iconography

- **No custom icon font** — icons used sparingly, line-weight style
- **CDN source**: Lucide Icons (lucide.dev) — clean 1.5px stroke, consistent geometry
- No emoji as icons
- Icons primarily used for navigation, status, and form affordances
- Never decorative — always functional

---

## File Index

| Path | Description |
|---|---|
| `README.md` | This file — brand overview and guidelines |
| `colors_and_type.css` | CSS custom properties for all tokens + semantic aliases |
| `SKILL.md` | Agent skill definition for Claude Code |
| `preview/colors-core.html` | All 10 brand swatches |
| `preview/colors-semantic.html` | Semantic CSS variable aliases |
| `preview/type-display.html` | Shippori Mincho display type scale |
| `preview/type-body.html` | DM Sans body + JetBrains Mono |
| `preview/spacing-tokens.html` | 8px spacing scale + border-radius |
| `preview/spacing-shadows.html` | Shadow system + border tokens |
| `preview/components-buttons.html` | Button variants + sizes |
| `preview/components-cards.html` | Card surface variants |
| `preview/components-badges-inputs.html` | Badges + form inputs |
| `preview/components-nav.html` | Navigation bar + footer |
| `preview/brand-wordmark.html` | Wordmark lockup |
| `ui_kits/website/index.html` | Full personal brand website (interactive) |
| `ui_kits/website/Nav.jsx` | Top navigation component |
| `ui_kits/website/Hero.jsx` | Hero section |
| `ui_kits/website/About.jsx` | About / pillars section |
| `ui_kits/website/Work.jsx` | Work / projects grid |
| `ui_kits/website/Writing.jsx` | Writing / blog list |
| `ui_kits/website/Contact.jsx` | Contact form |
| `ui_kits/website/Footer.jsx` | Footer strip |
| `ui_kits/website/App.jsx` | Root app + page router |
