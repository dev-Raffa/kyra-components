import { newE2EPage } from '@stencil/core/testing';

describe('cw-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cw-modal></cw-modal>');

    const element = await page.find('cw-modal');
    expect(element).toHaveClass('hydrated');
  });
});
