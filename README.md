# World of Horror. — The 100% Unofficial Strategy Guide

By PeripheralMike / WholesomeHorrorGaming.

**Read the guide:** https://peripheralmike.github.io/world-of-horror-guide/

A static, interactive World of Horror PC endings and achievement reference, ready for GitHub Pages.

- 21 standard mysteries and 57 branching mystery outcomes.
- 96 in-game achievements with requirements, rewards, and grid coordinates.
- 21 run-ending encyclopedia entries.
- Timeline filters, spoiler controls, search, route dependencies, and shareable links.
- A mid-90s horror fan-blog layout, alphabetical mystery navigation, and one route per row.
- Browser-local completion checklist, saved automatically.
- Responsive layouts, keyboard controls, reduced-motion support, and source references.

**Coverage:** documented PC v1.0 / 1.01 content. Checked 30 October 2026. The announced v1.2 additions are not yet included. Research discrepancies are visible in the site and detailed in [RESEARCH.md](RESEARCH.md). This is a source-based reference, not an in-game-tested certification.

## Open locally

Open `index.html` directly for a quick look. No installation or build is required. For consistent browser storage and sharing behaviour, serve the folder:

```sh
npm run dev
```

Open http://127.0.0.1:4173/ . This uses Node 18+ and has no npm dependencies, so `npm install` is unnecessary.

Alternatively:

```sh
python -m http.server 4173 --bind 127.0.0.1
```

## Host on GitHub Pages

This repository publishes automatically through `.github/workflows/pages.yml` when changes are pushed to `main`. The workflow validates the reference data before deploying. Its Pages source is **GitHub Actions**.

For a new copy without the included workflow, branch publishing is also supported:

1. Create a GitHub repository, or use an existing repository intended for this site.
2. Put the contents of this folder at the repository root. `index.html` must be at the root. Include `.nojekyll`.
3. Commit and push the files to `main`.
4. In GitHub, open **Settings → Pages**.
5. Under **Build and deployment**, select **Deploy from a branch**, choose **main**, choose **/(root)**, and save.
6. Wait for GitHub's Pages deployment to finish. Open the URL shown in Settings → Pages.

For a project repository the address is normally `https://YOUR-USERNAME.github.io/YOUR-REPOSITORY/`. Asset paths are relative, so repository subfolders work. The site has no server code, API keys, external fonts, analytics, or build step.

You can also publish the folder through an existing GitHub Pages deployment workflow. The contents of this folder are the deployable artifact.

Official reference: https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site

## Use the guide

- Choose a case and click an ending node to see its route.
- Select a timeline to show outcomes available in that timeline.
- Change **Spoilers** to hide route instructions and ending titles. Achievement names remain visible, as they do in a checklist; requirements and rewards are hidden.
- `/` focuses search; Escape clears search and leaves the field.
- Completion buttons are toggles. Click a completed entry to undo it.
- Run endings, mystery endings, and achievements are separate records; completion does not automatically cascade.
- Device, browser profile, and site origin each have their own journal. Clearing browser data clears that checklist.

## Update the data

`data.json` is the editable source of truth. `data.js` is its browser-loadable copy so the site also works without fetch or a web server.

1. Edit `data.json` and preserve existing IDs so journals remain compatible.
2. Update the checked date, version boundary, sources, and research notes.
3. Run:

```sh
npm run sync-data
npm run check
```

The validator checks coverage counts, unique IDs, all references, achievement grid cells, required files, syntax, and the JSON/JS copy. If adding a new game version, intentionally update the baseline counts and coverage descriptions together. Do not silently repurpose IDs with disputed labels: preserve the ID or add a journal migration.

## Files

- `index.html`, `style.css`, `app.js`: the static site.
- `data.json`, `data.js`: sourced content.
- `assets/eye.svg`: original favicon.
- `tools/`: optional local preview, synchronization, and validation utilities.
- `AUDIT.md`: full second-pass checks and applied corrections.
- `RESEARCH.md`: sources, decisions, and unresolved verification.
- `LICENSE.md`: code and reference-data licensing.

## Verification

The original and revised layouts were checked in the Codex in-app browser at desktop and phone widths. The second content pass covers every mystery, achievement and run ending; see [AUDIT.md](AUDIT.md). Checks covered diagram selection, A/B filtering, prerequisite links, search, spoiler-safe search, completion persistence, achievement category/completion filters, and all archive sections. Structural validation is repeatable with `npm run check`.

The revision preserves all completion IDs and the existing storage key. Existing progress in this browser remains compatible.

See [LICENSE.md](LICENSE.md) for attribution and reuse terms. This is an unofficial fan project and is not affiliated with panstasz or Ysbryd Games.

The guide uses a mid-90s horror fan-blog layout with a pixel eye, tiled night-sky background, lime and purple accents, and beveled navigation, credited to PeripheralMike / WholesomeHorrorGaming. Import and export controls have been removed; checklist progress stays in the current browser.
