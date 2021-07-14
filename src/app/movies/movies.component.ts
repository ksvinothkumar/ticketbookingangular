import { Component, OnInit } from '@angular/core';
import { TicketBookService } from 'src/services/ticketBook.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  title = 'ticketBooking';
  moviesList;

  constructor(private ticketService: TicketBookService) {

  }

  ngOnInit() {
    this.ticketService.getMovies().subscribe(res => {
      console.log(res);
      this.moviesList = res['moviesList'];
    })
  }

}
