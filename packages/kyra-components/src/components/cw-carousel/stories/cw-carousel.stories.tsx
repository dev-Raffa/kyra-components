import { cwCarouselArgs } from "../types/cw-carousel.args";

export default {
  title: "carousel",
};

const Template = (args: cwCarouselArgs) => `
  <cw-carousel
    width=${args.width}
    height=${args.height}
    colors=${args.colors}
    arrows=${args.arrows}
    index=${args.index},
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
`;

export const Example: { args: cwCarouselArgs } = Template.bind({});

Example.args = {
  width: "100vw",
  height: "450px",
  autoplay: false,
  arrows: true,
  colors: "green",
  index: false,
  time: 5000,
};
