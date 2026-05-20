import { TestBed } from '@angular/core/testing';

import { Doctorservicio } from './doctorservicio';

describe('Doctorservicio', () => {
  let service: Doctorservicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Doctorservicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
