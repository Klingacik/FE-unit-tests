import { TestBed } from '@angular/core/testing';

import { ExampleService } from './example.service';

describe('ExampleServiceService', () => {
  let service: ExampleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExampleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sort array on init', () => {
    // call ngOnInit()

    // assert cars are ordered properly
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
