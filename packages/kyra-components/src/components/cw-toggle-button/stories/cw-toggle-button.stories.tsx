import { Meta, StoryObj } from "@storybook/html"
import { cwToggleButtonArgs } from "../types/cw-toggle-button.args"

const Component:Meta<cwToggleButtonArgs> = {
    title:'Toggle button'
}

export default Component

const Template:StoryObj<cwToggleButtonArgs> = {
    argTypes:{
        width: {control: 'text'},
        height: {control: 'text'},
        selectedBgColor: {control: 'color'},
        selectedColor: {control: 'color'},
        unselectedBgColor: {control: 'color'},
        unselectedColor: {control: 'color'},
    },
    args: {
        width: 'fit-content',
        height: 'fit-content'
    }
}

export const Variants: StoryObj = {
    ...Template,
    render:(args) => {
        return` 
            <cw-toggle-button
                ${args.width && `width= ${args.width}`}
                ${args.height && `height= ${args.height}`}
                ${args.selectedBgColor && `selected-bg-color= ${args.selectedBgColor}`}
                ${args.selectedColor && `selected-color= ${args.selectedColor}`}
                ${args.unselectedBgColor && `unselected-bg-color= ${args.unselectedBgColor}`}
                ${args.unselectedColor && `unselected-color= ${args.unselectedColor}`}
            >
                Toggle
            </cw-toggle-button>
            <cw-toggle-button
                variant="outline"
                ${args.width && `width= ${args.width}`}
                ${args.height && `height= ${args.height}`}
                ${args.selectedBgColor && `selected-bg-color= ${args.selectedBgColor}`}
                ${args.selectedColor && `selected-color= ${args.selectedColor}`}
                ${args.unselectedBgColor && `unselected-bg-color= ${args.unselectedBgColor}`}
                ${args.unselectedColor && `unselected-color= ${args.unselectedColor}`}
            >
                Toggle
            </cw-toggle-button>
            <cw-toggle-button
                variant="icon"
                ${args.width && `width= ${args.width}`}
                ${args.height && `height= ${args.height}`}
                ${args.selectedBgColor && `selected-bg-color= ${args.selectedBgColor}`}
                ${args.selectedColor && `selected-color= ${args.selectedColor}`}
                ${args.unselectedBgColor && `unselected-bg-color= ${args.unselectedBgColor}`}
                ${args.unselectedColor && `unselected-color= ${args.unselectedColor}`}
            >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M12.2217 15.366L12.2223 15.3655C12.4612 15.1774 12.7051 14.9895 12.9511 14.8C13.9983 13.9932 15.0834 13.1574 15.9784 12.1496C17.0665 10.9245 17.8334 9.48479 17.8334 7.61501C17.8334 5.7758 16.794 4.22695 15.3651 3.57381C13.9677 2.93509 12.1073 3.11633 10.3603 4.93171L9.99998 5.30611L9.63971 4.93168C7.89263 3.11587 6.03224 2.93448 4.63494 3.5731C3.20609 4.22613 2.16669 5.77496 2.16669 7.61417C2.16669 9.48435 2.93374 10.924 4.02199 12.1493C4.91549 13.1554 5.99819 13.9901 7.04353 14.7961C7.29145 14.9872 7.53726 15.1768 7.77796 15.3666M12.2217 15.366L7.77796 15.3666M12.2217 15.366C11.7849 15.7111 11.3872 16.0201 11.0017 16.2454C10.616 16.4708 10.2898 16.5833 10 16.5833C9.71033 16.5833 9.38418 16.4707 8.99836 16.2452M12.2217 15.366L8.99836 16.2452M7.77796 15.3666C8.21507 15.711 8.61273 16.0198 8.99836 16.2452M7.77796 15.3666L8.99836 16.2452" stroke="red"/> </svg>
            </cw-toggle-button>

        `
    }
}

export const Default:StoryObj = {
    ...Template,
    render: (args) => {
        return `
            <cw-toggle-button
                ${args.width && `width= ${args.width}`}
                ${args.height && `height= ${args.height}`}
                ${args.selectedBgColor && `selected-bg-color= ${args.selectedBgColor}`}
                ${args.selectedColor && `selected-color= ${args.selectedColor}`}
                ${args.unselectedBgColor && `unselected-bg-color= ${args.unselectedBgColor}`}
                ${args.unselectedColor && `unselected-color= ${args.unselectedColor}`}
            >
                Toggle
            </cw-toggle-button>
        `
    }
}

export const Outline: StoryObj = {
    ...Template,
    render: (args) => {
        return `
            <cw-toggle-button
                variant="outline"
                ${args.width && `width= ${args.width}`}
                ${args.height && `height= ${args.height}`}
                ${args.selectedBgColor && `selected-bg-color= ${args.selectedBgColor}`}
                ${args.selectedColor && `selected-color= ${args.selectedColor}`}
                ${args.unselectedBgColor && `unselected-bg-color= ${args.unselectedBgColor}`}
                ${args.unselectedColor && `unselected-color= ${args.unselectedColor}`}
            >
                Toggle
            </cw-toggle-button>
        `
    }
}

export const Icon: StoryObj = {
    ...Template,
    render: (args) => {
        return `
            <cw-toggle-button
                variant="icon"
                ${args.width && `width= ${args.width}`}
                ${args.height && `height= ${args.height}`}
                ${args.selectedBgColor && `selected-bg-color= ${args.selectedBgColor}`}
                ${args.selectedColor && `selected-color= ${args.selectedColor}`}
                ${args.unselectedBgColor && `unselected-bg-color= ${args.unselectedBgColor}`}
                ${args.unselectedColor && `unselected-color= ${args.unselectedColor}`}
            >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"> <path d="M12.2217 15.366L12.2223 15.3655C12.4612 15.1774 12.7051 14.9895 12.9511 14.8C13.9983 13.9932 15.0834 13.1574 15.9784 12.1496C17.0665 10.9245 17.8334 9.48479 17.8334 7.61501C17.8334 5.7758 16.794 4.22695 15.3651 3.57381C13.9677 2.93509 12.1073 3.11633 10.3603 4.93171L9.99998 5.30611L9.63971 4.93168C7.89263 3.11587 6.03224 2.93448 4.63494 3.5731C3.20609 4.22613 2.16669 5.77496 2.16669 7.61417C2.16669 9.48435 2.93374 10.924 4.02199 12.1493C4.91549 13.1554 5.99819 13.9901 7.04353 14.7961C7.29145 14.9872 7.53726 15.1768 7.77796 15.3666M12.2217 15.366L7.77796 15.3666M12.2217 15.366C11.7849 15.7111 11.3872 16.0201 11.0017 16.2454C10.616 16.4708 10.2898 16.5833 10 16.5833C9.71033 16.5833 9.38418 16.4707 8.99836 16.2452M12.2217 15.366L8.99836 16.2452M7.77796 15.3666C8.21507 15.711 8.61273 16.0198 8.99836 16.2452M7.77796 15.3666L8.99836 16.2452" stroke="red"/> </svg>
            </cw-toggle-button>
        `
    }
}