import { TestBed } from '@angular/core/testing';

import { ExampleRestService } from './example-rest.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('ExampleRestService', () => {
  let service: ExampleRestService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(ExampleRestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('getCars should call http get with correct url', () => {
    const httpClient = TestBed.inject(HttpClient);
    const spy = spyOn(httpClient, 'get').and.callThrough();

    service.getCars();

    expect(spy).toHaveBeenCalledWith('/cars' as any);
  });

  it('getCarById should call http get with correct url', () => {
    // set up a spy

    // call getCarById

    // assert spy has been called with correct url
  });

});
