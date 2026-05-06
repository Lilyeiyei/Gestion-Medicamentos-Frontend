import { TestBed } from '@angular/core/testing';

import { Medicamentoservicio } from './medicamentoservicio';

describe('Medicamentoservicio', () => {
  let service: Medicamentoservicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Medicamentoservicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
