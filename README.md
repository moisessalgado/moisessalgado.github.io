# Moises Salgado - Personal Website

Static bilingual personal website (PT/EN) focused on professional profile and LinkedIn CV.

## Stack

- HTML/CSS/JavaScript (no build step)
- GitHub Pages (`main` branch + `/docs` folder)

## Structure

- `docs/index.html` - Portuguese page
- `docs/en/index.html` - English page
- `docs/css/style.css` - visual system and responsive styles
- `docs/js/main.js` - lightweight interactions
- `docs/CNAME` - custom domain (`moisessalgado.com.br`)

## Local Preview

Open `docs/index.html` in the browser.

## Deploy on GitHub Pages

1. Push repository to GitHub.
2. Go to `Settings > Pages`.
3. Set `Source` to `Deploy from a branch`.
4. Select branch `main` and folder `/docs`.
5. Save and wait for publication.

## Domain Setup (DNS)

At your DNS provider, configure:

- `A` record for root domain (`@`) pointing to GitHub Pages IPs:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`
- `CNAME` record for `www` pointing to `moisessalgado.com.br`

After DNS propagation:

1. In `Settings > Pages`, confirm `Custom domain: moisessalgado.com.br`.
2. Enable `Enforce HTTPS`.

## Content Updates

Edit only:

- `docs/index.html`
- `docs/en/index.html`

No build or dependency install is required.
