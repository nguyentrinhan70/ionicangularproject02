import { Injectable } from '@angular/core';
import { fakeMovies } from './fake-movies';
import { Movie } from './models/movie';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  getMovies(): Observablee<Movie[]>{
    return of(fakeMovies);
  }
  constructor() { }
}
