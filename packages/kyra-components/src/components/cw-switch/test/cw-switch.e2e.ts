import { newE2EPage } from '@stencil/core/testing';

describe('cw-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cw-switch></cw-switch>');

    const element = await page.find('cw-switch');
    expect(element).toHaveClass('hydrated');
  });
});
