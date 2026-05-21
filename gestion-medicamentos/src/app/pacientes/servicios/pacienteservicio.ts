import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paciente } from '../modelo/paciente';

@Injectable({
  providedIn: 'root'
})
export class Pacienteservicio {

  private apiUrl = 'http://localhost:8620/kick/pacientes';

  constructor(private http: HttpClient) {}

  registrar(paciente: Paciente): Observable<any> {
    return this.http.post(this.apiUrl, paciente, { responseType: 'text' });
  }
}
