# SEO Audit Plan Update Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Update `docs/seo-audit-plan.md` to include a new "Phase 0" for content restoration and refine existing phases with more technical detail.

**Architecture:** Direct modification of the existing Markdown documentation file.

**Tech Stack:** Markdown, Git

---

### Task 1: Implement Phase 0 (Content Restoration & Migration)

**Files:**
- Modify: `docs/seo-audit-plan.md`

- [ ] **Step 1: Add Phase 0 to the document**

```markdown
### Phase 0: Content Restoration & Migration (New Priority)
- [ ] **Source Identification:** Locate and audit all missing resume data (experience, education, skills, etc.).
- [ ] **Data Inintgestion:** Migrate/recreate content into the codebase (e.g., as `.md` files in `src/content/` or similar).
- [ ] **Integrity Verification:** Cross-reference restored content against original sources to ensure no data loss or corruption.
```

- [ ] **Step 2: Verify Phase 0 is correctly positioned before Phase 1**

Run: `grep -A 5 "Phase 0" docs/seo-audit-plan.md`
Expected: The output should show Phase 0 immediately followed by Phase 1.

- [ ] **Step 3: Commit the change**

```bash
git add docs/seo-audit-plan.md
git commit -m "docs: add phase 0 content restoration to seo audit plan"
```

### Task 2: Refine Phase 1 (Foundation & Schema)

**Files:**
- Modify: `docs/seo-audit-plan.md`

- [ ] **Step 1: Add technical detail to JSON-LD task**

```markdown
- [ ] **Implement JSON-LD:** Add `Person` schema to the root component, including `knowsAbout`, `jobTitle`, and `worksFor`.
```

- [ ] **Step 2: Verify implementation**

Run: `grep -C 2 "JSON-LD" docs/seo-audit-plan.md`
Expected: The line with JSON-LD should be present with its new detail.

- [ ] **Step 3: Commit the change**

```bash
git add docs/seo-audit-plan.md
git commit -m "docs: refine phase 1 schema details in seo audit plan"
```

### Task 3: Final Review & Cleanup

**Files:**
- Read: `docs/seo-audit-plan.md`

- [ ] **Step 1: Final audit of the document structure**
Ensure Phases 0, 1, 2, and 3 are all present and logically ordered.

- [ ] **Step 2: Final Commit**

```bash
git add docs/seo-audit-plan.md
git commit -m "docs: finalize seo audit plan updates"
```
