export interface Flight {
  flightNumber: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
  cabins: CabinDto[];
}

export interface FlightDto {
  id: number;
  flightNumber: string;
  departureAirport: string;
  arrivalAirport: string;
  departureTime: Date;
  arrivalTime: Date;
  price: number;
  cabinClasses: Cabin[];
}

export interface CabinDto {
  name: string;
  numberOfSeats: number;
}

export interface Cabin {
  name: string;
  numberOfSeats: number;
}
