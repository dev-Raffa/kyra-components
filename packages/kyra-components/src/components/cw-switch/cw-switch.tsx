import { Component, Host, h, Element, Prop, State } from '@stencil/core';

@Component({
  tag: 'cw-switch',
  styleUrl: 'cw-switch.css',
  shadow: true,
})
export class CwSwitch {
  @Element() el!: HTMLElement;
  @Prop() bgColorSelected: string;
  @Prop() bgColorUnselected: string;
  @Prop() ballColorSelected: string;
  @Prop() ballColorUnselected: string;
  @Prop() borderColor: string;

  @State() switchOn: boolean = false;
  
  componentWillRender() {
    this.switchOn && this.ballColorSelected && (this.el.style.setProperty('--ball-color', this.ballColorSelected));
    this.switchOn && this.bgColorSelected && (this.el.style.setProperty('--bg-color', this.bgColorSelected));
    !this.switchOn && this.ballColorUnselected && (this.el.style.setProperty('--ball-color', this.ballColorUnselected));
    !this.switchOn && this.bgColorUnselected && (this.el.style.setProperty('--bg-color', this.bgColorUnselected));
    this.borderColor && (this.el.style.setProperty('--border-color', this.borderColor));
  }
  
  private onClickHandle() {
    const ball = this.el.shadowRoot.querySelector('.ball');  
    ball.classList.toggle('selected');
    this.switchOn = !this.switchOn;
  }

  render() {
    return (
      <Host onClick={this.onClickHandle.bind(this)}>
        <div class='ball'>
          {this.switchOn ?
              <slot name='img-on'></slot>
            :
              <slot name='img-off'></slot>
          }
        </div>
      </Host>
    );
  }

}