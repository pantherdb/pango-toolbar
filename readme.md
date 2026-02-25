# Pango Toolbar Component

A customizable toolbar web component built with StencilJS. This component provides a structured navigation bar with a title, subtitle, social links, and a dropdown menu.

## Features

- Customizable header title and subtitle
- Built-in social media and external links
- Dropdown menu for additional actions
- Shadow DOM encapsulation for style isolation
- Responsive design with flex-based layout

## Installation

### NPM

```bash
npm install @pantherdb/pango-toolbar
```

### CDN

```html
<script type="module" src="https://unpkg.com/@pantherdb/pango-toolbar@latest/dist/pango-toolbar/pango-toolbar.esm.js"></script>
```

## Usage

### Basic HTML

```html
<script type="module" src="https://unpkg.com/@pantherdb/pango-toolbar@latest/dist/pango-toolbar/pango-toolbar.esm.js"></script>

<pango-toolbar
  header-title="PAN-GO"
  header-sub-title="Human Functionome"
  pango-home="/"
  api-version="pango-2">
</pango-toolbar>
```

### React

```jsx
import { PangoToolbar } from '@pantherdb/pango-toolbar';

const App = () => {
  return (
    <PangoToolbar headerTitle="PAN-GO" headerSubTitle="Human Functionome" pangoHome="/" apiVersion="pango-2" />
  );
};
```

### Angular

```typescript
// app.module.ts
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {}
```

```typescript
// app.component.ts
import { Component } from '@angular/core';
import '@pantherdb/pango-toolbar';

@Component({
  selector: 'app-root',
  template: `<pango-toolbar headerTitle="PAN-GO" headerSubTitle="Human Functionome" pangoHome="/" apiVersion="pango-2"> </pango-toolbar>`
})
export class AppComponent {}
```

## Props

| Prop             | Type   | Default               | Description                                                                          |
| ---------------- | ------ | --------------------- | ------------------------------------------------------------------------------------ |
| `headerTitle`    | string | `"PAN-GO"`            | The main toolbar title.                                                              |
| `headerSubTitle` | string | `"Human Functionome"` | The subtitle below the main title.                                                   |
| `pangoHome`      | string | `"/"`                 | The homepage URL linked to the logo.                                                 |
| `apiVersion`     | string | `"pango-2"`           | PAN-GO API version (`"pango-1"` or `"pango-2"`). Controls download URLs and config.  |

---

# Pango Dropdown Component

A flexible dropdown web component that can be used inside `pango-toolbar` or independently.

## Features

- Customizable trigger slot
- Supports any HTML or Stencil components inside dropdown
- Click outside detection for auto-close behavior

## Usage

```html
<pango-dropdown>
  <span slot="trigger">Download</span>
  <div slot="content">
    <a href="https://functionome.org/download/export_annotations.zip">As CSV</a>
    <a href="https://functionome.org/download/export_annotations.json.gz">As JSON</a>
  </div>
</pango-dropdown>
```

## Styling

Both components support CSS variables for easy customization:

```css
:root {
  --pango-primary-color: #173672;
  --pango-accent-color: #ebc336;
  --pango-toolbar-height: 50px;
  --pango-toolbar-bg: var(--pango-primary-color);
  --pango-toolbar-color: var(--pango-accent-color);
}
```

Override these in your project to match your vibe

## Development

### Setup

```bash
git clone https://github.com/pantherdb/pango-toolbar.git
cd pango-toolbar
npm install
```

### Commands

| Command | Description |
| --- | --- |
| `npm start` | Dev server with hot reload at localhost |
| `npm run build` | Production build |
| `npm test` | Run all tests (spec + e2e) |
| `npm run test.watch` | Run tests in watch mode |
| `npm run generate` | Scaffold a new component |

### Running a single test file

```bash
npx stencil test --spec src/components/pango-dropdown/pango-dropdown.spec.ts
npx stencil test --e2e src/components/pango-dropdown/pango-dropdown.e2e.ts
```

## Contributing

### Branch workflow

1. Create a feature branch from `main`
2. Make your changes and write tests
3. Open a PR against `main`
4. CI runs build, tests, and commit lint automatically
5. Squash merge into `main` with a conventional commit message

### Commit messages

This project uses [Conventional Commits](https://www.conventionalcommits.org/) to automate versioning and changelog generation. All commits must follow this format:

```text
<type>(<optional scope>): <description>
```

| Type | Version bump | When to use |
| --- | --- | --- |
| `feat` | Minor (0.1.0 -> 0.2.0) | New feature or capability |
| `fix` | Patch (0.1.0 -> 0.1.1) | Bug fix |
| `perf` | Patch | Performance improvement |
| `docs` | No release | Documentation only |
| `style` | No release | Formatting, whitespace |
| `refactor` | No release | Code change that doesn't fix a bug or add a feature |
| `test` | No release | Adding or updating tests |
| `chore` | No release | Build process, tooling, dependencies |
| `ci` | No release | CI/CD changes |

**Examples:**

```bash
git commit -m "feat: add dark mode toggle to toolbar"
git commit -m "fix: dropdown not closing on outside click"
git commit -m "feat(dropdown): add maxHeight prop"
git commit -m "docs: update CSS variables table in README"
```

For breaking changes, add `BREAKING CHANGE:` in the commit body or `!` after the type:

```bash
git commit -m "feat!: rename headerTitle prop to title"
```

Commitlint runs on PRs to validate your messages. If it fails, amend your commit:

```bash
git commit --amend -m "feat: correct message here"
git push --force-with-lease
```

### Releases

Releases are **fully automated** via [semantic-release](https://github.com/semantic-release/semantic-release). When a PR is merged to `main`:

1. Semantic-release analyzes the commit messages since the last tag
2. Determines the version bump (major/minor/patch) or skips if no releasable commits
3. Updates `package.json` version and `CHANGELOG.md`
4. Publishes to npm
5. Creates a GitHub release with auto-generated notes
6. Tags the release (e.g., `v0.2.0`)
7. Commits the version bump back to `main` with `[skip ci]`

**You never need to manually bump versions, edit the changelog, or create tags.**

### What triggers a release?

| Commit type in `main` | Result |
| --- | --- |
| `feat:` | Minor version bump + release |
| `fix:`, `perf:` | Patch version bump + release |
| `docs:`, `chore:`, `ci:`, `test:`, `refactor:`, `style:` | No release |
| `feat!:` or `BREAKING CHANGE:` | Major version bump + release |

### Project structure

```text
src/
  components/
    pango-toolbar/       # Main toolbar component
    pango-dropdown/      # Generic dropdown component
  utils/
    environment.ts       # Centralized external URLs
    __mocks__/           # Jest mocks (image imports)
.github/
  workflows/
    ci.yml               # Build + test on PRs
    semantic-release.yml # Auto-release on push to main
    commitlint.yml       # Commit message validation on PRs
```

## Browser Support

- Chrome 67+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## License

MIT
