import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieHallComponent } from './movie-hall/movie-hall.component';
import { MoviesComponent } from './movies/movies.component';
import { TicketBookComponent } from './ticket-book/ticket-book.component';


const routes: Routes = [
  {
    path: '',
    component: MoviesComponent
  },
  {
    path: 'moviehall',
    component: AppComponent
  },
  {
    path: 'moviehall/:id',
    component: MovieHallComponent
  },
  {
    path: 'ticketbook/:movieId/:hallId/:screenId/:timeId',
    component: TicketBookComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
