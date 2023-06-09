import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/Services/flight.service';
import { Flight } from 'src/app/Models/FlightModel';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  flights: Flight[] = []; // Initialize the flights property

  constructor(private flightService: FlightService) { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.flightService.getFlights().subscribe(
      (flights) => {
        this.flights = flights;
      },
      (error: any) => {
        console.log('An error occurred while retrieving flights:', error);
      }
    );
  }
}
