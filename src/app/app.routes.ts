import { Routes } from '@angular/router';
import { CrearDoctorComponent } from './doctor/componentes/creardoctor/creardoctor';
import { Medicamentoscrear } from './medicamentos/componentes/medicamentoscrear/medicamentoscrear';
import { RegistrarPaciente } from './pacientes/componentes/registrar-paciente/registrar-paciente';

export const routes: Routes = [
  { path: 'doctores/crear', component: CrearDoctorComponent },
  { path: 'crearmedicamento', component: Medicamentoscrear },
  { path: 'registrar-paciente', component: RegistrarPaciente },
  { path: '', redirectTo: 'registrar-paciente', pathMatch: 'full' },
  { path: '**', redirectTo: 'registrar-paciente' }
];
