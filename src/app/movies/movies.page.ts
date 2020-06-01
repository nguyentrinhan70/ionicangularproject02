import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  movie: Movie ={
    id : 1,
    name: "Star Wars",
    releaseYear: 1977
  }
  constructor() { }

  ngOnInit() {
  }

}
