import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FlightService } from 'src/app/Services/flight.service';
import { FlightDto, CabinDto,Flight,Cabin} from 'src/app/Models/FlightModel';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormArray } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-update-flight',
  templateUrl: './update-flight.component.html',
  styleUrls: ['./update-flight.component.css']
})
export class UpdateFlightComponent implements OnInit {
  id?: number;
  flight: FlightDto = {} as FlightDto;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    if (this.id) {
      // Fetch flight details by ID
      this.http.get<FlightDto>(`/api/Admin/flights/${this.id}`).subscribe(data => {
        this.flight = data;
      });
    }
  }

  addCabin(cabinName: string, numberOfSeats: number): void {
    const cabin = { name: cabinName, numberOfSeats:numberOfSeats } as CabinDto;
    this.flight.cabinClasses.push(cabin);
  }

  updateCabin(cabinName: string, numberOfSeats: number): void {
    for (let i = 0; i < this.flight.cabinClasses.length; i++) {
      const cabin = this.flight.cabinClasses[i];
      if (cabin.name === cabinName) {
        cabin.numberOfSeats = numberOfSeats;
        break;
      }
    }
  }

  deleteCabin(cabinName: string): void {
    const index = this.flight.cabinClasses.findIndex(cabin => cabin.name === cabinName);
    if (index >= 0) {
      this.flight.cabinClasses.splice(index, 1);
    }
  }

  onSubmit(): void {
    // Add new flight
    if (!this.id) {
      this.http.post('/api/Admin/flights', this.flight).subscribe(() => {
        alert('Flight added successfully!');
        this.router.navigate(['/flights']);
      }, (error:any) => {
        console.error(error);
        alert('An error occurred while adding the flight.');
      });
    }
    // Update existing flight
    else {
      this.http.put(`/api/Admin/flights/${this.id}`, this.flight).subscribe(() => {
        alert('Flight updated successfully!');
        this.router.navigate(['/flights']);
      }, (error:any) => {
        console.error(error);
        alert('An error occurred while updating the flight.');
      });
    }
  }

  deleteFlight(): void {
    if (confirm('Are you sure you want to delete this flight?')) {
      this.http.delete(`/api/Admin/flights/${this.id}`).subscribe(() => {
        alert('Flight deleted successfully!');
        this.router.navigate(['/flights']);
      }, (error:any) => {
        console.error(error);
        alert('An error occurred while deleting the flight.');
      });
    }
  }
}
