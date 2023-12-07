import { Meta, StoryObj } from "@storybook/html";
import { CwModalArgs } from "../types/cw-modal.args";

const Component: Meta<CwModalArgs> = {
  title:'Modal',
}

export default Component;

export const Example: StoryObj<CwModalArgs> = {
  argTypes: {
    modalTitle: { control: 'text'},
    width: { control: "text" },
    alignment: { control: "select", options: ["top", "center", "bottom"] },
    bgColor: { control: "color" },
    borderColor: { control: "color" },
    fontColor:{control: "color" },
  },
  args: {
    show:true,
    modalTitle: "Example",
    width: "250px",
    alignment: "center",
    bgColor: "",
    borderColor: "",
    fontColor: "",
  },
  render: (args) => {
    return `
      <cw-modal
        show=${args.show}
        ${args.modalTitle && `modal-title=${args.modalTitle}`}
        ${args.width && `width=${args.width}`}
        ${args.alignment && `alignment=${args.alignment}`}
        ${args.bgColor && `bg-color=${args.bgColor}`}
        ${args.borderColor && `border-color=${args.borderColor}`}
        ${args.fontColor && `font-color=${args.fontColor}`}>
        <p> this is a modal example </p>
      </cw-modal>
    `;
  },
};