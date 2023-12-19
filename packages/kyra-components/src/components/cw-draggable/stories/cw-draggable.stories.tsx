import {Meta, StoryObj} from '@storybook/html';
import { draggableArgs } from '../types/cw-draggable.args';

const cwDraggable: Meta<draggableArgs> = {
  title: 'Draggable'
}

export default cwDraggable;

const BoardTemplate: StoryObj<draggableArgs> = {
  argTypes: {
    bgColor: {control: 'color'},
  },
  render: (args) => {
    return `
      <cw-draggable 
        ${args.itemTitle && `item-title="${args.itemTitle}"`}
        ${args.width && `width="${args.width}"`}
        ${args.height && `height="${args.height}"`}
        ${args.bgColor && `bg-color="${args.bgColor}"`}
        ${args.itemsDirection && `items-direction="${args.itemsDirection}"`}
        ${args.gap && `gap="${args.gap}"`}
        ${args.border && `border="${args.border}"`}
        ${args.transition && `transition="${args.transition}"`}
      >
        <img style="width: 200px; height: 50px;" src="/images/carousel-image-1.png" alt="">
        <img style="width: 200px; height: 50px;" src="/images/carousel-image-2.png" alt="">
        <img style="width: 200px; height: 50px;" src="/images/carousel-image-3.png" alt="">
    `
  }
}

export const BoardSingle: StoryObj<draggableArgs> = {
  ...BoardTemplate,
  args: {
    itemTitle: "Board",
    width: "fit-content",
    height:'fit-content',
    bgColor:'#efefef',
    itemsDirection: 'column',
    gap:"12px",
    border: "1px solid #676946b5",
    transition: "all 0.5s ease"
  }
}

export const BoardGroup: StoryObj = {
  args:{
    title: 'Board Group',
  },
  render: (args) => {
    return`
      <div>
        <h2>${args.title}</h2>
        <section style="display: flex; gap:24px ;">
          <cw-draggable item-title="Board A">
            <img style="width: 200px; height: 50px;" src="/images/carousel-image-1.png" alt="" />
            <img style="width: 200px; height: 50px;" src="/images/carousel-image-2.png" alt="" />
            <img style="width: 200px; height: 50px;" src="/images/carousel-image-3.png" alt="" />
          </cw-draggable>
          <cw-draggable item-title="Board B">
            <img style="width: 200px; height: 50px;" src="/images/carousel-image-1.png" alt="" />
            <img style="width: 200px; height: 50px;" src="/images/carousel-image-2.png" alt="" />
            <img style="width: 200px; height: 50px;" src="/images/carousel-image-3.png" alt="" />
          </cw-draggable>
          <cw-draggable item-title="Board C">
            <img style="width: 200px; height: 50px;" src="/images/carousel-image-1.png" alt="" />
            <img style="width: 200px; height: 50px;" src="/images/carousel-image-2.png" alt="" />
            <img style="width: 200px; height: 50px;" src="/images/carousel-image-3.png" alt="" />
          </cw-draggable>
        </section>
        </section>
      </div>
    `
  }
}