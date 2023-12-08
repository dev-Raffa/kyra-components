import { Component, Host, h, Prop, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'cw-collapse',
  styleUrl: 'cw-collapse.css',
  shadow: true,
})
export class CwCollapse {
  @State() isCollapsed = false;

  @Prop() header: string;
  @Prop() margin: string = '10px';
  @Event() cwCollapseToggled: EventEmitter<boolean>;

  toggleCollapse() {
    this.isCollapsed = !this.isCollapsed;
    this.cwCollapseToggled.emit(this.isCollapsed);
  }

  render() {
    return (
      <Host>
        <div class={`collapse-header ${this.isCollapsed ? 'collapsed' : ''}`} onClick={() => this.toggleCollapse()}>
          {this.header}
        </div>
        <div class={`collapse-content ${this.isCollapsed ? 'collapsed' : ''}`} style={{ margin: this.margin }}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
