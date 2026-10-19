# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A single-page static personal academic website for Bowen Tan, hosted on GitHub Pages. There is **no build system, no framework, and no dependencies** — just hand-written HTML and CSS served as-is.

## Architecture

- `index.html` — the entire site. All content (intro, research interests, publications, links) lives here as static markup. The only JavaScript is an inline script that injects the current year into the footer and drives the project videos (play only while on screen, Play/Pause toggle, never autoplay under `prefers-reduced-motion`).
- `assets/style.css` — all styling. Plain CSS using custom properties defined in `:root` (`--bg`, `--text`, `--text-secondary`, `--border`, `--accent`, `--serif`, `--sans`, …) with a warm dark variant under `prefers-color-scheme: dark`. Two typefaces from Google Fonts: Instrument Serif (display — name, intro, titles, links; it has no bold weight) and Inter (sans — labels, metadata, authors). Layout is a 12-column grid inside a 1240px max width; breakpoints at 900px (tablet) and 640px (single column).
- `assets/` — also holds the profile photo (`IMG_0864.jpg`, 416×416 — don't render it much larger than ~220px) and CV (`BowenTan-CV.pdf`), both linked from `index.html`.
- `assets/media/` — one short muted looping clip (`<slug>.mp4`, ~960px wide, ≤ ~1MB) plus a poster frame (`<slug>.jpg`) per paper, trimmed from the paper's project website.
- `CNAME` — maps the GitHub Pages site to the custom domain `bowen-tan.com`. **Do not delete or rename this file**; removing it breaks the custom domain.

## Deployment

GitHub Pages serves the repository root of the `main` branch directly. **Pushing to `main` is the deploy** — there is no separate build or publish step. Commit and push only when the user asks.

## Local preview

No build needed. Either open `index.html` directly in a browser, or serve the directory:

```
python3 -m http.server 8000   # then open http://localhost:8000
```

## Conventions & gotchas

- `index.html` links the stylesheet as `assets/style.css?v=N`. Bump `N` whenever `style.css` changes, or browsers may pair the new HTML with a cached old stylesheet for up to 10 minutes (GitHub Pages sends `max-age=600`).
- Keep edits consistent with the editorial style: warm off-white background, hairline dividers, numbered uppercase section labels in the left columns, no cards, shadows, rounded corners, or entrance animations.
- Publications are `<article class="paper">` blocks inside the Research `<section>` (`.paper-media` with video + Play/Pause button, then `.paper-text`; every clip shows in the same 2:1 frame). Add new papers by copying that markup, bumping the "No. 0X" index, and alternating `paper-flip` so media switches sides. The author's own name is wrapped in `<strong><u>...</u></strong>`.
- The Google Scholar link in the Links section is a placeholder (`user=YOUR_ID`) and should be updated with the real ID before relying on it.
