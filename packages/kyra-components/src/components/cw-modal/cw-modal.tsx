import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'cw-modal',
  styleUrl: 'cw-modal.css',
  shadow: true,
})
export class CwModal {
  @Element() el: HTMLElement;
  @Prop() width: string;
  @Prop() alignment: 'top'| 'center' | 'bottom' = 'center';
  @Prop() bgColor: string = 'white';
  
  

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
