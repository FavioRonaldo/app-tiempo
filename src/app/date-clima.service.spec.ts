import { TestBed } from '@angular/core/testing';

import { DateClimaService } from './date-clima.service';

describe('DateClimaService', () => {
  let service: DateClimaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateClimaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
