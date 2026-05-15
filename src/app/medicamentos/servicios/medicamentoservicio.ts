import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { Medicamento } from '../modelo/medicamento';

@Injectable({
  providedIn: 'root'
})
export class Medicamentoservicio {

  url = 'http://localhost:8860/kick/medicamentos';

  constructor(
    private http: HttpClient
  ) {}

  registrar(medicamento: Medicamento) {

    return this.http.post(this.url, medicamento);

  }

}
