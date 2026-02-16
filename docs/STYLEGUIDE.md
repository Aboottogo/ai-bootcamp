# AI-Bootcamp Styleguide

This styleguide documents the structure, components, and conventions used across the bootcamp site. Apply these patterns when creating or editing pages to keep the site consistent.

---

## HTML Structure

### Boilerplate

Every page uses the same head and body structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Page Name | AI-Assisted App Development Bootcamp</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body data-current-page="page-slug">
```

- **Title format:** `Page Name | AI-Assisted App Development Bootcamp`
- **data-current-page:** Kebab-case slug matching the page (e.g. `pre-work`, `meeting-1`, `our-tools`). Used for CSS targeting and sidebar current-state highlighting.

### Layout Order

The body contains these elements in this order:

1. `<header class="site-header">` — Mobile top bar with hamburger
2. `<aside class="sidebar">` — Navigation
3. `<main class="main-content">` — Page content
4. `<div class="sidebar-overlay" aria-hidden="true">` — Mobile overlay
5. `<script src="script.js"></script>` — Always last

### Navigation

The sidebar nav is identical on every page. Do not modify the nav list when adding new content pages—update it only when the site structure changes.

---

## Main Content Structure

### Article Wrapper

All page content lives inside a single `<article>`:

```html
<main class="main-content">
  <article>
    <!-- content here -->
  </article>
</main>
```

### Heading Hierarchy

Use a numbered scheme for headings:

| Level | Format | Example |
|-------|--------|---------|
| H1 | `X. Page Title` | `5. Meeting 1` |
| H2 | `X.Y Section Title` | `5.1 Ask Cursor to Plan and Build...` |
| H3 | `X.Y.Z Subsection Title` | `5.1.1 Generate Your Tutorial Website` |

- **IDs:** Use kebab-case derived from the heading text (e.g. `id="choose-your-project-idea"`, `id="exercise-generate-tutorial"`).
- **First H2:** Use `margin-top: 0` (handled by CSS for `h2:first-of-type`).

### Section Breaks

Use `<hr>` between major sections to create visual separation. Do not use `<hr>` between an H2 and its first paragraph.

---

## Components

### Exercise Box

Use for step-by-step exercises. Wraps an H3 (the exercise title) and an ordered list of steps.

```html
<div class="exercise-box">
  <h3 id="exercise-slug">5.1.1 Exercise Title</h3>
  <ol>
    <li>First step...</li>
    <li>Second step...</li>
  </ol>
</div>
```

- Exercise H3 IDs: Use format like `exercise-1-write-a-poem` or `exercise-generate-tutorial`.
- Optional: Add ✅ to the title when the exercise is complete (e.g. `Exercise 1: Write a Poem ✅`).

### Callout Box

Use for tips, reminders, extensions, or supplementary context. Not for primary instructions.

```html
<div class="callout-box">
  <p><strong>Label:</strong> Main point here.</p>
  <p>Additional paragraph if needed.</p>
  <ol>
    <li>Optional numbered list</li>
  </ol>
</div>
```

- Common labels: `Tip:`, `Extensions:`, `Cursor Layout:`, `Asking Cursor to do the work for you:`

### Code Block with Copy Button

For short prompts or commands users should copy:

```html
<div class="code-block-wrapper">
  <pre><code>Your prompt or command here</code></pre>
  <button type="button" class="copy-code-btn">Copy</button>
</div>
```

### Long Prompt (Scrollable)

For multi-line prompts (e.g. the Composer prompt in Meeting 1):

```html
<div class="prompt-code-wrapper">
  <button type="button" class="copy-prompt-btn" aria-label="Copy prompt to clipboard">Copy</button>
  <pre class="scrollable-prompt"><code id="composer-prompt-text">...long prompt...</code></pre>
</div>
```

- Use `scrollable-prompt` for prompts that exceed a few lines.
- The `id` on the code element is used by the copy script.

### Step Tip

Inline tips within numbered steps:

```html
<p class="step-tip"><strong>Tip:</strong> Your tip here.</p>
```

Place inside an `<li>` or immediately after a step, with appropriate spacing.

---

## Diagrams (Mermaid)

When a page needs a flowchart or diagram:

1. Add the Mermaid script before `script.js`:

```html
<script src="https://cdn.jsdelivr.net/npm/mermaid/dist/mermaid.min.js"></script>
<script>mermaid.initialize({ startOnLoad: true, theme: 'neutral' });</script>
<script src="script.js"></script>
```

2. Use a div with class `mermaid`:

```html
<div class="mermaid">
graph LR
    Build[**Plan** and **Build** in **Cursor**]
        --> Push["**Push** to **Github** Repository"]
        --> Host["**Host** on **GitHub Pages**"]
</div>
```

- Use `theme: 'neutral'` for consistency with the site palette.
- Bold text in Mermaid: `**text**`

---

## Writing Conventions

### Completion Criteria

Use **"You're done when:"** to signal when a section or exercise is complete:

```html
<p><strong>You're done when:</strong> You can log in to GitHub and see your dashboard.</p>
```

### Steps Label

When introducing a numbered list of steps:

```html
<p><strong>Steps:</strong></p>
<ol>
  ...
</ol>
```

### Emphasis

- Use `<strong>` for key terms, file names, and important phrases.
- Use `<code>` for file names, commands, keyboard shortcuts, and technical identifiers.
- Use `<em>` sparingly for emphasis in prose.

### Links

- **Internal:** Use relative paths (`app-idea.html`, `pre-work.html#choose-your-project-idea`).
- **External:** Add `target="_blank" rel="noopener noreferrer"` for links that leave the site.
- **Cross-references:** Link to other pages when relevant (e.g. "See the [Project Ideas](app-idea.html) page").

### Opening Content

After the H1, include:

1. A brief goal or context paragraph (e.g. "**Goal:** Leave this session with a live website...")
2. Optionally, a numbered list of what the page covers (high-level steps)

### Closing Content

End the article with a "Next" or "Ready?" link when appropriate:

```html
<p>Next: <a href="meeting-2.html">Meeting 2</a></p>
```

or

```html
<p>Ready? Start with <a href="app-idea.html">Project Ideas</a>.</p>
```

---

## File Naming

- HTML files: kebab-case (e.g. `app-idea.html`, `pre-work.html`, `meeting-1.html`)
- Shared assets: `styles.css`, `script.js`

---

## Scripts

- **script.js:** Include on every page. Handles sidebar toggle, copy buttons, and current-page highlighting.
- **Mermaid:** Include only on pages that use `.mermaid` diagrams.

---

## Checklist for New Pages

- [ ] Title: `Page Name | AI-Assisted App Development Bootcamp`
- [ ] `data-current-page` matches page slug
- [ ] Nav list is unchanged (unless adding a new site section)
- [ ] H1 uses format `X. Title` with matching id
- [ ] H2/H3 use `X.Y` and `X.Y.Z` numbering
- [ ] IDs are kebab-case
- [ ] `<hr>` between major sections
- [ ] Exercise boxes use `exercise-box`, callouts use `callout-box`
- [ ] Code blocks use `code-block-wrapper` with `copy-code-btn`
- [ ] Long prompts use `prompt-code-wrapper` and `scrollable-prompt`
- [ ] External links have `target="_blank" rel="noopener noreferrer"`
- [ ] Mermaid script included only if page has diagrams
- [ ] `script.js` is last before `</body>`
