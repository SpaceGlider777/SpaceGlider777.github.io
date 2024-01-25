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
      title: 'Book Recommender System',
      imageUrl: '../assets/book-recommender-system.png',
      description: `A book recommendation system that recommends books based on a given book. Developed using sci-kit learn's 
                    unsupervised nearest neighbor model with an Angular frontend and Flask backend. Trained using a dataset of over 
                    one million book ratings.`
    },
    { 
      title: 'Wordle Clone',
      imageUrl: '../assets/wordle-app.png', 
      description: `A web application based on the popular game Wordle created by the New York Times.
                    Developed using Angular, .NET, and MSSQL. A random word is chosen from a set of over 10,000 words.
                    You have six chances to guess the correct word.`
    },
    {
      title: 'YouTube Downloader',
      imageUrl: '../assets/youtube-downloader.png',
      description: `A web application that extracts video and audio data from sites like YouTube. The yt-dlp Python library was used
                    to extract data to different file formats and video/audio qualities.`
    },
    {
      title: 'Client Scheduler',
      imageUrl: '../assets/client-scheduler.png',
      description: `A standalone Java application for scheduling appointments. Uses JDBC to connect to a MySQL database. Automatically checks 
                    for time conflicts and different timezones.`
    },
    // {
    //   title: '',
    //   imageUrl: '',
    //   description: ''
    // },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
