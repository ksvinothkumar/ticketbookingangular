import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TicketBookService } from 'src/services/ticketBook.service';

@Component({
  selector: 'app-movie-hall',
  templateUrl: './movie-hall.component.html',
  styleUrls: ['./movie-hall.component.css']
})
export class MovieHallComponent implements OnInit {
  movieId;
  movieHallList;
  noOfTickets: string = '';
  constructor(private routes: ActivatedRoute, private ticketService: TicketBookService
  ) {
    routes.params.subscribe((params) => {
      this.movieId = params['id'];
    });
  }

  ngOnInit(): void {
   this.getMovieHall();
  }

  getMovieHall(){
    this.ticketService.getMovieHallList(this.movieId).subscribe(res => {
      this.movieHallList = res;
    })
  }

  bookTicket(hallId, screenId, timeId, hallIndex, screenIndex, timeIndex) {
    this.ticketService.bookMovieTicket({ movieId: this.movieId, movieHallId: hallId, screenId: screenId, showTimingId: timeId, userId: '10', noOfSeats: this.noOfTickets }).subscribe(res => {
      this.noOfTickets = "";
      this.getMovieHall();
    })
  }

}
