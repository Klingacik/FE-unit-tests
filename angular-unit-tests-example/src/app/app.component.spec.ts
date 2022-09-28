import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { ExampleRestService } from './example-rest.service';
import { of } from 'rxjs';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler, ExampleRestService],
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

    // call loadCars method

    // assert loadedCars are set
  });

  // using mock class
  it(`loadCars should set loadedCars`, () => {
    // call loadCars method

    // assert loadedCars are set
  });

  // use either mock class or spy object, or both :)
  it(`getCarById should set selectedCar`, () => {
    // set up mocks

    // call getCarById

    // assert selectedCar is set
  });
});
