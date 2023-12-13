import { newSpecPage } from '@stencil/core/testing';
import { CwToggleButton } from '../cw-toggle-button';

describe('cw-toggle-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CwToggleButton],
      html: `<cw-toggle-button></cw-toggle-button>`,
    });
    expect(page.root).toEqualHtml(`
      <cw-toggle-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cw-toggle-button>
    `);
  });
});
