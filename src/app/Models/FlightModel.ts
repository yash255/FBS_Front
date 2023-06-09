export class Flight {
    id: number;
    flightNumber: string;
    departureAirport: string;
    arrivalAirport: string;
    departureTime: Date;
    arrivalTime: Date;
    price: number;
    cabinClasses: CabinClass[];
  
    constructor(
      id: number,
      flightNumber: string,
      departureAirport: string,
      arrivalAirport: string,
      departureTime: Date,
      arrivalTime: Date,
      price: number,
      cabinClasses: CabinClass[]
    ) {
      this.id = id;
      this.flightNumber = flightNumber;
      this.departureAirport = departureAirport;
      this.arrivalAirport = arrivalAirport;
      this.departureTime = departureTime;
      this.arrivalTime = arrivalTime;
      this.price = price;
      this.cabinClasses = cabinClasses;
    }
  }
  
  export class CabinClass {
    name: string;
    noOfSeats: number;
  
    constructor(name: string, noOfSeats: number) {
      this.name = name;
      this.noOfSeats = noOfSeats;
    }
  }
  



// export interface Flight {
//   id: number;
//   flightNumber: string;
//   departureAirport: string;
//   arrivalAirport: string;
//   departureTime: Date;
//   arrivalTime: Date;
//   price: number;
//   cabinClasses: CabinClass[];
// }

// export interface CabinClass {
//   name: string;
//   noOfSeats: number;
// }
