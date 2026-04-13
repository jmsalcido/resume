# SEO Audit Plan: jmsalcido.dev

## Overview
This document outlines the plan to address indexing issues and improve the organic search visibility of `https://jmsalcido.dev`. The primary goal is to move from a "thin" single-page resume to a high-authority content hub.

## Identified Issues
- **Thin Content:** The current site lacks enough text density for Google to establish topical authority.
- **Lack of Internal Architecture:** No internal links exist because there are no sub-pages.
- **Missing Structured Data:** Absence of JSON-LD `Person` or `ProfessionalService` schema.

## Implementation Phases

### Phase 0: Content Restoration & Migration (New Priority)
- [ ] **Source Identification:** Locate and audit all missing resume data (experience, education, skills, etc.).
- [ ] **Data Ingestion:** Migrate/recreate content into the codebase (e.g., as `.md` files in `src/content/` or similar).
- [ ] **Integrity Verification:** Cross-reference restored content against original sources to ensure no data loss or corruption.

### Phase 1: Foundation & Schema (Immediate)
- [ ] **Implement JSON-LD:** Add `Person` schema to the root component, including `knowsAbout`, `jobTitle`, and `worksFor`.
- [    **Metadata Optimization:** Ensure every route has unique, descriptive `<title>` and `<meta description>` tags.

### Phase 2: Content Expansion (Medium Term)
- [ ] **Create `/projects` Route:**
    - Convert existing project links into dedicated detail pages.
    - Focus on technical writing (architecture, challenges, tools used).
- [ ] **Create `/blog` or `/notes` Route:**
    - Implement a Markdown-based blogging system.
    - Target high-intent keywords related to Software Engineering and Coffee Roasting.
- [ ] **Expand Ventures Pages:**
    - Create dedicated pages for `Culto al Perro Café` and other ventures to capture niche traffic.

### Phase 3: Technical SEO & Discoverability (Long Term)
- [ ] **Sitemap Generation:** Automate `sitemap.xml` creation as new routes are added.
- [ ] **Internal Linking Strategy:** Implement a robust navigation structure and contextual links within blog posts.
- [ ] **Performance Monitoring:** Use Search Console to track "Crawled - currently not indexed" status improvements.

## Success Metrics
- Increase in total indexed URLs.
- Growth in organic impressions via Google Search Console.
- Improvement in keyword rankings for "Software Engineering Leader" and "Specialty Coffee Roaster".
