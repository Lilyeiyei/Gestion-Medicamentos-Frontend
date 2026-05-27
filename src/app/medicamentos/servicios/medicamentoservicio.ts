import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Medicamento } from '../modelo/medicamento';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Medicamentoservicio {
  private apiUrl = `${environment.apiUrl}/medicamentos`;

  constructor(private http: HttpClient) {}

  registrar(medicamento: Medicamento) {
    return this.http.post(this.apiUrl, medicamento);
  }
}
