import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketBookService } from 'src/services/ticketBook.service';

@Component({
  selector: 'app-ticket-book',
  templateUrl: './ticket-book.component.html',
  styleUrls: ['./ticket-book.component.css']
})
export class TicketBookComponent implements OnInit {
  movieId;
  hallId;
  screenId;
  timeId;
  noOfTickets: string = ''
  movieHallList;
  // :movieId/:hallId/:screenId/:timeId
  constructor(private routes: ActivatedRoute, private router: Router, private ticketService: TicketBookService
  ) {
    routes.params.subscribe((params) => {
      this.movieId = params['movieId'];
      this.hallId = params['hallId'];
      this.screenId = params['screenId'];
      this.timeId = params['timeId'];
    });
  }

  ngOnInit(): void {
    this.getMovieHall();
  }

  getMovieHall() {
    this.ticketService.getMovieHallList(this.movieId).subscribe(res => {
      this.movieHallList = res;
    })
  }

  bookTicket(totalSeats, availableSeats) {
    if (availableSeats >= this.noOfTickets) {
      this.ticketService.bookMovieTicket({ movieId: this.movieId, movieHallId: this.hallId, screenId: this.screenId, showTimingId: this.timeId, userId: '10', noOfSeats: this.noOfTickets }).subscribe(res => {
        alert(this.noOfTickets + 'Ticket Bokked Successfully')
        this.noOfTickets = "";
        this.router.navigate(['/moviehall/' + this.movieId]);
      })
    } else {
      alert(`${availableSeats} seats only available`)
    }

  }
}
