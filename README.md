# Bloque Open Source

The hub site for Bloque's open-source projects: what each one is, where its docs and code are, the
family's brand, and how Bloque does open source. It is this GitHub organisation's Pages root, so it
is served at **https://bloque-app.github.io/** once the repository is public. Each project's own
docs are a separate Pages site under it, at `/<repo>/` (aledgent's are at `/aledgent/`).

Pages: **Home** (`/`, a splash page with one card per project), **Brand** (`/brand/`) and **Open
source at Bloque** (`/open-source/`: licences, security reports, contributing, names and marks).

## Stack

The same as aledgent's docs (`bloque-app/aledgent`, `site/`), so the family has one theme to keep:
[Starlight](https://starlight.astro.build) on Astro, with Bloque's theme. `src/styles/theme.css`,
the fonts and the Footer/Hero overrides follow aledgent's; the dependency versions are pinned to the
exact same ones, and `package-lock.json` is committed, so `npm ci` installs exactly what was
reviewed. Change a version in both sites together, and only to a release at least two weeks old.

## Run and build

Node 22.12 or later.

```sh
npm ci
npm run dev       # http://localhost:4321/
npm run build     # static output in dist/
npm run preview   # serves dist/
```

`SITE_URL` (default `https://bloque-app.github.io`) and `SITE_BASE` (default `/`) set the origin and
the path the site is served under, for a fork or a custom domain.

Links to `/aledgent/` and other project sites are plain absolute paths: they are other sites under
the same Pages root, not pages of this one, so they do not resolve under `npm run dev`.

## Layout

```
astro.config.mjs          Starlight, the sidebar, fonts, component overrides
src/data/projects.ts      The projects and the family's colours (one place for all pages)
src/content/docs/         index.mdx (home), brand.mdx, open-source.mdx
src/components/           Hero (override), Footer (wraps Starlight's), ProjectCard, Mark, Brand*
src/styles/theme.css      Bloque's tokens mapped onto Starlight's custom properties (from aledgent)
public/brand/<product>/   The logo export, served as downloads; see "Brand assets"
screenshots/              Light and dark captures of Home and Brand, for review
```

## Brand assets

`public/brand/<product>/` holds each product's final export: `symbol.svg`, `symbol-mono-ink.svg`,
`symbol-mono-white.svg`, `lockup.svg`, `lockup-dark.svg`, `lockup-stacked.svg`,
`lockup-stacked-dark.svg`, `favicon-16.svg`, `favicon-32.svg` (and aledgent's adaptive
`favicon.svg`). The Brand page lists whatever files are in each folder, so a new export file needs
no code change. `<Mark>` inlines `symbol.svg` and recolours it for the theme from
`src/data/projects.ts`; keep the hues there in step with the export.

`public/brand/bloque/` and `public/favicon.svg` are this site's own icon: a "b" on the family's grid
closed by the violet stop.

The brand assets are **not** under the site's MIT licence; see `LICENSE`.

## Deploy: public only

`.github/workflows/pages.yml` builds on every pull request and push. The `deploy` job runs only on
`main`, only in `bloque-app/bloque-app.github.io`, and only when
`github.event.repository.visibility == 'public'` (the same gate as aledgent's `docs.yml`). On the
Free plan Pages cannot publish from a private repository, so while this one is private the job is
skipped rather than failing, and nothing can be published by accident.

To go live: make the repository public, set **Settings › Pages › Source** to **GitHub Actions**, and
push to `main` (or run the workflow by hand).

## Licence

The site's code is MIT (`LICENSE`). The names and marks of Bloque and its products, including every
file under `public/brand/`, are excluded: they belong to Pagos Cube LLC.
