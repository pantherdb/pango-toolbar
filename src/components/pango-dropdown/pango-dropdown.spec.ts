import { newSpecPage } from '@stencil/core/testing';
import { PangoDropdown } from './pango-dropdown';

describe('pango-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [PangoDropdown],
      html: `<pango-dropdown></pango-dropdown>`,
    });
    expect(page.root).toBeTruthy();
    expect(page.root.shadowRoot).toBeTruthy();
  });

  it('renders with trigger slot content', async () => {
    const page = await newSpecPage({
      components: [PangoDropdown],
      html: `<pango-dropdown><span slot="trigger">Click Me</span></pango-dropdown>`,
    });
    const trigger = page.root.shadowRoot.querySelector('.dropdown-trigger');
    expect(trigger).toBeTruthy();
  });

  it('is closed by default', async () => {
    const page = await newSpecPage({
      components: [PangoDropdown],
      html: `<pango-dropdown></pango-dropdown>`,
    });
    const content = page.root.shadowRoot.querySelector('.dropdown-content');
    expect(content.classList.contains('active')).toBe(false);
  });

  it('opens on trigger click', async () => {
    const page = await newSpecPage({
      components: [PangoDropdown],
      html: `<pango-dropdown><span slot="trigger">Toggle</span></pango-dropdown>`,
    });
    const trigger = page.root.shadowRoot.querySelector('.dropdown-trigger') as HTMLAnchorElement;
    trigger.click();
    await page.waitForChanges();

    const content = page.root.shadowRoot.querySelector('.dropdown-content');
    expect(content.classList.contains('active')).toBe(true);
  });

  it('closes on second trigger click', async () => {
    const page = await newSpecPage({
      components: [PangoDropdown],
      html: `<pango-dropdown><span slot="trigger">Toggle</span></pango-dropdown>`,
    });
    const trigger = page.root.shadowRoot.querySelector('.dropdown-trigger') as HTMLAnchorElement;

    trigger.click();
    await page.waitForChanges();
    trigger.click();
    await page.waitForChanges();

    const content = page.root.shadowRoot.querySelector('.dropdown-content');
    expect(content.classList.contains('active')).toBe(false);
  });

  it('emits dropdownToggle event on open', async () => {
    const page = await newSpecPage({
      components: [PangoDropdown],
      html: `<pango-dropdown><span slot="trigger">Toggle</span></pango-dropdown>`,
    });
    const spy = jest.fn();
    page.root.addEventListener('dropdownToggle', spy);

    const trigger = page.root.shadowRoot.querySelector('.dropdown-trigger') as HTMLAnchorElement;
    trigger.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalledTimes(1);
    expect(spy.mock.calls[0][0].detail).toBe(true);
  });

  it('emits dropdownToggle event on close', async () => {
    const page = await newSpecPage({
      components: [PangoDropdown],
      html: `<pango-dropdown><span slot="trigger">Toggle</span></pango-dropdown>`,
    });
    const spy = jest.fn();
    page.root.addEventListener('dropdownToggle', spy);

    const trigger = page.root.shadowRoot.querySelector('.dropdown-trigger') as HTMLAnchorElement;
    trigger.click();
    await page.waitForChanges();
    trigger.click();
    await page.waitForChanges();

    expect(spy).toHaveBeenCalledTimes(2);
    expect(spy.mock.calls[1][0].detail).toBe(false);
  });

  it('defaults to left alignment', async () => {
    const page = await newSpecPage({
      components: [PangoDropdown],
      html: `<pango-dropdown></pango-dropdown>`,
    });
    const content = page.root.shadowRoot.querySelector('.dropdown-content');
    expect(content.classList.contains('align-right')).toBe(false);
  });

  it('applies align-right class when align="right"', async () => {
    const page = await newSpecPage({
      components: [PangoDropdown],
      html: `<pango-dropdown align="right"></pango-dropdown>`,
    });
    const content = page.root.shadowRoot.querySelector('.dropdown-content');
    expect(content.classList.contains('align-right')).toBe(true);
  });

  it('renders dropdown wrapper structure', async () => {
    const page = await newSpecPage({
      components: [PangoDropdown],
      html: `<pango-dropdown></pango-dropdown>`,
    });
    const dropdown = page.root.shadowRoot.querySelector('.dropdown');
    expect(dropdown).toBeTruthy();
    expect(dropdown.querySelector('.dropdown-trigger')).toBeTruthy();
    expect(dropdown.querySelector('.dropdown-content')).toBeTruthy();
  });
});
