# Wave Stroke-Crawl Animation Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Animate the three decorative SVG wave paths in the layout background so they appear to have water flowing continuously along them.

**Architecture:** Each wave path gets a `strokeDasharray` repeating pattern and an `animation` style that cycles `strokeDashoffset` by exactly one pattern period, creating a seamless infinite crawl. Three separate `@keyframes` rules (one per period value) are added to `index.css`; the animation is applied via `style` prop inline on each `<path>`.

**Tech Stack:** React, Tailwind CSS (v4), plain CSS `@keyframes`

---

### Task 1: Add keyframes to index.css

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Add three `@keyframes` blocks after the existing `floatSlow` keyframe (line 46)**

Open `src/index.css` and insert after the closing `}` of `floatSlow`:

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

- [ ] **Step 2: Verify the file parses without errors**

Run: `npx tsc --noEmit`
Expected: no errors (CSS isn't checked by tsc, but confirms the project still builds)

- [ ] **Step 3: Commit**

```bash
git add src/index.css
git commit -m "feat: add wave stroke-crawl keyframes"
```

---

### Task 2: Apply animation to the three SVG wave paths in Layout.tsx

**Files:**
- Modify: `src/components/Layout.tsx`

- [ ] **Step 1: Update the top wave path (dark blue, strokeWidth 1.5)**

Find the first `<path>` inside the wave SVG (line ~24) and add `strokeDasharray` and `style`:

```tsx
<path
  d="M0 196C119 168 166 121 279 121C409 121 468 240 607 240C732 240 806 149 932 149C1060 149 1111 247 1228 247C1325 247 1373 204 1440 176"
  stroke="#063C6B"
  strokeWidth="1.5"
  strokeDasharray="18 7"
  style={{ animation: 'waveCrawl25 8s linear infinite' }}
/>
```

- [ ] **Step 2: Update the mid wave path (light blue, strokeWidth 1.2)**

Find the second `<path>` (line ~25) and update it:

```tsx
<path
  d="M0 266C97 266 161 212 273 212C415 212 460 332 607 332C739 332 794 251 929 251C1078 251 1131 356 1243 356C1324 356 1380 317 1440 285"
  stroke="#6FA3C2"
  strokeWidth="1.2"
  strokeDasharray="14 6"
  style={{ animation: 'waveCrawl20 13s linear infinite' }}
/>
```

- [ ] **Step 3: Update the bottom wave path (dark blue, strokeWidth 1)**

Find the third `<path>` (line ~26) and update it:

```tsx
<path
  d="M0 352C137 319 188 286 301 286C426 286 493 395 615 395C751 395 812 317 942 317C1068 317 1113 407 1229 407C1324 407 1377 372 1440 339"
  stroke="#063C6B"
  strokeWidth="1"
  strokeDasharray="10 8"
  style={{ animation: 'waveCrawl18 10s linear infinite' }}
/>
```

- [ ] **Step 4: Start the dev server and visually verify**

Run: `npm run dev`

Open `http://localhost:5173` in a browser and confirm:
- All three wave lines are animated and crawling
- Each wave moves at a visibly different speed (top: fast, bottom: medium, mid: slowest)
- Animation loops without any jump or glitch
- Page content (nav, main, footer) is unaffected

- [ ] **Step 5: Verify print styles suppress animation**

In browser DevTools, open the Rendering panel → set "Emulate CSS media type" to `print`. Confirm the waves become static (no movement).

- [ ] **Step 6: Commit**

```bash
git add src/components/Layout.tsx
git commit -m "feat: animate SVG wave paths with stroke-crawl effect"
```
