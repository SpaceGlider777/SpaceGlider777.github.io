import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, ElementRef, HostListener, Input, OnInit } from '@angular/core';
import { CarouselItem } from '../carousel/carousel.component';

const style1 = style({
  opacity: 1,
  transform: "translateX(0)"
})

const style2 = style({
  opacity: 0,
  transform: "translateX(-100%)"
})

@Component({
  selector: 'app-carousel-item',
  templateUrl: './carousel-item.component.html',
  styleUrls: ['./carousel-item.component.scss'],
  animations: [
    trigger('slideIn', [
      state('show', style1),
      state('hide', style2),
      transition('hide => show', animate('1000ms ease'))
    ])
  ]
})
export class CarouselItemComponent implements OnInit {
  @Input() item!: CarouselItem;

  state = 'hide';

  constructor(public el: ElementRef) { }

  ngOnInit(): void {
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    if (this.state == 'show') return;

    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.scrollY;

    if (scrollPosition >= componentPosition - 750) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }

}
