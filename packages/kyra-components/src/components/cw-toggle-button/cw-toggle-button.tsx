import { Component, Element, Host, Prop, State, h } from '@stencil/core';

@Component({
  tag: 'cw-toggle-button',
  styleUrl: 'cw-toggle-button.css',
})
export class CwToggleButton {
  @Element() el!: HTMLElement
  @Prop() variant: 'default' | 'outline' | 'icon' = 'default'
  @Prop() width!: string;
  @Prop() height!: string;
  @Prop() selectedBgColor: string;
  @Prop() unselectedBgColor: string;
  @Prop() selectedColor: string;
  @Prop() unselectedColor: string;
  @Prop() initialValue: boolean;

  @State() isSelected: boolean;

  componentWillLoad(){
    this.initialValue ? this.isSelected = this.initialValue : this.isSelected = false 
    this.width && this.el.style.setProperty('--width', this.width)
    this.height && this.el.style.setProperty('--height', this.height)
    if(this.isSelected) {
      this.selectedBgColor && this.el.style.setProperty('--bg-color', this.selectedBgColor)
      this.selectedColor && this.el.style.setProperty('--color', this.selectedColor)
    }else {
      this.unselectedBgColor && this.el.style.setProperty('--bg-color', this.unselectedBgColor)
      this.unselectedColor && this.el.style.setProperty('--color', this.unselectedColor)
    }
  }

  componentWillUpdate(){
    if(this.isSelected) {
      this.selectedBgColor && this.el.style.setProperty('--bg-color', this.selectedBgColor)
      this.selectedColor && this.el.style.setProperty('--color', this.selectedColor)
    }else {
      this.unselectedBgColor && this.el.style.setProperty('--bg-color', this.unselectedBgColor)
      this.unselectedColor && this.el.style.setProperty('--color', this.unselectedColor)
    }
  }

  private onClickHandled=()=>{
    this.isSelected = !this.isSelected
  }


  render() {
    return (
      <Host onClick={this.onClickHandled.bind(this)}>
        <slot></slot>
      </Host>
    );
  }

}
