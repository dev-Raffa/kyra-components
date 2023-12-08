import { newSpecPage } from '@stencil/core/testing';
import { CwCollapse } from '../cw-collapse';

describe('cw-collapse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CwCollapse],
      html: `<cw-collapse></cw-collapse>`,
    });
    expect(page.root).toEqualHtml(`
      <cw-collapse>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cw-collapse>
    `);
  });
});
