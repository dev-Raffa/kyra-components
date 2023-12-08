import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'cw-popover',
  styleUrl: 'cw-popover.css',
  shadow: true,
})
export class CwPopover {
  @State() isVisible = false;

  @Prop() title: string;
  @Prop() content: string;
  @Prop() margin: string = '10px'; // Adicionando uma propriedade de margem com um valor padrão

  @Event() cwPopoverShown: EventEmitter<void>;
  @Event() cwPopoverHidden: EventEmitter<void>;

  togglePopover() {
    this.isVisible = !this.isVisible;
    if (this.isVisible) {
      this.cwPopoverShown.emit();
    } else {
      this.cwPopoverHidden.emit();
    }
  }

  render() {
    return (
      <Host>
        <div onClick={() => this.togglePopover()}>
          <slot></slot>
        </div>
        {this.isVisible && (
          <div class="popover-content" style={{ margin: this.margin }}>
            {this.title && <div class="popover-title">{this.title}</div>}
            {this.content && <div class="popover-body">{this.content}</div>}
          </div>
        )}
      </Host>
    );
  }
}
