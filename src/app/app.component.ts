import { Component } from '@angular/core';
import { TicketBookService } from 'src/services/ticketBook.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ticketBooking';
  moviesList;

  constructor(private ticketService: TicketBookService,) {

  }

  ngOnInit() {

  }



}
