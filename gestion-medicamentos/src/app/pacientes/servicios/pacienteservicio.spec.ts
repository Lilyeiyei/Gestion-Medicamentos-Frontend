import { TestBed } from '@angular/core/testing';

import { Pacienteservicio } from './pacienteservicio';

describe('Pacienteservicio', () => {
  let service: Pacienteservicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Pacienteservicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
