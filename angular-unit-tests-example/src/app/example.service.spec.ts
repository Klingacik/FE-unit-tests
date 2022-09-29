import { TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';

describe('ExampleService', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort array by cost on init', () => {
    // call ngOnInit()
    service.ngOnInit();
    // assert cars are ordered properly
    expect(service.cars.length).toBe(4);
    expect(service.cars[0].id).toBe(1);
    expect(service.cars[3].id).toBe(3);
  });

  it('addNew should add new element to list', () => {
    // call addNew method

    // assert car has been added

  });

  it('addNew should not add new element to list if id already exists', () => {
    // call addNew method with car with already existing id

    // assert car has not been added
  });

  it('removeCarById should remove element by id', () => {
    // call removeCarById method with id

    // assert car has been deleted

  });

  it('removeCarById should not remove element if it does not exist', () => {
    // call removeCarById method with id

    // assert cars array is untouched

  });

});
