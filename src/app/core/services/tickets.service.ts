import { TicketModel } from './../model/ticket.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  private apiUrl = 'http://localhost:5000/ticketsData';
  constructor(private http: HttpClient) {}
  getData(): Observable<TicketModel[]> {
    return this.http.get<TicketModel[]>(this.apiUrl);
  }

  addItem(item: TicketModel): Observable<TicketModel> {
    return this.http.post<TicketModel>(this.apiUrl, item);
  }
  doneItem(item: TicketModel): Observable<TicketModel> {
    console.log('in PUT Request');
    return this.http.put<TicketModel>(this.apiUrl, item);
  }
}
