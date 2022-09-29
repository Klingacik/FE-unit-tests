import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ExampleRestService } from './example-rest.service';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { Car } from './car';

export class ExampleRestServiceMock {
  getCars(): Observable<Car[]> {
    return of([{id: 1, brand: 'vw', cost: 50000}]);
  }

  getCarById(id: number): Observable<Car> {
    return of({id: 1, brand: 'vw', cost: 50000})
  }
}

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [
        {
          provide: ExampleRestService,
          useClass: ExampleRestServiceMock
        }
      ],
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'angular-unit-tests-example'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angular-unit-tests-example');
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('.content span')?.textContent).toContain('angular-unit-tests-example app is running!');
  });

  // using spy for mock
  it(`loadCars should set loadedCars`, () => {
    // set up mock
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const restService = TestBed.inject(ExampleRestService);
    const car = {id: 1, brand: 'vw', cost: 50000};
    spyOn(restService, 'getCars').and.returnValue(of([car]));

    // call loadCars method
    app.loadCars();

    // assert loadedCars are set
    expect(app.loadedCars.length).toBe(1);
    expect(app.loadedCars[0]).toBe(car); 
  });

  // using mock class
  it(`loadCars should set loadedCars`, () => {
    // call loadCars method
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;

    app.loadCars();

    // assert loadedCars are set
    expect(app.loadedCars.length).toBe(1);
    expect(app.loadedCars[0]).toEqual({id: 1, brand: 'vw', cost: 50000});
  });

  // use either mock class or spy object, or both :)
  it(`getCarById should set selectedCar`, () => {
    // set up mocks

    // call getCarById

    // assert selectedCar is set
  });
});
