import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../modelo/paciente';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class Pacienteservicio {
  private apiUrl = `${environment.apiUrl}/pacientes`;

  constructor(private http: HttpClient) {}

  registrar(paciente: Paciente): Observable<any> {
    return this.http.post(this.apiUrl, paciente, { responseType: 'text' });
  }
}
