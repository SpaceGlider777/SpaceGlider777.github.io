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
                    unsupervised nearest neighbor model. Trained using a dataset of over 
                    one million book ratings.`,
      technologies: ['Azure App Service', 'Angular', 'Flask', 'Jupyter Notebook', 'scikit-learn']
    },
    { 
      title: 'Wordle Clone',
      imageUrl: '../assets/wordle-app.png', 
      description: `A web application based on the popular game Wordle created by the New York Times.
                    A random word is chosen from a set of over 10,000 words.
                    You have six chances to guess the correct word.`,
      technologies: ['Angular', '.NET', 'SQL Server']
    },
    {
      title: 'YouTube Downloader',
      imageUrl: '../assets/youtube-downloader.png',
      description: `A web application that extracts video and audio data from sites like YouTube. The yt-dlp Python library was used
                    to extract data to different file formats and video/audio qualities.`,
      technologies: ['Angular', 'Flask']
    },
    {
      title: 'Client Scheduler',
      imageUrl: '../assets/client-scheduler.png',
      description: `A standalone Java application for scheduling appointments. Uses JDBC to connect to a MySQL database. Automatically checks 
                    for time conflicts and different timezones.`,
      technologies: ['Java', 'MySQL']
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
