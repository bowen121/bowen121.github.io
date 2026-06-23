# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page static personal academic website for Bowen Tan, hosted on GitHub Pages. There is **no build system, no framework, and no dependencies** — just hand-written HTML and CSS served as-is.

## Architecture

- `index.html` — the entire site. All content (intro, research interests, publications, links) lives here as static markup. The only JavaScript is an inline script that injects the current year into the footer.
- `assets/style.css` — all styling. Plain CSS using custom properties defined in `:root` (`--text`, `--text-secondary`, `--border`, `--bg`) for theming. Two typefaces loaded from Google Fonts: EB Garamond (serif, body) and Inter (sans, headings/labels). Mobile layout handled by a single `@media (max-width: 600px)` block.
- `assets/` — also holds the profile photo (`IMG_0864.jpg`) and CV (`BowenTan-CV.pdf`), both linked from `index.html`.
- `CNAME` — maps the GitHub Pages site to the custom domain `bowen-tan.com`. **Do not delete or rename this file**; removing it breaks the custom domain.

## Deployment

GitHub Pages serves the repository root of the `main` branch directly. **Pushing to `main` is the deploy** — there is no separate build or publish step. Commit and push only when the user asks.

## Local preview

No build needed. Either open `index.html` directly in a browser, or serve the directory:

```
python3 -m http.server 8000   # then open http://localhost:8000
```

## Conventions & gotchas

- Keep edits consistent with the existing minimalist style: serif body text, uppercase letter-spaced section labels, a 600px max content width.
- Publications are plain `<div class="paper">` blocks inside the Research `<section>`; add new papers by copying that markup. The author's own name is wrapped in `<strong><u>...</u></strong>`.
- The Google Scholar link in the Links section is a placeholder (`user=YOUR_ID`) and should be updated with the real ID before relying on it.
