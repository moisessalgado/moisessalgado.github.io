# moisessalgado.com.br

Personal website of Moises Salgado. It deliberately shares its stack, palette, fonts and components with the
[Coordenada Geo site](https://coordenadageo.com.br) (`~/dev/www.coordenadageo.com.br`) so both look and behave the same.
Components copied from there: `Button`, `Card`, `Section`, `ThemeProvider`, `ThemeToggle`, `NavMenu`, `MDXComponents`,
`FooterMap`, `tailwind.config.ts`, `app/globals.css` and the Pages workflows. Keep fixes in sync by hand.

## Stack

- Next.js 16 (App Router, `output: 'export'`, static) + TypeScript + Tailwind CSS
- Markdown posts via `gray-matter` + `next-mdx-remote`
- Fonts: Comfortaa (display) and Urbanist (text); light/dark theme via `next-themes`
- Portuguese at the root (`/`), English only for institutional pages (`/en/`)

## Develop

```bash
npm install
npm run dev      # http://localhost:3000 (drafts are visible)
npm run build    # static site in ./out
npm run preview  # serve ./out
npm run lint
```

## Writing a post

Create `content/blog/my-post.md`:

```md
---
title: "Title"
excerpt: "One-line summary"
date: "2026-11-03"        # quoted, YYYY-MM-DD
tema: filosofia           # filosofia | historia | tecnologia | curiosidades
draft: false              # drafts only show in `npm run dev`
---
Text in Markdown.
```

At least one published (non-draft) post must exist, otherwise the static export fails.
Projects live in `content/projetos/*.md` (`nome`, `url`, `descricao`, `ordem`).

## Structure

- `app/` routes: `/`, `sobre`, `consultoria`, `projetos`, `escritos`, `temas/[tema]`, `en/*`, `rss.xml`
- `components/` shared UI; `lib/` site data, blog and project readers
- `content/` posts and projects
- `public/` static files, including `CNAME` (custom domain)

## Deployment

GitHub Actions (`.github/workflows/deploy.yml`) builds and deploys on every push to `main`.
In **Settings → Pages**, **Source** must be **GitHub Actions** and the **custom domain** must be `moisessalgado.com.br`
(switching the source clears the domain; `public/CNAME` is not enough in this mode).

## Shared domain

Other repos published with GitHub Pages (e.g. `ospm`) are served at `moisessalgado.com.br/<repo-name>/`.
Never create a route here with the same name as one of those repos (e.g. `app/ospm`).

## DNS

The domain is proxied by Cloudflare. The records must point to GitHub Pages (`A` records 185.199.108.153, .109.153, .110.153,
.111.153, or a proxied equivalent) and `www` must be a CNAME to the root domain.
