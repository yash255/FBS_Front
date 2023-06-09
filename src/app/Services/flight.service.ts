import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flight } from 'src/app/Models/FlightModel';

@Injectable({
  providedIn: 'root'
})
export class FlightService {
  private baseUrl = 'https://localhost:7176/api/'; // Replace with your API endpoint

  constructor(private http: HttpClient) { }

  getFlights(): Observable<Flight[]> {
    const headers = this.getAuthorizationHeaders();

    return this.http.get<Flight[]>(`${this.baseUrl}Admin/flights`,{headers});
  }
























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
