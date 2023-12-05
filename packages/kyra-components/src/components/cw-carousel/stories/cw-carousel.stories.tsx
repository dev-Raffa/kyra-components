import type { Meta, StoryObj } from '@storybook/html';
import { cwCarouselArgs } from "../types/cw-carousel.args";

const Component: Meta<cwCarouselArgs> = {
  title: 'Carousel',
}

export default Component;

type Story = StoryObj<cwCarouselArgs>

export const Example: Story = {
  argTypes: {
    colors:{control:"color"},
    time: {control: { type: 'number', min:500, max:50000, step: 500 }},
  },
  args: {
    width: "100vw",
    height: "450px",
    autoplay: false,
    arrows: true,
    colors: "green",
    index: true,
    time: 5000,
  },
  render: (args) =>{
    return`
      <cw-carousel
        width=${args.width}
        height=${args.height}
        colors=${args.colors}
        arrows=${args.arrows}
        ${args.index && "index"}
        autoplay=${args.autoplay}
        time=${args.time}>
          <figure>
            <img src="/images/carousel-image-1.png" alt="item 1" />
          </figure>
          <figure>
            <img src="/images/carousel-image-2.png" alt="item 2" />
          </figure>
          <figure>
          <img src="/images/carousel-image-3.png" alt="item 3" />
          </figure>
      </cw-carousel>
     `
    },
}
