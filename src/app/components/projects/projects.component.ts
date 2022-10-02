import { Component, OnInit } from '@angular/core';
import { CarouselItem } from '../carousel/carousel.component';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: CarouselItem[] = [
    { 
      title: 'Wordle',
      imageUrl: '../assets/wordle-app.png', 
      description: `A web application based on the popular game created by the New York Times.
                    Developed using Angular, .NET, and MSSQL. The five letter word bank is stored in the database
                    and is retreived via the web API.`
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
