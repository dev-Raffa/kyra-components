import { Meta, StoryObj } from "@storybook/html"
import { cwCardArgs } from "../types/cw-card.args"

const Component:Meta<cwCardArgs> = {
    title: 'Card'
}

export default Component

export const Example: StoryObj<cwCardArgs> ={
    argTypes: {
        width: {control: 'text'},
        height: {control: 'text'},
        bgColor: {control: 'color'},
        borderColor: {control: 'color'},
        borderRadius: {control: 'text'}
    },
    args: {
        width: "200px",
        height: "fit-content"
    },
    render: (args)=>{
        return`
            <cw-card
                ${args.width && `width= ${args.width}`}
                ${args.height && `height= ${args.height}`}
                ${args.bgColor && `bg-color= ${args.bgColor}`}
                ${args.borderColor && `border-color= ${args.borderColor}`}
                ${args.borderRadius && `border-radius= ${args.borderRadius}`}
            >
                <figure style="margin: 0; padding: 0;" >
                    <img style="width: 100%" src="/images/carousel-image-1.png" alt="card example">
                </figure>
                <p> electronic action-adventure game, released by the Sony Corporation in 2005... </p>
            </cw-card>
        `
    }
}