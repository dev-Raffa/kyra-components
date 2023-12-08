import { newSpecPage } from '@stencil/core/testing';
import { CwPopover } from '../cw-popover';

describe('cw-popover', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CwPopover],
      html: `<cw-popover></cw-popover>`,
    });
    expect(page.root).toEqualHtml(`
      <cw-popover>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cw-popover>
    `);
  });
});
