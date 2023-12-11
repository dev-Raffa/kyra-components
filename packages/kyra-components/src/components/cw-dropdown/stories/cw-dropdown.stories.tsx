import { Meta, StoryObj } from "@storybook/html";
import { cwDropdownArgs } from "../types/cw-dropdown.args";

const Component: Meta<cwDropdownArgs> = {
  title: "Dropdown",
}

export default Component;

export const Example: StoryObj<cwDropdownArgs> = {
  argTypes: {
    itemTitle: { control: "text" },
    icon: { control: "text" },
    bgColor: { control: "color" },
    border: { control: "text" },
  },
  args:{
    itemTitle: "Dropdown",
  },
  render: (args) => {
    return `
      <cw-dropdown
        ${args.itemTitle && `item-title="${args.itemTitle}"`}
        ${args.icon && `icon="${args.icon}"`}
        ${args.bgColor && `bg-color="${args.bgColor}"`}
        ${args.border && `border="${args.border}"`}
      >
        <ul 
         style="padding: 0; margin: 0; display: flex; gap: 8px; flex-direction: column; font-size: 16px " >
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </cw-dropdown>
    `;
  },
};

export const Grouped: StoryObj = {
  args:{
    title: 'Grouped',
  },
  render: (args) => {
    return`
      <div>
        <h2>${args.title}</h2>
        <section style="display: flex; gap:24px ;">
          <cw-dropdown item-title="Dropdown A">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </cw-dropdown>
          <cw-dropdown item-title="Dropdown B">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </cw-dropdown>
          <cw-dropdown item-title="Dropdown C">
            <ul>
              <li>Item 1</li>
              <li>Item 2</li>
              <li>Item 3</li>
            </ul>
          </cw-dropdown>
        </section>
        </section>
      </div>`
  }
}