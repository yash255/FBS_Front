import { Component, OnInit } from '@angular/core';
import { FlightService } from 'src/app/Services/flight.service';
import { Flight } from 'src/app/Models/FlightModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  flights: Flight[] | undefined;

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

  registeradmin() {
    this.router.navigate(['/register-admin']);
  }

 
  updateflight(id: number) {
    this.router.navigate(['/update-flight'])

  }

  deleteFlight(id: number) {
    if (confirm("Are you sure you want to delete this flight?")) {
      this.flightService.deleteFlight(id).subscribe(
        () => {
          this.getFlights();
        },
        (error:any) => {
          console.log('An error occurred while deleting the flight:', error);
        }
      );
    }
  }
}
