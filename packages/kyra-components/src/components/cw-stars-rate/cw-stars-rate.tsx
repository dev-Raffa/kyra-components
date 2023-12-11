import { Component, Host, h, Element, Prop } from '@stencil/core';
import { StarIcon } from './icons/star';

@Component({
  tag: 'cw-stars-rate',
  styleUrl: 'cw-stars-rate.css',
})
export class CwStarsRate {
  @Element() el!: HTMLElement;
  @Prop() bgColor: string;
  @Prop() maxValue: number;
  @Prop() defaultValue: number = 0;
  @Prop() starSelectedColor: string;
  @Prop() starUnselectedColor: string;
  @Prop() size: string;

  private stars

  componentWillLoad() {
    this.generateStars(this.maxValue);
  
    this.bgColor && this.el.style.setProperty('--bg-color', this.bgColor);
    this.starSelectedColor 
      && this.el.style.setProperty('--star-selected-color', this.starSelectedColor);
    this.starUnselectedColor && 
      this.el.style.setProperty('--star-unselected-color',  this.starUnselectedColor);
    this.size && this.el.style.setProperty('--size', this.size);  
  }
  
  componentDidLoad(){
    this.stars = this.el.querySelectorAll('.star');
  }

  private changeValue (value: number){
    const maxValue = this.maxValue;

    for(let i = 0; i<value; i++)
      this.stars[i].classList.add('selected')

    for(let i = maxValue-1; i>=value; i--)
      this.stars[i].classList.remove('selected')
  }

  private onClickHandle(value:number){
    this.changeValueBind(value);
    this.defaultValue = value;
  }
  
  private onMouseOverHandle(value:number){
    this.changeValueBind(value);
  }

  private changeValueBind: Function = this.changeValue.bind(this);

  private mouseOutHandle(){
    this.changeValue(this.defaultValue)
  }

  private generateStars(value: number) {
    for (let i = 1; i <= value; i++) {
      
      const star = document.createElement('figure');
      star.classList.add('star')
      this.defaultValue >= i && star.classList.add('selected')
      star.setAttribute('value', i.toString())
      star.onclick = ()=> this.onClickHandle(i);
      star.onmouseover = ()=> this.onMouseOverHandle(i);
      star.innerHTML = StarIcon
      this.el.appendChild(star);
    }
  }

  render() {
    return (
      <Host onMouseOut= {this.mouseOutHandle.bind(this)}>
      </Host>
    );
  }
}