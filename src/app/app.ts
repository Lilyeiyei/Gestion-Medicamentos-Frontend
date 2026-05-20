import { Component } from '@angular/core';

import { Medicamentoscrear } from './medicamentos/componentes/medicamentoscrear/medicamentoscrear';

@Component({
  selector: 'app-root',

  imports: [Medicamentoscrear],

  templateUrl: './app.html',

  styleUrl: './app.scss'
})
export class AppComponent {
}
