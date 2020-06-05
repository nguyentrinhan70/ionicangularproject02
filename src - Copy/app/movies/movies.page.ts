import { Component, OnInit } from '@angular/core';
import { Movie } from '../models/movie';
import { fakeMovies } from '../fake-movies';
import { MovieService } from '../movie.service';

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
  //movies = fakeMovies;
  movies: Movie[];
  constructor(
    private movieService: MovieService
  ) { }

  getMoviesFromServices(): void{
    //this.movies = this.movieService.getMovies(
    this.movieService.getMovies().subscribe((updatedMovies)=>{
      this.movies = updatedMovies;
      console.log(`this.movies = ${JSON.stringify(this.movies)}`);
    });
  }
  ngOnInit() {
    this.getMoviesFromServices();
  }
  selectedMovie: Movie;
  onSelect(movie: Movie): void{
    this.selectedMovie = movie;
    console.log(`selectedMovie =${JSON.stringify(this.selectedMovie)}`);
   // alert(`selectedMovie =${JSON.stringify(this.selectedMovie)}`);

  }

}
