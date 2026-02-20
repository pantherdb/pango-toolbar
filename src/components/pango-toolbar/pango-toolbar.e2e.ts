import { newE2EPage } from '@stencil/core/testing';

describe('pango-toolbar e2e', () => {
  it('renders on the page', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-toolbar></pango-toolbar>');
    const el = await page.find('pango-toolbar');
    expect(el).not.toBeNull();
  });

  it('displays default title', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-toolbar></pango-toolbar>');
    const title = await page.find('pango-toolbar >>> .pango-toolbar__logo-text');
    expect(title.textContent).toBe('PAN-GO');
  });

  it('displays custom title and subtitle', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-toolbar header-title="Test App" header-sub-title="Test Sub"></pango-toolbar>');
    const title = await page.find('pango-toolbar >>> .pango-toolbar__logo-text');
    const subtitle = await page.find('pango-toolbar >>> .pango-toolbar__header-text');
    expect(title.textContent).toBe('Test App');
    expect(subtitle.textContent).toBe('Test Sub');
  });

  it('contains a GitHub link', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-toolbar></pango-toolbar>');
    const githubLink = await page.find('pango-toolbar >>> a[href="https://github.com/pantherdb/pango"]');
    expect(githubLink).not.toBeNull();
  });

  it('renders about and help links with default home', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-toolbar></pango-toolbar>');
    const aboutLink = await page.find('pango-toolbar >>> a[href="/about"]');
    const helpLink = await page.find('pango-toolbar >>> a[href="/help"]');
    expect(aboutLink).not.toBeNull();
    expect(helpLink).not.toBeNull();
  });

  it('renders about and help links with custom home', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-toolbar pango-home="/custom"></pango-toolbar>');
    const aboutLink = await page.find('pango-toolbar >>> a[href="/custom/about"]');
    const helpLink = await page.find('pango-toolbar >>> a[href="/custom/help"]');
    expect(aboutLink).not.toBeNull();
    expect(helpLink).not.toBeNull();
  });
});
