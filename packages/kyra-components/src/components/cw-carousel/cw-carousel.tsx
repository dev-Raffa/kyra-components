import { Component, Element, Prop, h, Fragment } from "@stencil/core";
import { Arrow } from "./icons/arrow";

@Component({
  tag: "cw-carousel",
  styleUrl: "./cw-carousel.css",
})
export class Carousel {
  @Element() el: HTMLCwCarouselElement;
  /** if this value is true the elments will be changed automatically in the interval defined */
  @Prop() autoplay?: boolean;
  /** set the interval for altomatically changing the elements */
  @Prop() time?: number = 5000;
  /** if this value is true, a section with control indices of elements will be shown at the bottom of the carousel */
  @Prop() index?: boolean;
  /** if this value is true, a button prev element and a button next element will be shown in the sides of carousel */
  @Prop() arrows?: boolean;
  /** set the carousel width */
  @Prop() width: string;
  /** set the carousel height */
  @Prop() height: string;
  /** set the colors controls carousel */
  @Prop() colors: string;

  private groupItems: HTMLElement;
  private items: HTMLCollection;
  private indexes: HTMLCollection;
  private itemInView: number;
  private actualPosisiton: number;
  private resizeObserver: ResizeObserver;

  componentWillLoad() {
    this.el.style.setProperty("--colors", this.colors);
    this.el.style.setProperty("--width", this.width);
    this.el.style.setProperty("--height", this.height)
    this.itemInView = 0;
  }

  componentDidLoad() {
    this.actualPosisiton =
      parseInt(this.groupItems.style.left.replace(/[A-Z]/i, "")) | 0;
    this.items = this.groupItems.children;
    this.resizeObserver = new ResizeObserver(this.handleResize.bind(this));
    this.resizeObserver.observe(this.el);
    this.adjustItems();
    this.arrows && this.getArrows();
    this.autoplay && this.autoplayActive(this.time);
    this.index && this.getSectionIndex();
  }

  private handleResize() {
    this.adjustItems();
    this.actualPosisiton = (this.itemInView * this.el.clientWidth + this.itemInView * 24) * -1
    
    Object.assign(this.groupItems.style, {
      left: this.actualPosisiton + "px",
    });
    
    
  }

  private adjustItems() {
    for (let i = 0; i < this.items.length; i++) {
      const item = this.items[i];
      this.el.style.setProperty("--client-width", this.el.clientWidth + "px");
      item.classList.add("item");
    }
  }

  private getSectionIndex() {
    const indexSection = document.createElement("section");
    indexSection.setAttribute("class", "index-section");

    for (let i = 0; i < this.items.length; i++) {
      const index = document.createElement("button");
      index.setAttribute(
        "class",
        `index ${this.itemInView == i ? "active" : ""}`,
      );
      index.addEventListener("click", () => {
        this.selectItem(i);
      });

      indexSection.appendChild(index);
    }
    this.el.appendChild(indexSection);
    this.indexes = this.el.querySelector(".index-section").children
  }

  private getArrows() {
    
    if (this.items.length > 1) {
      const prevArrow = document.createElement("button");
      prevArrow.onclick = this.prevItem.bind(this);
      prevArrow.setAttribute(
        "class",
        `prevButton${this.itemInView > 0 ? " active" : ""}`,
      );
      prevArrow.innerHTML = Arrow;
      

      this.el.appendChild(prevArrow);

      const nextArrow = document.createElement("button");
      nextArrow.setAttribute(
        "class",
        `nextButton ${this.itemInView < this.items.length && "active"}`,
      );
      nextArrow.onclick = this.nextItem.bind(this);
      nextArrow.innerHTML = Arrow;
      this.el.appendChild(nextArrow);
    }
  }

  private nextItem() {
    if (this.itemInView < this.items.length - 2) {
      this.actualPosisiton = this.actualPosisiton - (this.el.clientWidth + 24);
      Object.assign(this.groupItems.style, {
        left: this.actualPosisiton + "px",
      });
      this.arrows &&
        this.el.querySelector(".prevButton").classList.add("active");
      this.index && this.indexes[this.itemInView].classList.remove("active");
      this.itemInView++;
      this.index && this.indexes[this.itemInView].classList.add("active");
    } else if (this.itemInView === this.items.length - 2) {
      this.actualPosisiton = this.el.clientWidth - this.groupItems.clientWidth;
      this.el.querySelector(".nextButton").classList.remove("active");
      Object.assign(this.groupItems.style, {
        left: this.actualPosisiton + "px",
      });
      this.index && this.indexes[this.itemInView].classList.remove("active");
      this.itemInView++;
      this.index && this.indexes[this.itemInView].classList.add("active");
    }
  }

  private prevItem() {
    if (this.itemInView - 1 > 0) {
      this.actualPosisiton = this.actualPosisiton + this.el.clientWidth + 24;
      Object.assign(this.groupItems.style, {
        left: this.actualPosisiton + "px",
      });
      this.el.querySelector(".nextButton").classList.add("active");
      this.index && this.indexes[this.itemInView].classList.remove("active");
      this.itemInView--;
      this.index && this.indexes[this.itemInView].classList.add("active");
    } else if (this.itemInView - 1 === 0) {
      this.actualPosisiton = 0;
      this.el.querySelector(".prevButton").classList.remove("active");
      Object.assign(this.groupItems.style, {
        left: this.actualPosisiton + "px",
      });
      this.index && this.indexes[this.itemInView].classList.add("active");
      this.index && this.indexes[this.itemInView].classList.remove("active");
      this.itemInView--;
      this.index && this.indexes[this.itemInView].classList.add("active");
    }
  }

  private selectItem(index: number) {
    if (index === this.itemInView) {
      return;
    }

    this.actualPosisiton = 0 - index * (this.el.clientWidth + 24);
    Object.assign(this.groupItems.style, { left: this.actualPosisiton + "px" });
    this.index && this.indexes[this.itemInView].classList.remove("active");
    this.index && this.indexes[index].classList.add("active");
    this.itemInView = index;
    if(this.arrows){
      
      index > 0 && this.el.querySelector(".prevButton").classList.add("active");
    index === 0 &&
      this.el.querySelector(".prevButton").classList.remove("active");
    index < this.items.length - 1 &&
      this.el.querySelector(".nextButton").classList.add("active");
    index === this.items.length - 1 &&
      this.el.querySelector(".nextButton").classList.remove("active");
    }
  }

  private autoplayActive(time: number) {
    setInterval(() => {
      if (this.itemInView < this.items.length - 1) {
        this.nextItem();
      } else {
        this.selectItem(0);
      }
    }, time);
  }

  render() {
    return (
      <>
        <section class="groupItems" ref={(el) => (this.groupItems = el)}>
          <slot></slot>
        </section>
      </>
    );
  }
}
