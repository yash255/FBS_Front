import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FlightDto,Flight } from 'src/app/Models/FlightModel';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseUrl = 'https://localhost:7176/api/'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getFlights(): Observable<FlightDto[]> {
    const headers = this.getAuthorizationHeaders();

    return this.http.get<FlightDto[]>(`${this.baseUrl}Admin/flights`,{headers});
  }

  // createFlight(flight: Flight): Observable<Flight> {
  //   const headers = this.getAuthorizationHeaders();
  //   return this.http.post<Flight>(`${this.baseUrl}Admin/flights`, flight);
  // }

  createFlight(flight: Flight): Observable<Flight> {
    const headers = this.getAuthorizationHeaders();
    return this.http.post<Flight>(`${this.baseUrl}Admin/flights`, flight, { headers });
  }

  // getFlightById(id: number): Observable<FlightDto> {
  //   const headers = this.getAuthorizationHeaders();
  //   return this.http.get<FlightDto>(`${this.baseUrl}Admin/flights/${id}`,{headers});
  // }

  // updateFlight(id: number, flight: FlightDto): Observable<void> {
  //  // const url = `${this.baseUrl}/${id}`;
  //   const headers = this.getAuthorizationHeaders();
  //   return this.http.put<void>(`${this.baseUrl}Admin/flights/${id}`, flight,{headers});
  // }
  























  getAuthorizationHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getToken()}`
    });
  }

  getToken(){
    return localStorage.getItem("token");
  }
  
}
