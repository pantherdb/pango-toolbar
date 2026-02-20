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
npm install pango-toolbar
```

### CDN

```html
<script type="module" src="https://unpkg.com/pango-toolbar@latest/dist/pango-toolbar/pango-toolbar.esm.js"></script>
```

## Usage

### Basic HTML

```html
<script type="module" src="https://unpkg.com/pango-toolbar@latest/dist/pango-toolbar/pango-toolbar.esm.js"></script>

<pango-toolbar
  header-title="PAN-GO"
  header-sub-title="Human Functionome"
  pango-home="/">
</pango-toolbar>
```

### React

```jsx
import { PangoToolbar } from 'pango-toolbar';

const App = () => {
  return (
    <PangoToolbar headerTitle="PAN-GO" headerSubTitle="Human Functionome" pangoHome="/" />
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
import 'pango-toolbar';

@Component({
  selector: 'app-root',
  template: `<pango-toolbar headerTitle="PAN-GO" headerSubTitle="Human Functionome" pangoHome="/"> </pango-toolbar>`
})
export class AppComponent {}
```

## Props

| Prop             | Type   | Default               | Description                          |
| ---------------- | ------ | --------------------- | ------------------------------------ |
| `headerTitle`    | string | `"PAN-GO"`            | The main toolbar title.              |
| `headerSubTitle` | string | `"Human Functionome"` | The subtitle below the main title.   |
| `pangoHome`      | string | `"/"`                 | The homepage URL linked to the logo. |

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

1. Clone the repository

```bash
git clone [repository-url]
```

2. Install dependencies

```bash
npm install
```

3. Start development server

```bash
npm start
```

4. Run tests

```bash
npm test
```

5. Build for production

```bash
npm run build
```

## Browser Support

- Chrome 67+
- Firefox 63+
- Safari 10.1+
- Edge 79+

## License

MIT

