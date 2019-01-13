import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './components/app/app.component';
import { PageHomeComponent } from './components/page-home/page-home.component';
import { PageMovieProfileComponent } from './components/page-movie-profile/page-movie-profile.component';
import { MenuComponent } from './components/menu/menu.component';
import { MovieListComponent } from './components/movie-list/movie-list.component';
import { MovieListItemComponent } from './components/movie-list-item/movie-list-item.component';
import { MovieProfileComponent } from './components/movie-profile/movie-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    PageHomeComponent,
    PageMovieProfileComponent,
    MenuComponent,
    MovieListComponent,
    MovieListItemComponent,
    MovieProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
