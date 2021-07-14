import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketBookService } from 'src/services/ticketBook.service';
import { HttpClientModule } from '@angular/common/http';
import { MovieHallComponent } from './movie-hall/movie-hall.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { MoviesComponent } from './movies/movies.component';
import { TicketBookComponent } from './ticket-book/ticket-book.component';

@NgModule({
  declarations: [
    AppComponent,
    MovieHallComponent,
    MoviesComponent,
    TicketBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule
  ],
  providers: [TicketBookService],
  bootstrap: [AppComponent]
})
export class AppModule { }
