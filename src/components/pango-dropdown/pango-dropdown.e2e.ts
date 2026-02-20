import { newE2EPage } from '@stencil/core/testing';

describe('pango-dropdown e2e', () => {
  it('renders on the page', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-dropdown></pango-dropdown>');
    const el = await page.find('pango-dropdown');
    expect(el).not.toBeNull();
  });

  it('is closed by default', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-dropdown><span slot="trigger">Click</span></pango-dropdown>');
    const content = await page.find('pango-dropdown >>> .dropdown-content');
    expect(content).not.toHaveClass('active');
  });

  it('opens on trigger click', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-dropdown><span slot="trigger">Click</span></pango-dropdown>');
    const trigger = await page.find('pango-dropdown >>> .dropdown-trigger');
    await trigger.click();
    await page.waitForChanges();

    const content = await page.find('pango-dropdown >>> .dropdown-content');
    expect(content).toHaveClass('active');
  });

  it('closes on second click', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-dropdown><span slot="trigger">Click</span></pango-dropdown>');
    const trigger = await page.find('pango-dropdown >>> .dropdown-trigger');

    await trigger.click();
    await page.waitForChanges();
    await trigger.click();
    await page.waitForChanges();

    const content = await page.find('pango-dropdown >>> .dropdown-content');
    expect(content).not.toHaveClass('active');
  });

  it('emits dropdownToggle event', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-dropdown><span slot="trigger">Click</span></pango-dropdown>');
    const toggleEvent = await page.spyOnEvent('dropdownToggle');

    const trigger = await page.find('pango-dropdown >>> .dropdown-trigger');
    await trigger.click();
    await page.waitForChanges();

    expect(toggleEvent).toHaveReceivedEvent();
    expect(toggleEvent).toHaveReceivedEventDetail(true);
  });

  it('applies align-right class', async () => {
    const page = await newE2EPage();
    await page.setContent('<pango-dropdown align="right"><span slot="trigger">Click</span></pango-dropdown>');
    const content = await page.find('pango-dropdown >>> .dropdown-content');
    expect(content).toHaveClass('align-right');
  });
});
