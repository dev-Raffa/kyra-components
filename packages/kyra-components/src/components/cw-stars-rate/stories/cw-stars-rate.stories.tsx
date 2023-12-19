import { Meta, StoryObj } from "@storybook/html";
import { cwStarsRateArgs } from "../types/cw-stars-rates.args";

const Component:Meta<cwStarsRateArgs> = {
  title:'Stars Rate',
}

export default Component;

export const Example:StoryObj<cwStarsRateArgs> = {
  argTypes: {
    bgColor: { control: 'color' },
    maxValue: { control: 'number' },
    defaultValue: { control: 'number' },
    starSelectedColor: { control: 'color' },
    starUnselectedColor: { control: 'color' },
    size: { control: 'text' },
  },
  args: {
    maxValue: 5,
    defaultValue: 0,
    starSelectedColor: '#FFD700',
    starUnselectedColor: '#D3D3D3',
    size: '20px',
  },
  render: (args) => { 
    return `
      <cw-stars-rate
        ${args.bgColor && `bg-color=${args.bgColor}`}
        ${args.maxValue && `max-value=${args.maxValue}`}
        ${args.defaultValue && `default-value=${args.defaultValue}`}
        ${args.starSelectedColor && `star-selected-color=${args.starSelectedColor}`}
        ${args.starUnselectedColor && `star-unselected-color=${args.starUnselectedColor}`}
        ${args.size && `size=${args.size}`}
      > `
  }
}