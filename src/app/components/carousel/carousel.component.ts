import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
  @Input() carouselItems: CarouselItem[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}

export interface CarouselItem {
  title: string;
  imageUrl: string;
  description: string;
}
