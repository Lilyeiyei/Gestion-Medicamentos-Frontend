import { Routes } from '@angular/router';

import { Medicamentoscrear } from './medicamentos/componentes/medicamentoscrear/medicamentoscrear';

export const routes: Routes = [

  {
    path: 'crearmedicamento',
    component: Medicamentoscrear
  },

  {
    path: '',
    redirectTo: 'crearmedicamento',
    pathMatch: 'full'
  },

  {
    path: '**',
    redirectTo: 'crearmedicamento'
  }

];
