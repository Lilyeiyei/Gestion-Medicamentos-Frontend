import { Routes } from '@angular/router';
import { CrearDoctorComponent } from './doctor/componentes/creardoctor/creardoctor';

export const routes: Routes = [
  { path: 'doctores/crear', component: CrearDoctorComponent },
  { path: '', redirectTo: 'doctores/crear', pathMatch: 'full' },
  { path: '**', redirectTo: 'doctores/crear' }
];
