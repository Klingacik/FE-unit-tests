import { Component } from '@angular/core';
import { ExampleService } from './example.service';
import { ExampleRestService } from './example-rest.service';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-unit-tests-example';
  loadedCars: Car[] = [];
  selectedCar: Car = {} as Car;

  constructor(private restService: ExampleRestService) {}

  loadCars() {
    this.restService.getCars().subscribe(cars => this.loadedCars = cars);
  }

  getCarById(id: number) {
    this.restService.getCarById(id).subscribe(car => this.selectedCar = car);
  }
}
