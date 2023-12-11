import { Component, h, Prop, Element, Fragment } from '@stencil/core';

@Component({
  tag: 'cw-dropdown',
  styleUrl: 'cw-dropdown.css',
  shadow: true
})
export class CwDropdown {
  @Element() el!: HTMLElement;
  @Prop() itemTitle: string;
  @Prop() icon: string;
  @Prop() bgColor: string;
  @Prop() border: string;

  private itemsSection: HTMLElement = this.el.querySelector('.items');
  private arrow: HTMLElement = this.el.querySelector('.arrow');

  componentWillLoad() {
    this.bgColor && this.el.style.setProperty('--bg-color', this.bgColor)
    this.border && this.el.style.setProperty('--border', this.border)
  }

  private onClickHandle() {
    this.itemsSection.classList.toggle('show');
    this.arrow.classList.toggle('rotate');
  }
  render() {
    return (
      <>
        <header onClick={this.onClickHandle.bind(this)}>
          {this.icon && `<img src=${this.icon} alt=""></img>`}
          <h3>{this.itemTitle}</h3>
          <img
            class="arrow"
            ref={(el) => this.arrow = el}
            src="/dropdown-arrow.svg"
            alt="arrow"
          ></img>

        </header>
        <section class="items" ref={(el) => this.itemsSection = el}>
          <slot></slot>
        </section>
      </>
    );
  }
}