import { newSpecPage } from '@stencil/core/testing';
import { PangoToolbar } from './pango-toolbar';

describe('pango-toolbar', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar></pango-toolbar>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
  });

  it('displays default title and subtitle', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar></pango-toolbar>`,
    });
    const title = page.root.shadowRoot.querySelector('.pango-toolbar__logo-text');
    const subtitle = page.root.shadowRoot.querySelector('.pango-toolbar__header-text');
    expect(title.textContent).toBe('PAN-GO');
    expect(subtitle.textContent).toBe('Human Functionome');
  });

  it('renders custom title and subtitle', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar header-title="Custom Title" header-sub-title="Custom Sub"></pango-toolbar>`,
    });
    const title = page.root.shadowRoot.querySelector('.pango-toolbar__logo-text');
    const subtitle = page.root.shadowRoot.querySelector('.pango-toolbar__header-text');
    expect(title.textContent).toBe('Custom Title');
    expect(subtitle.textContent).toBe('Custom Sub');
  });

  it('uses pangoHome for logo links', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar pango-home="/app"></pango-toolbar>`,
    });
    const logoLinks = page.root.shadowRoot.querySelectorAll('.pango-toolbar__logo-link');
    logoLinks.forEach(link => {
      expect(link.getAttribute('href')).toBe('/app');
    });
  });

  it('uses pangoHome for about and help links', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar pango-home="/app"></pango-toolbar>`,
    });
    const aboutLink = page.root.shadowRoot.querySelector('a[href="/app/about"]');
    const helpLink = page.root.shadowRoot.querySelector('a[href="/app/help"]');
    expect(aboutLink).toBeTruthy();
    expect(helpLink).toBeTruthy();
  });

  it('renders GitHub link', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar></pango-toolbar>`,
    });
    const githubLink = page.root.shadowRoot.querySelector('a[href="https://github.com/pantherdb/pango"]');
    expect(githubLink).toBeTruthy();
    expect(githubLink.getAttribute('target')).toBe('_blank');
  });

  it('renders download links with V2 URLs by default', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar></pango-toolbar>`,
    });
    const csvLink = page.root.shadowRoot.querySelector(
      'a[href="https://functionome.geneontology.org/download/export_annotations.zip"]',
    );
    const jsonLink = page.root.shadowRoot.querySelector(
      'a[href="https://functionome.geneontology.org/download/export_annotations.json.gz"]',
    );
    expect(csvLink).toBeTruthy();
    expect(jsonLink).toBeTruthy();
  });

  it('renders download links with V1 URLs when api-version is pango-1', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar api-version="pango-1"></pango-toolbar>`,
    });
    const csvLink = page.root.shadowRoot.querySelector(
      'a[href="https://functionome.geneontology.org/download/v1/export_annotations.zip"]',
    );
    expect(csvLink).toBeTruthy();
  });

  it('renders partner logo links', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar></pango-toolbar>`,
    });
    const goLink = page.root.shadowRoot.querySelector('a[href="http://geneontology.org/"]');
    const pantherLink = page.root.shadowRoot.querySelector('a[href="http://pantherdb.org"]');
    expect(goLink).toBeTruthy();
    expect(pantherLink).toBeTruthy();
  });

  it('renders SVG icons', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar></pango-toolbar>`,
    });
    const svgs = page.root.shadowRoot.querySelectorAll('svg');
    expect(svgs.length).toBeGreaterThan(0);
  });

  it('defaults pangoHome to /', async () => {
    const page = await newSpecPage({
      components: [PangoToolbar],
      html: `<pango-toolbar></pango-toolbar>`,
    });
    const logoLinks = page.root.shadowRoot.querySelectorAll('.pango-toolbar__logo-link');
    logoLinks.forEach(link => {
      expect(link.getAttribute('href')).toBe('/');
    });
  });
});
