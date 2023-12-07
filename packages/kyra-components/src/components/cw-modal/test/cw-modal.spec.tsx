import { newSpecPage } from '@stencil/core/testing';
import { CwModal } from '../cw-modal';

describe('cw-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CwModal],
      html: `<cw-modal></cw-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <cw-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cw-modal>
    `);
  });
});
