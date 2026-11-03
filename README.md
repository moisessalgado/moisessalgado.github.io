# moisessalgado.com.br

Personal website of Moises Salgado, built with [Astro](https://astro.build) and Markdown, deployed to GitHub Pages.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321 (drafts are visible)
npm run build    # outputs to dist/
npm run preview
```

## Writing a post

Create `src/content/blog/my-post.md`:

```md
---
title: "Title"
description: "One-line summary"
date: 2026-11-03
tema: filosofia   # filosofia | historia | tecnologia | curiosidades
draft: false      # drafts only show in `npm run dev`
---
Text in Markdown.
```

Projects live in `src/content/projetos/*.md` (`nome`, `url`, `descricao`, `ordem`).

## Structure

- `src/pages/` – routes (PT at `/`, institutional EN pages under `/en/`)
- `src/content/` – blog posts and project entries
- `src/layouts/Base.astro` – shared head (SEO, hreflang, JSON-LD), nav, footer
- `public/` – static files, including `CNAME` (custom domain; do not remove)

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds on every push to `main`.
In **Settings → Pages**, set **Source** to **GitHub Actions**.

## Shared domain

Other repos published with GitHub Pages (e.g. `ospm`) are served at `moisessalgado.com.br/<repo-name>/`.
Never create a route here with the same name as one of those repos (e.g. `src/pages/ospm`).

## DNS

Four `A` records for the GitHub Pages IPs (185.199.108.153, .109.153, .110.153, .111.153) and a `www` CNAME pointing to the root domain.
