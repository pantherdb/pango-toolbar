# Task: Add mobile responsive layout to pango-toolbar

**Status:** ACTIVE
**Branch:** main

## Goal

On viewports < 768px, the toolbar shows icon-only buttons for Download (dropdown), About, Help, and a GO-logo button that opens a dropdown with both partner logos. Desktop layout remains unchanged. Matches the React reference at `site-react/src/app/layout/Toolbar.tsx`.

## Context

- **Related files:** see Files to Modify below
- **Triggered by:** user request to match React toolbar dropdowns and mobile layout
- **Out of scope:** hamburger menu, loading bar, gene search

## Current State

- What works now: Desktop toolbar with title, subtitle, GitHub link, Download dropdown, About/Help links, partner logos. Below 768px, the entire actions section is hidden (`display: none`).
- What's broken/missing: No mobile layout — actions completely disappear on small viewports.

## Steps

### Phase 1: pango-dropdown enhancements

- [ ] Add `@Prop() align: 'left' | 'right' = 'left'` to `pango-dropdown.tsx`
- [ ] Apply `align-right` class conditionally in the dropdown render
- [ ] In `pango-dropdown.scss`: add `--pango-dropdown-trigger-padding` variable to `.dropdown-trigger`, add `.align-right` modifier to `.dropdown-content`

### Phase 2: Viewport detection in pango-toolbar

- [ ] Add `@State() isMobile: boolean = false` and `mediaQuery`/`mediaHandler` private fields
- [ ] Add `connectedCallback()` — set up `matchMedia('(max-width: 767px)')`, set initial value, listen for `change` events
- [ ] Add `disconnectedCallback()` — remove the listener

### Phase 3: Refactor render into helpers

- [ ] Extract `renderGitHubIcon()` from existing inline SVG
- [ ] Extract `renderDownloadLinks()` to share between mobile/desktop
- [ ] Move existing actions + logos into `renderDesktopActions()`
- [ ] Update `render()` to call these helpers — verify desktop layout is unchanged

### Phase 4: Mobile layout

- [ ] Add `renderDownloadIcon()`, `renderInfoIcon()`, `renderHelpIcon()` — inline SVGs matching FA icons
- [ ] Implement `renderMobileActions()`:
  - Download icon → `pango-dropdown` with icon trigger and shared download links
  - About icon → link to `pangoHome/about`
  - Help icon → link to `pangoHome/help`
  - Logos icon → `pango-dropdown align="right"` with GO logo trigger, dropdown shows both logos
- [ ] Update `render()`: `{this.isMobile ? this.renderMobileActions() : this.renderDesktopActions()}`

### Phase 5: SCSS updates

- [ ] Change `__actions` from `display: none` + media query → always `display: flex`
- [ ] Add styles: `__mobile-actions`, `__icon-button`, `__mobile-logo-icon`, `__logos-dropdown`, `__logos-dropdown-item`

### Phase 6: Verify

- [ ] `npm run build` succeeds
- [ ] `npm start` — desktop layout unchanged at >= 768px
- [ ] Mobile layout shows icon buttons at < 768px
- [ ] Download dropdown works at both sizes
- [ ] Logos dropdown works on mobile
- [ ] Click-outside closes dropdowns
- [ ] Resizing across 768px transitions smoothly

## Recovery Checkpoint

> **⚠ UPDATE THIS AFTER EVERY CHANGE**

- **Last completed action:** Plan created
- **Next immediate action:** Add `align` prop to `pango-dropdown.tsx`
- **Recent commands run:** none
- **Uncommitted changes:** none
- **Environment state:** clean working tree on main

## Failed Approaches

| What was tried | Why it failed | Date |
| -------------- | ------------- | ---- |
|                |               |      |

## Files to Modify

| File | Action | Status |
| ---- | ------ | ------ |
| `src/components/pango-dropdown/pango-dropdown.tsx` | Add `align` prop | pending |
| `src/components/pango-dropdown/pango-dropdown.scss` | Add trigger padding var, align-right modifier | pending |
| `src/components/pango-toolbar/pango-toolbar.tsx` | Add isMobile state, viewport detection, conditional render methods, SVG icons | pending |
| `src/components/pango-toolbar/pango-toolbar.scss` | Remove mobile hiding, add mobile action styles | pending |

## Blockers

- None currently

## Notes

- **Viewport detection:** `window.matchMedia` in `connectedCallback` (fires before first render, avoids FOUC; more efficient than ResizeObserver)
- **Icons:** Inline SVGs with `fill="currentColor"` (same pattern as existing GitHub icon; can't use react-icons in Shadow DOM)
- **Logos dropdown on mobile:** Reuse `pango-dropdown` component — no new component needed
- **Dropdown alignment:** New `align` prop on `pango-dropdown` prevents right-side viewport overflow
