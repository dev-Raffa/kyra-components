import { Meta, StoryObj } from "@storybook/html";
import { cwSwitchArgs } from "../types/cw-switch.args";

const Component:Meta<cwSwitchArgs> = {
  title: 'Switch',
}

export default Component

export const Example: StoryObj<cwSwitchArgs> = {
  argTypes: {
    ballColorSelected: {control: 'color'},
    ballColorUnselected: {control: 'color'},
    bgColorSelected: {control: 'color'},
    bgColorUnselected: {control: 'color'},
    borderColor: {control: 'color'},
  },
  args: {
    
  },
  render: (args) => {
    return `
    <cw-switch 
      ${args.ballColorSelected && `ball-color-selected=${args.ballColorSelected}`}
      ${args.bgColorSelected && `bg-color-selected=${args.bgColorSelected}`}
      ${args.ballColorUnselected && `ball-color-unselected=${args.ballColorUnselected}`}
      ${args.bgColorUnselected && `bg-color-unselected=${args.bgColorUnselected}`}
      ${args.borderColor && `border-color=${args.borderColor}`}
    >
    <svg slot='img-on' width="1rem" height="1rem" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-sun"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
    <svg version="1.1" slot="img-off" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style="enable-background:new 0 0 32 32;" xml:space="preserve">
    <style type="text/css">
      .st0{fill:none;stroke:#000000;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}
      .st1{fill:none;stroke:#000000;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}
    </style>
    <path class="st0" d="M17,5c-0.27,0-0.54,0.02-0.8,0.04C19.05,6.55,21,9.55,21,13c0,4.97-4.03,9-9,9c-2.74,0-5.19-1.23-6.85-3.17
      C6.04,24.59,11,29,17,29c6.63,0,12-5.37,12-12S23.63,5,17,5z"></path>
    <g>
      <path class="st0" d="M11,9c-2.58,0.62-3.38,1.42-4,4c-0.62-2.58-1.42-3.38-4-4c2.58-0.62,3.38-1.42,4-4C7.62,7.58,8.42,8.38,11,9z"></path>
    </g>
    <line class="st0" x1="12" y1="14" x2="12" y2="16"></line>
    <line class="st0" x1="11" y1="15" x2="13" y2="15"></line>
    </svg>
    </cw-switch>`
  }
}