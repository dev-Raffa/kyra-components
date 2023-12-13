import { newSpecPage } from '@stencil/core/testing';
import { CwCard } from '../cw-card';

describe('cw-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CwCard],
      html: `<cw-card></cw-card>`,
    });
    expect(page.root).toEqualHtml(`
      <cw-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cw-card>
    `);
  });
});
