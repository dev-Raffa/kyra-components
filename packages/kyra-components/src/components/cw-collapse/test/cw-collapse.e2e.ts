import { newE2EPage } from '@stencil/core/testing';

describe('cw-collapse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<cw-collapse></cw-collapse>');

    const element = await page.find('cw-collapse');
    expect(element).toHaveClass('hydrated');
  });
});
