import { newE2EPage } from '@stencil/core/testing';

describe('cw-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cw-card></cw-card>');

    const element = await page.find('cw-card');
    expect(element).toHaveClass('hydrated');
  });
});
