import { Injectable } from '@angular/core';

import MOVIES from 'src/app/movies.json';
import { Movies, Movie } from '../interfaces/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getMovies(): Movies {
    return MOVIES;
  }

  getMoviesById(movieId: String):Movie {
    const movies = this.getMovies();
   return movies.find((movie)=>{
      return movie.id ===movieId;
   });
  }

  constructor() {
   }
  
}
