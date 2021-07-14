import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root'
})
export class TicketBookService {

    constructor(private http: HttpClient) { }

    getMovies() {
        const url = environment.ticketBookurl + 'movies';
        return this.http.get(url);
    }

    getMovieHallList(movieId) {
        const url = environment.ticketBookurl + 'moviehall/movie/'+movieId;
        return this.http.get(url);
    }


    bookMovieTicket(bookingData) {
    //     "movieId":"60ed786eead2df195c319d95",
    // "movieHallId":"60ee81faf060fb1cf4f0e8b6",
    // "screenId":"60ee853606e8e54910e454bf",
    // "showTimingId":"60ee857006e8e54910e454c7",
    // "userId":"10",
    // "noOfSeats":12
        const url = environment.ticketBookurl + 'bookmovie';
        return this.http.post(url, bookingData);
    }

}