# moisessalgado.com.br

Personal website of Moises Salgado. It shares its stack, structure, fonts and components with the
[Coordenada Geo site](https://coordenadageo.com.br) (`~/dev/www.coordenadageo.com.br`), but has its own identity:
a black and white palette (neutral grays only, light and dark) and the "olho" logo.
Components copied from there: `Button`, `Card`, `Section`, `ThemeProvider`, `ThemeToggle`, `NavMenu`, `MDXComponents`,
`FooterMap` and the Pages workflows. Keep fixes in sync by hand; do not copy its colors.

## Stack

- Next.js 16 (App Router, `output: 'export'`, static) + TypeScript + Tailwind CSS
- Markdown posts via `gray-matter` + `next-mdx-remote`
- Fonts: Comfortaa (display) and Urbanist (text); light/dark theme via `next-themes`
- Palette: `ink` (black to gray) and `paper` (white to light gray) in `tailwind.config.ts`; there is no accent color
- Single-page home (`/`: intro, about, latest posts) plus `/blog/` and one page per post; a short English page at `/en/`

## Develop

```bash
npm install
npm run dev      # http://localhost:3000 (drafts are visible)
npm run build    # static site in ./out
npm run preview  # serve ./out
npm run lint
```

## Site texts

All fixed texts (intro, about, blog heading, "where I am") live in `content/site.md` (Portuguese) and
`content/site.en.md` (English). Edit the Markdown and rebuild; keep the `## section` names and `key:` lines.

## Writing a post

1. Copy `content/blog/_modelo.md` to `content/blog/my-post.md` (files starting with `_` are ignored; the file name is the URL).
2. Write it. `status: rascunho` keeps it private: it only shows in `npm run dev`, never in the build.
3. When it is ready, publish it:

```bash
npm run posts                              # list posts and status
npm run posts -- publish my-post           # status: publicado
npm run posts -- publish my-post --push    # ...and commit + push (deploys)
npm run posts -- unpublish my-post         # back to draft
```

Do not use HTML comments (`<!-- -->`) in the post body: MDX does not accept them.
With no published post the blog is empty and the site still builds.

## Structure

- `app/` routes: `/`, `blog`, `blog/[slug]`, `en`, `rss.xml`
- `components/` shared UI; `lib/` site data and blog reader
- `content/` site texts (`site*.md`) and posts (`blog/`)
- `public/` static files, including `CNAME` (custom domain)
- `brand/` logo source (`olho_A.png`) and `og.html` (Open Graph image source)

## Brand assets

`public/favicon.ico`, `icon-*.png`, `apple-touch-icon.png` and `public/brand/logo-{preto,branco}.png` are generated from
`brand/olho_A.png`:

```bash
python3 -I scripts/make-brand.py   # needs Pillow and numpy
```

`public/og-default.png` is a screenshot of `brand/og.html` (1200x630, headless Chromium).

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
