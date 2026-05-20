import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Doctor } from '../modelo/doctor';

@Injectable({
  providedIn: 'root'
})
export class DoctorServicio {
  private apiUrl = 'http://localhost:8620/kick/doctores';

  constructor(private http: HttpClient) {}

  listarDoctores(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(this.apiUrl);
  }

  registrarDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(this.apiUrl, doctor);
  }
}
