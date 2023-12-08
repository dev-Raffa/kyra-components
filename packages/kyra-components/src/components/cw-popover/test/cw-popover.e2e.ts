import { newE2EPage } from '@stencil/core/testing';

describe('cw-popover', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cw-popover></cw-popover>');

    const element = await page.find('cw-popover');
    expect(element).toHaveClass('hydrated');
  });
});
