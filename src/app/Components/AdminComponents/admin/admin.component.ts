import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/Services/flight.service';
import { FlightDto } from 'src/app/Models/FlightModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  flights: FlightDto[] | undefined;

  constructor(private flightService: FlightService, private router: Router) { }

  ngOnInit() {
    this.getFlights();
  }

  getFlights() {
    this.flightService.getFlights().subscribe(
      (flights) => {
        this.flights = flights;
      },
      (error) => {
        console.log('An error occurred while retrieving flights:', error);
      }
    );
  }

  createFlight() {
    this.router.navigate(['/create-flight']);
  }

 
  updateflight(id: number) {
    this.router.navigate(['/update-flight'])

  }
}
