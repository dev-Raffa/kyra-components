import { Component, Host, h, Element, Prop } from '@stencil/core';

@Component({
  tag: 'cw-modal',
  styleUrl: 'cw-modal.css',
  shadow: true,
  assetsDirs: ['assets'],
})
export class CwModal {
  @Element() el: HTMLElement;
  @Prop() show: boolean;
  @Prop() modalTitle: string;
  @Prop() width: string;
  @Prop() alignment: 'top' | 'center' | 'bottom';
  @Prop() bgColor: string;
  @Prop() borderColor: string;
  @Prop() fontColor: string;
  
  componentWillLoad() {
   this.width && this.el.style.setProperty('--width', this.width);
   this.bgColor && this.el.style.setProperty('--bg-color', this.bgColor);
   this.borderColor && this.el.style.setProperty('--border-color', this.borderColor);
   this.fontColor && this.el.style.setProperty('--font-color', this.fontColor);

  switch(this.alignment) {
      case 'top':{
        this.el.style.setProperty('--alignment', 'start');
        break;
      }
      case 'center':{
        this.el.style.setProperty('--alignment', 'center');
        break;
      }
      case 'bottom':{
        this.el.style.setProperty('--alignment', 'end');
        break;
      }
    }
  }

  private closeModal = () => {
    this.show = false;
  }
  render() {
    return this.show && (
      <Host>
        <article class="content">
          <header>
            {this.modalTitle && <h2>{this.modalTitle}</h2>}
            <img onClick={this.closeModal.bind(this)} class='close' src='/btn-close.svg' ></img>
          </header>
          <section>
            <slot></slot>
          </section>
        </article>
      </Host>
    );
  }

}
