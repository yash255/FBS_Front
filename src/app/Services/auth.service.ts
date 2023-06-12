import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProfileModel, BookingDto } from 'src/app/Models/ProfileModel';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // signOut() {
  //   throw new Error('Method not implemented.');
  // }

  private baseUrl:string = "https://localhost:7176/api/"
  private searchUrl:string = "https://localhost:7176/"
  constructor(private http : HttpClient,  private router: Router) { }

  signup(userObj:any): Observable<any>{
    return this.http.post<any>(`${this.baseUrl}Authenticate/register`,userObj)
  }

  signupadmin(userObj:any): Observable<any>{
    const headers = this.getAuthorizationHeaders();
    return this.http.post<any>(`${this.baseUrl}Authenticate/register-admin`,userObj,{headers})
  }
  login(loginObj: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}Authenticate/login`, loginObj);
  }
  search(searchObj: any): Observable<any[]> {
    const headers = this.getAuthorizationHeaders();
    const params = { ...searchObj }; // You can modify this if needed
    return this.http.get<any[]>(`${this.searchUrl}Search`, { headers, params });
  }

  
  booking(flightId: number, bookObj: any): Observable<any> {
    const headers = this.getAuthorizationHeaders();
    return this.http.post<any>(`${this.baseUrl}Booking/${flightId}`, bookObj, { headers });
  }

  getUserWithBookings(): Observable<ProfileModel> {
    const headers = this.getAuthorizationHeaders();
    return this.http.get<ProfileModel>(`${this.baseUrl}User/bookings`,{headers});
  }

 

  // booking(bookObj:any, id: number): Observable<any> {
  //   const headers = this.getAuthorizationHeaders();
  //   return this.http.post<any>(`${this.baseUrl}Booking/id?id=${id}`, bookObj, {headers});
  // }

  setToken(token:string){
    localStorage.setItem("token", token);
  }

  getToken(){
    return localStorage.getItem("token");
  }

  getAuthorizationHeaders(): HttpHeaders {
    return new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.getToken()}`
    });
  }

  isLoggedIn():boolean{
    return (!!localStorage.getItem("token")); // 2 exclamation marks to convert string to boolean
  }

  signOut(){
    localStorage.clear();
    // Swal.fire({
    //   title: 'Success!',
    //   text: "Logout Success!",
    //   icon: 'success',
    //   confirmButtonText: 'Ok'
    // });
    this.router.navigate(['login']);
  }


  getFlightById(id:number){
    return this.http.get(`${this.baseUrl}AirlineAuthority/id?id=${id}`);
  }

}
