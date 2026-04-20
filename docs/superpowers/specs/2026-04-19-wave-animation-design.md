# Wave Background Animation Design

**Date:** 2026-04-19  
**Status:** Approved

## Goal

Add a flowing "stroke-crawl" animation to the three decorative SVG wave paths in `src/components/Layout.tsx`. The waves should appear to have water running along them continuously.

## How It Works

Each wave path gets a repeating `stroke-dasharray` pattern. Animating `stroke-dashoffset` from `0` to `-(dasharray period)` makes the dashes flow forward along the wave's contour seamlessly and infinitely.

## Implementation

### CSS (`src/index.css`)

Add three `@keyframes` rules — one per wave — since each has a different dasharray period (to avoid the offset value needing to be computed at runtime):

```css
@keyframes waveCrawl25 {
  to { stroke-dashoffset: -25; }
}
@keyframes waveCrawl20 {
  to { stroke-dashoffset: -20; }
}
@keyframes waveCrawl18 {
  to { stroke-dashoffset: -18; }
}
```

### SVG paths (`src/components/Layout.tsx`)

| Wave | `stroke-dasharray` | Period | Keyframe | Duration | Easing |
|------|--------------------|--------|----------|----------|--------|
| Top (`#063C6B`, strokeWidth 1.5) | `"18 7"` | 25px | `waveCrawl25` | 8s | linear, infinite |
| Mid (`#6FA3C2`, strokeWidth 1.2) | `"14 6"` | 20px | `waveCrawl20` | 13s | linear, infinite |
| Bottom (`#063C6B`, strokeWidth 1) | `"10 8"` | 18px | `waveCrawl18` | 10s | linear, infinite |

Applied via `style` prop on each `<path>` (inline style is cleaner than three separate Tailwind keyframe classes for per-element values).

## Print Safety

The existing `animation: none !important` rule in the `@media print` block in `index.css` already covers these animations. No extra work needed.

## Out of Scope

- No JS, no requestAnimationFrame, no library dependency
- No change to wave shape, color, or opacity
- No interaction (hover speed-up, etc.)
