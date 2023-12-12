import { newSpecPage } from '@stencil/core/testing';
import { CwSwitch } from '../cw-switch';

describe('cw-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [CwSwitch],
      html: `<cw-switch></cw-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <cw-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </cw-switch>
    `);
  });
});
