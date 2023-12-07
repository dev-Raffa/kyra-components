import { Meta, StoryObj } from "@storybook/html";
import { CwModalArgs } from "../types/cw-modal.args";

const Component: Meta<CwModalArgs> = {
  title:'Modal',
}

export default Component;

export const Example: StoryObj<CwModalArgs> = {
  argTypes: {
    width: { control: "text" },
    alignment: { control: "select", options: ["top", "center", "bottom"] },
    bgColor: { control: "color" },
  },
  args: {
    width: "50vw",
    alignment: "center",
    bgColor: "white",
  },
  render: (args) => {
    return `
      <cw-modal
        width=${args.width}
        alignment=${args.alignment}
        bgColor=${args.bgColor}>
        <slot></slot>
      </cw-modal>
    `;
  },
};