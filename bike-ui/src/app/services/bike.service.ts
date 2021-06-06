import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Bike } from '../models/bike';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  constructor(private http:HttpClient) { }

  getBikes() : Observable<Bike[]> {
    return this.http.get<Bike[]>('/server/api/v1/bikes');
  }

  getBike(id: number): Observable<Bike> {
    return this.http.get<Bike>('/server/api/v1/bikes/'+ id);
  }

  createBikeRegistration(bike) {
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes', body, httpOptions);
  }
}
