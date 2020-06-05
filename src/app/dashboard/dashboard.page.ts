import { Component, OnInit } from '@angular/core';
import {Movie} from '../models/movie';
import { MovieService } from '../movie.service';
@Component({
  selector: 'app-dasboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  movies: Movie[] = [];
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.getMovies();
  }
  getMovies(): void{
     this.movieService.getMovies().subscribe(movies=> this.movies = movies.slice(1,5)); 
  }

}
