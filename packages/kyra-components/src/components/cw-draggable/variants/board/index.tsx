import { Component, Host, h, Prop, Element } from "@stencil/core";

@Component({
  tag: "cw-draggable-board",
  styleUrl: "../../cw-draggable.css",
  assetsDirs: ["../../assets"],
})
export class CwDraggableBoard {
  @Element() el: HTMLElement;
  @Prop() itemTitle: string;

  private dropArea!: HTMLElement;
  private trashArea!: HTMLElement;
  private items: HTMLCollection;

  componentDidLoad() {
    this.items = this.dropArea.children;

    for (let i = 0; i < this.items.length; i++) {
      this.items[i].setAttribute("draggable", "true");
      this.items[i].classList.add("item-draggable");
      this.items[i].addEventListener("dragstart", this.dragStartHandle);
      //this.items[i].addEventListener('drag', this.dragHandle)
      this.items[i].addEventListener("dragend", this.dragEndHandle);
    }

    this.dropArea.addEventListener("dragenter", this.dragEnterHandle);
    this.dropArea.addEventListener("dragover", (e) => this.dragOverHandle(e));
    //this.dropArea.addEventListener('dragleave', this.dragLeaveHandle)
    //this.dropArea.addEventListener('drop', this.dropHandle)

    //this.trashArea.addEventListener("dragenter", this.dragEnterOnTrashHandle);
    this.trashArea.addEventListener("dragover", this.dragOverOnTrashHandle);
    this.trashArea.addEventListener("dragleave", (e) =>
      this.dragLeaveOnTrashHandle(e),
    );
    //this.trashArea.addEventListener('drop', this.dropOnTrashHandle)
  }

  private dragStartHandle() {
    //@ts-expect-error classList does not exist.
    const onDropArea: HTMLElement = this.parentNode;
    onDropArea.classList.add("highlight");

    const nextsDropArea = document.querySelectorAll(
      ".dropArea:not(.highlight)",
    );

    nextsDropArea &&
      nextsDropArea.forEach((dropArea) => {
        dropArea.classList.add("next");
      });

    const trashArea = onDropArea.parentElement.querySelector(".trashArea");
    trashArea.classList.add("visible");
    //@ts-expect-error classList does not exist.
    this.classList.add("dragging");
  }

  /*
  private drag(){

  }
  */

  private dragEndHandle() {
    const onDropArea = document.querySelector(".dropArea.highlight");
    const nextsDropArea = document.querySelectorAll(".dropArea.next");
    const trashArea = document.querySelector(".trashArea.visible");

    nextsDropArea &&
      nextsDropArea.forEach((dropArea) => {
        dropArea.classList.remove("next");
      });

    onDropArea.classList.remove("highlight");
    trashArea.classList.remove("visible");
    //@ts-expect-error classList does not exist.
    this.classList.remove("dragging");
  }

  private dragEnterHandle() {
    const item = document.querySelector(".dragging");

    //@ts-expect-error querySelector does not exist.
    const existItem = this.querySelector(".dragging");

    if (item == null || existItem) return;

    const originDragging = document.querySelector(".dropArea.highlight");

    if (originDragging) {
      originDragging.classList.remove("highlight");
      originDragging.classList.add("next");
    }

    //@ts-expect-error append does not exist.
    this.append(item);

    //@ts-expect-error classList does not exist.
    this.classList.remove("next");

    //@ts-expect-error classList does not exist.
    this.classList.add("highlight");
  }

  private dragOverHandle(e) {
    const itemDragging = document.querySelector(".dragging");

    const items = e.target.querySelectorAll(".item-draggable:not(.dragging)");
    let applyAfter: Element;
    

    items.forEach((item) => {
      const box = item.getBoundingClientRect();
      const boxCenter = box.top + box.height /2;
      
      if (e.clientY >= boxCenter) applyAfter = item;
      
    });

    applyAfter && applyAfter.insertAdjacentElement("afterend", itemDragging);
  }
  /*
  private dragLeaveHandle(){

  }
  */

  /*
  private dropHandle(){

  }
  */

  private dragOverOnTrashHandle() {
    const itemDragging = document.querySelector(".dragging");
    if (itemDragging.getAttribute("isInTrash")) return;

    itemDragging.setAttribute("isInTrash", "true");

    const cloneItemDragging = itemDragging.cloneNode(true);

    const trashArea = document.querySelector(".trashArea.visible");

    trashArea.querySelector(".closed").classList.remove("visible");
    trashArea.querySelector(".opened").classList.add("visible");
    trashArea.append(cloneItemDragging);
  }

  private dragLeaveOnTrashHandle(e) {
    const itemDragging = document.querySelector(".dragging");
    const trashArea = document.querySelector(".trashArea.visible");
    const box = trashArea.getBoundingClientRect();

    if (e.clientY >= box.top && e.clientY <= (box.bottom-20)) return;
    itemDragging.removeAttribute("isInTrash");

    const cloneItemDragging = document.querySelector("[isInTrash='true']");

    trashArea.querySelector(".closed").classList.add("visible");
    trashArea.querySelector(".opened").classList.remove("visible");
    cloneItemDragging && trashArea.removeChild(cloneItemDragging);
  }

  render() {
    return (
      <Host class="board">
        <section ref={(el) => (this.dropArea = el)} class="dropArea">
          <slot></slot>
        </section>
        <footer ref={(el) => (this.trashArea = el)} class="trashArea">
          <img
            class="closed visible"
            src="/trash-closed.svg"
            alt="trash closed"
          />
          <img
            class="opened"
            src="/trash-opened.svg"
            alt="trash opened"
          />
        </footer>
      </Host>
    );
  }
}
