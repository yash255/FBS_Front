import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/Models/FlightModel';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseUrl = 'https://localhost:7176/api/'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    return this.http.get<Flight[]>(`${this.baseUrl}Admin/flights`);
  }
}
