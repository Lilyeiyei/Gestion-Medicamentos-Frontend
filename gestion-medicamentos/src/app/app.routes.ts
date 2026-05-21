import { Routes } from '@angular/router';
import { PacienteForm } from './components/paciente-form/paciente-form';

export const routes: Routes = [
  { path: 'registrar', component: PacienteForm },
  { path: '', redirectTo: 'registrar', pathMatch: 'full' },
  { path: '**', redirectTo: 'registrar' }
];
