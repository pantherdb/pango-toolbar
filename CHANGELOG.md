# Changelog

## [Unreleased]

### environment.ts — Version-aware constants
- **Before:** Single flat `ENVIRONMENT` object with hardcoded URLs (no version awareness)
- **After:** `BASE_CONFIG` (shared URLs) + `VERSION_CONFIGS` (per-version URLs keyed by `pango-1`/`pango-2`). Exports `getConfig(version)`, `getCurrentConfig()`, and `ENVIRONMENT` (backward compat)
- Key names changed from camelCase to SCREAMING_CASE to match site-react (`downloadAllDataCSVUrl` → `DOWNLOAD_ALL_DATA_CSV_URL`)
- V1 download paths now include `/v1/` segment (e.g. `/download/v1/export_annotations.zip`)
- V2 ontology URL updated from stale `release.geneontology.org/2022-03-22` to `ftp.ebi.ac.uk/.../2025-10-06`
- Added version metadata fields: `APP_VERSION`, `GO_RELEASE`, `PANTHER_VERSION`

### pango-toolbar.tsx — API version prop
- New `apiVersion` prop (type `'pango-1' | 'pango-2'`, default `pango-2`)
- Download links now use `getConfig(this.apiVersion)` instead of hardcoded `ENVIRONMENT`
- Auto-detects `?apiVersion=` from URL when no `api-version` attribute is set

### pango-toolbar — Mobile responsive layout
- Toolbar actions now visible on all viewport sizes (previously hidden below 768px)
- Below 768px: icon-only buttons for Download, About, Help, and a logos dropdown
- Above 768px: unchanged desktop layout with text buttons and side-by-side logos

### pango-dropdown — New features
- `align` prop (`'left' | 'right'`) for dropdown positioning
- `--pango-dropdown-trigger-padding` CSS variable for customizable trigger padding
