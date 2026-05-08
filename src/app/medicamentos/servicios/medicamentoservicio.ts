import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Medicamento } from '../modelo/medicamento';

@Injectable({
  providedIn: 'root',
})
export class Medicamentoservicio {

  private apiUrl = 'http://localhost:8080/medicamentos';

  constructor(private http: HttpClient) {}

  registrar(medicamento: Medicamento): Observable<Medicamento> {

    return this.http.post<Medicamento>(
      this.apiUrl,
      medicamento
    );

  }

}
