import { Injectable } from '@angular/core';

import * as MOVIES from 'src/app/movies.json';
import { Movies } from '../interfaces/movie';
@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  getMovies(): Movies {
    return MOVIES;
  }

  constructor() { }
  
}
