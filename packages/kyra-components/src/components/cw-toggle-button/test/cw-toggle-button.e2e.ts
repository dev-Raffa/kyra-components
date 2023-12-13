import { newE2EPage } from '@stencil/core/testing';

describe('cw-toggle-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cw-toggle-button></cw-toggle-button>');

    const element = await page.find('cw-toggle-button');
    expect(element).toHaveClass('hydrated');
  });
});
