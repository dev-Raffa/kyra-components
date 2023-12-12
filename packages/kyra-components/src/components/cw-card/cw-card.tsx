import { Component, Element, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'cw-card',
  styleUrl: 'cw-card.css',
  shadow: true,
})
export class CwCard {
  @Element() el!: HTMLElement;
  @Prop() width!: string;
  @Prop() height!: string;
  @Prop() bgColor: string;
  @Prop() borderColor: string;
  @Prop() borderRadius: string;
  
  componentWillLoad(){
    this.width && this.el.style.setProperty('--width', this.width)
    this.height && this.el.style.setProperty('--height', this.height)
    this.bgColor && this.el.style.setProperty('--bg-color', this.bgColor)
    this.borderColor && this.el.style.setProperty('--border-color', this.borderColor)
    this.borderRadius && this.el.style.setProperty('--border-radius', this.borderRadius)
  }

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
