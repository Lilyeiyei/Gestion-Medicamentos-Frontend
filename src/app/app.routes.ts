import { Routes } from '@angular/router';
import { CrearDoctorComponent } from './doctor/componentes/creardoctor/creardoctor';
import { Medicamentoscrear } from './medicamentos/componentes/medicamentoscrear/medicamentoscrear';

export const routes: Routes = [

  { path: 'doctores/crear', component: CrearDoctorComponent },
  { path: 'crearmedicamento', component: Medicamentoscrear },
  { path: '', redirectTo: 'crearmedicamento', pathMatch: 'full' },
  { path: '**', redirectTo: 'crearmedicamento' }
];
