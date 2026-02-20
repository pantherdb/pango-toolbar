# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

pango-toolbar is a customizable toolbar web component for the PAN-GO (Human Functionome) project, built with **StencilJS**. It publishes as an npm package usable in plain HTML, React, Angular, and other frameworks.

## Commands

- **Dev server**: `npm start` (builds, watches, and serves at localhost)
- **Production build**: `npm run build`
- **Run all tests**: `npm test` (spec + e2e via Jest/Puppeteer)
- **Watch tests**: `npm run test.watch`
- **Run a single test file**: `npx stencil test --spec src/utils/utils.spec.ts`
- **Scaffold new component**: `npm run generate`

## Architecture

### StencilJS Web Components

Both components use **Shadow DOM** for style encapsulation and are styled with SCSS. Stencil uses a JSX syntax with its own `h()` function (not React).

- **`pango-toolbar`** (`src/components/pango-toolbar/`) — Main toolbar component. Accepts props `headerTitle`, `headerSubTitle`, and `pangoHome`. Renders logo, navigation links (About, Help), a download dropdown, GitHub link, and partner logos (GO, PANTHER).
- **`pango-dropdown`** (`src/components/pango-dropdown/`) — Generic dropdown using named slots (`trigger`, `content`). Emits `dropdownToggle` events. Handles click-outside-to-close via `composedPath()`.

### Key Files

- `src/utils/environment.ts` — Centralized external URLs (APIs, downloads, documentation). All URLs used by the toolbar are defined here.
- `src/components.d.ts` — Auto-generated type definitions (do not edit manually).
- `stencil.config.ts` — Build config: SASS plugin, image plugin, output targets (dist, custom-elements, www).

### Theming

The toolbar is themed via CSS custom properties. Key variables:
- `--pango-primary-color`, `--pango-accent-color` for colors
- `--pango-toolbar-height`, `--pango-toolbar-bg`, `--pango-toolbar-color` for toolbar appearance
- `--pango-header-font-size`, `--pango-button-font-size` for typography

### Build Outputs

Stencil produces multiple output formats in `dist/`: ESM, CJS, and custom elements. The `loader/` directory is also generated. Both `dist/` and `loader/` must be committed (CI verifies this).

## Code Style

- Prettier: single quotes, 2-space indent, trailing commas, 180 char line width, no parens on single arrow params
- LF line endings (configured in `.editorconfig`)

## Git Commits

- Do NOT include the `Co-Authored-By` line in commit messages.
- Do NOT include "Generated with Claude Code" in PR descriptions or commit messages.

## Task Plans

- Always create and maintain task plans using the [.plans/template.md](.plans/template.md) system.
- On context resume, check `.plans/` for ACTIVE plans before doing anything else.
