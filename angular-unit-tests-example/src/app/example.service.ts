import { Injectable, OnInit } from '@angular/core';
import { Car } from './car';

@Injectable({
  providedIn: 'root'
})
export class ExampleService implements OnInit {

  cars: Car[] = [
    {id: 1, brand: 'volkswagen', cost: 25000},
    {id: 2, brand: 'citroen', cost: 40000},
    {id: 3, brand: 'peugeot', cost: 50000},
    {id: 4, brand: 'audi', cost: 30000}
  ]

  ngOnInit(): void {
    this.cars.sort((a, b) => a.cost - b.cost);
  }

  addNew(car: Car) {
    if(this.cars.find(c => c.id === car.id))
      return;
    this.cars.push(car);
  }

  removeCarById(id: number) {
    const car = this.cars.find(c => c.id === id);
    if(!car) return;
    const index = this.cars.indexOf(car);
    if(index > -1)
      this.cars.splice(index, 1);
  }
}
