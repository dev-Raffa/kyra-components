import { Component, h, Prop, Element, Host } from "@stencil/core";

@Component({
  tag: "cw-draggable",
  styleUrl: "cw-draggable.css",
  scoped: true,
})
export class CwDraggable {
  @Element() el: HTMLElement;
  @Prop() itemTitle: string;
  @Prop() width: string;
  @Prop() height: string;
  @Prop() bgColor: string;
  @Prop() gap: string;
  @Prop() itemsDirection: string;
  @Prop() border: string;
  @Prop() transition: string;

  componentWillLoad() {
    this.width && this.el.style.setProperty("--width", this.width);
    this.height && this.el.style.setProperty("--height", this.height);
    this.bgColor && this.el.style.setProperty("--bg-color", this.bgColor);
    this.gap && this.el.style.setProperty("--gap", this.gap);
    this.itemsDirection &&
      this.el.style.setProperty("--flex-direction", this.itemsDirection);
    this.border && this.el.style.setProperty("--border", this.border);
    this.transition &&
      this.el.style.setProperty("--transition", this.transition);
  }

  render() {
    return (
      <Host>
        <header>
          <h3>{this.itemTitle}</h3>
        </header>
        <cw-draggable-board>
          <slot></slot>
        </cw-draggable-board>
      </Host>
    );
  }
}
