# Dallas Commish Website

Static website for league operations, rules, finances, FAAB pages, and draft/standings data.

The site is organized as plain HTML, CSS, and JavaScript and appears intended for GitHub Pages hosting.

## What this repository contains

- Main landing/navigation page: `index.html`
- League rules pages:
  - `ALConstitutionBootstrap.html`
  - `ALConstitutionSimplified.html`
  - `NLConstitutionBootstrap.html`
  - `NLConstitutionSimplified.html`
- FAAB pages:
  - `ALFAAB.html`, `ALFAAB_2024.html`, `ALFAAB_2025.html`
  - `NLFAAB.html`, `NLFAAB_2024.html`
- Data and chart pages:
  - `AL2024DataStudy.html`
  - `NLCharts.html`
- Styling:
  - `css/homePage.css`
  - `css/keepers.css`
  - `css/responsive-tables.css`
- Scripts (data tables and page behavior):
  - `scripts/homePage.js`
  - `scripts/Finances.js`
  - `scripts/FAAB.js`
  - Year-specific draft and standings files in `scripts/` (for example `Draft2026.js`, `Standings2024.js`)
- Static assets:
  - `images/`

## How it works

- `index.html` provides the main navigation bar and content containers.
- Menu actions call JavaScript functions that inject generated table HTML into the page.
- Some content is loaded in iframes (rules and FAAB pages).
- The site uses CDN-hosted dependencies:
  - jQuery 2.1.1
  - jQuery UI 1.11.1
  - Bootstrap 3.3.1

## Run locally

Because this is a static site, you can run it by opening `index.html` directly in a browser.

If you prefer a local web server (recommended for iframe/script behavior consistency), from the repository root run:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Updating yearly league data

Most season-specific updates are done by editing files in `scripts/`:

- Draft/reserve/minor data functions (for example `Draft2026.js`, `Draft2027.js`)
- Standings/category summaries (for example `Standings2024.js`, `homePage.js`)
- Finance or FAAB values (`Finances.js`, `FAAB.js` and related HTML pages)

When adding a new season:

1. Add or copy the needed year-specific script file(s).
2. Include new script tags in `index.html` if required.
3. Add matching menu items and click handlers in `index.html`.
4. Verify table rendering and sorting behavior in browser.

## Deployment

This repository is suitable for GitHub Pages-style deployment as a static site.

## Notes

- There is no build step, package manager, or test runner configured.
- Content is primarily maintained through direct edits to HTML/JS data arrays and rendering functions.
