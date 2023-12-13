/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface CwCard {
        "bgColor": string;
        "borderColor": string;
        "borderRadius": string;
        "height": string;
        "width": string;
    }
    interface CwCarousel {
        /**
          * if this value is true, a button prev element and a button next element will be shown in the sides of carousel
         */
        "arrows"?: boolean;
        /**
          * if this value is true the elments will be changed automatically in the interval defined
         */
        "autoplay"?: boolean;
        /**
          * set the colors controls carousel
         */
        "colors": string;
        /**
          * set the carousel height
         */
        "height": string;
        /**
          * if this value is true, a section with control indices of elements will be shown at the bottom of the carousel
         */
        "index"?: boolean;
        /**
          * set the interval for altomatically changing the elements
         */
        "time"?: number;
        /**
          * set the carousel width
         */
        "width": string;
    }
    interface CwDraggable {
        "bgColor": string;
        "border": string;
        "gap": string;
        "height": string;
        "itemTitle": string;
        "itemsDirection": string;
        "transition": string;
        "width": string;
    }
    interface CwDraggableBoard {
        "itemTitle": string;
    }
    interface CwDropdown {
        "bgColor": string;
        "border": string;
        "icon": string;
        "itemTitle": string;
    }
    interface CwModal {
        "alignment": 'top' | 'center' | 'bottom';
        "bgColor": string;
        "borderColor": string;
        "fontColor": string;
        "modalTitle": string;
        "show": boolean;
        "width": string;
    }
    interface CwStarsRate {
        "bgColor": string;
        "defaultValue": number;
        "maxValue": number;
        "size": string;
        "starSelectedColor": string;
        "starUnselectedColor": string;
    }
    interface CwSwitch {
        "ballColorSelected": string;
        "ballColorUnselected": string;
        "bgColorSelected": string;
        "bgColorUnselected": string;
        "borderColor": string;
    }
    interface CwToggleButton {
        "height": string;
        "initialValue": boolean;
        "selectedBgColor": string;
        "selectedColor": string;
        "unselectedBgColor": string;
        "unselectedColor": string;
        "variant": 'default' | 'outline' | 'icon';
        "width": string;
    }
}
declare global {
    interface HTMLCwCardElement extends Components.CwCard, HTMLStencilElement {
    }
    var HTMLCwCardElement: {
        prototype: HTMLCwCardElement;
        new (): HTMLCwCardElement;
    };
    interface HTMLCwCarouselElement extends Components.CwCarousel, HTMLStencilElement {
    }
    var HTMLCwCarouselElement: {
        prototype: HTMLCwCarouselElement;
        new (): HTMLCwCarouselElement;
    };
    interface HTMLCwDraggableElement extends Components.CwDraggable, HTMLStencilElement {
    }
    var HTMLCwDraggableElement: {
        prototype: HTMLCwDraggableElement;
        new (): HTMLCwDraggableElement;
    };
    interface HTMLCwDraggableBoardElement extends Components.CwDraggableBoard, HTMLStencilElement {
    }
    var HTMLCwDraggableBoardElement: {
        prototype: HTMLCwDraggableBoardElement;
        new (): HTMLCwDraggableBoardElement;
    };
    interface HTMLCwDropdownElement extends Components.CwDropdown, HTMLStencilElement {
    }
    var HTMLCwDropdownElement: {
        prototype: HTMLCwDropdownElement;
        new (): HTMLCwDropdownElement;
    };
    interface HTMLCwModalElement extends Components.CwModal, HTMLStencilElement {
    }
    var HTMLCwModalElement: {
        prototype: HTMLCwModalElement;
        new (): HTMLCwModalElement;
    };
    interface HTMLCwStarsRateElement extends Components.CwStarsRate, HTMLStencilElement {
    }
    var HTMLCwStarsRateElement: {
        prototype: HTMLCwStarsRateElement;
        new (): HTMLCwStarsRateElement;
    };
    interface HTMLCwSwitchElement extends Components.CwSwitch, HTMLStencilElement {
    }
    var HTMLCwSwitchElement: {
        prototype: HTMLCwSwitchElement;
        new (): HTMLCwSwitchElement;
    };
    interface HTMLCwToggleButtonElement extends Components.CwToggleButton, HTMLStencilElement {
    }
    var HTMLCwToggleButtonElement: {
        prototype: HTMLCwToggleButtonElement;
        new (): HTMLCwToggleButtonElement;
    };
    interface HTMLElementTagNameMap {
        "cw-card": HTMLCwCardElement;
        "cw-carousel": HTMLCwCarouselElement;
        "cw-draggable": HTMLCwDraggableElement;
        "cw-draggable-board": HTMLCwDraggableBoardElement;
        "cw-dropdown": HTMLCwDropdownElement;
        "cw-modal": HTMLCwModalElement;
        "cw-stars-rate": HTMLCwStarsRateElement;
        "cw-switch": HTMLCwSwitchElement;
        "cw-toggle-button": HTMLCwToggleButtonElement;
    }
}
declare namespace LocalJSX {
    interface CwCard {
        "bgColor"?: string;
        "borderColor"?: string;
        "borderRadius"?: string;
        "height": string;
        "width": string;
    }
    interface CwCarousel {
        /**
          * if this value is true, a button prev element and a button next element will be shown in the sides of carousel
         */
        "arrows"?: boolean;
        /**
          * if this value is true the elments will be changed automatically in the interval defined
         */
        "autoplay"?: boolean;
        /**
          * set the colors controls carousel
         */
        "colors"?: string;
        /**
          * set the carousel height
         */
        "height"?: string;
        /**
          * if this value is true, a section with control indices of elements will be shown at the bottom of the carousel
         */
        "index"?: boolean;
        /**
          * set the interval for altomatically changing the elements
         */
        "time"?: number;
        /**
          * set the carousel width
         */
        "width"?: string;
    }
    interface CwDraggable {
        "bgColor"?: string;
        "border"?: string;
        "gap"?: string;
        "height"?: string;
        "itemTitle"?: string;
        "itemsDirection"?: string;
        "transition"?: string;
        "width"?: string;
    }
    interface CwDraggableBoard {
        "itemTitle"?: string;
    }
    interface CwDropdown {
        "bgColor"?: string;
        "border"?: string;
        "icon"?: string;
        "itemTitle"?: string;
    }
    interface CwModal {
        "alignment"?: 'top' | 'center' | 'bottom';
        "bgColor"?: string;
        "borderColor"?: string;
        "fontColor"?: string;
        "modalTitle"?: string;
        "show"?: boolean;
        "width"?: string;
    }
    interface CwStarsRate {
        "bgColor"?: string;
        "defaultValue"?: number;
        "maxValue"?: number;
        "size"?: string;
        "starSelectedColor"?: string;
        "starUnselectedColor"?: string;
    }
    interface CwSwitch {
        "ballColorSelected"?: string;
        "ballColorUnselected"?: string;
        "bgColorSelected"?: string;
        "bgColorUnselected"?: string;
        "borderColor"?: string;
    }
    interface CwToggleButton {
        "height": string;
        "initialValue"?: boolean;
        "selectedBgColor"?: string;
        "selectedColor"?: string;
        "unselectedBgColor"?: string;
        "unselectedColor"?: string;
        "variant"?: 'default' | 'outline' | 'icon';
        "width": string;
    }
    interface IntrinsicElements {
        "cw-card": CwCard;
        "cw-carousel": CwCarousel;
        "cw-draggable": CwDraggable;
        "cw-draggable-board": CwDraggableBoard;
        "cw-dropdown": CwDropdown;
        "cw-modal": CwModal;
        "cw-stars-rate": CwStarsRate;
        "cw-switch": CwSwitch;
        "cw-toggle-button": CwToggleButton;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "cw-card": LocalJSX.CwCard & JSXBase.HTMLAttributes<HTMLCwCardElement>;
            "cw-carousel": LocalJSX.CwCarousel & JSXBase.HTMLAttributes<HTMLCwCarouselElement>;
            "cw-draggable": LocalJSX.CwDraggable & JSXBase.HTMLAttributes<HTMLCwDraggableElement>;
            "cw-draggable-board": LocalJSX.CwDraggableBoard & JSXBase.HTMLAttributes<HTMLCwDraggableBoardElement>;
            "cw-dropdown": LocalJSX.CwDropdown & JSXBase.HTMLAttributes<HTMLCwDropdownElement>;
            "cw-modal": LocalJSX.CwModal & JSXBase.HTMLAttributes<HTMLCwModalElement>;
            "cw-stars-rate": LocalJSX.CwStarsRate & JSXBase.HTMLAttributes<HTMLCwStarsRateElement>;
            "cw-switch": LocalJSX.CwSwitch & JSXBase.HTMLAttributes<HTMLCwSwitchElement>;
            "cw-toggle-button": LocalJSX.CwToggleButton & JSXBase.HTMLAttributes<HTMLCwToggleButtonElement>;
        }
    }
}
