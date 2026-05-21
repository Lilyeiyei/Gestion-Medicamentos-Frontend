import { Routes } from '@angular/router';
import { RegistrarPaciente } from './pacientes/componentes/registrar-paciente/registrar-paciente';

export const routes: Routes = [
  { path: 'registrar-paciente', component: RegistrarPaciente },
  { path: '', redirectTo: 'registrar-paciente', pathMatch: 'full' },
  { path: '**', redirectTo: 'registrar-paciente' }
];
