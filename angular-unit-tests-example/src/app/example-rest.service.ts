import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class ExampleRestService {

  constructor(private http: HttpClient) {}

  getCars(): Observable<Car[]> {
    return this.http.get<Car[]>('/cars');
  }

  getCarById(id: number): Observable<Car> {
    const url = '/cars/:id'.replace(/:id/g, id.toString());

    return this.http.get<Car>(url);
  }
}
