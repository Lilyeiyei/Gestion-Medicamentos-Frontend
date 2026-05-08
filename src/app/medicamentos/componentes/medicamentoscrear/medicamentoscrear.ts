import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Medicamentoservicio } from '../../servicios/medicamentoservicio';
import { Medicamento } from '../../modelo/medicamento';

@Component({
  selector: 'app-medicamentoscrear',

  imports: [FormsModule],

  templateUrl: './medicamentoscrear.html',

  styleUrls: ['./medicamentoscrear.scss']
})
export class Medicamentoscrear {

  medicamento: Medicamento = {

    nombreMedicamento: '',
    miligramos: '',
    dosis: '',
    fechaVencimiento: '',
    frecuencia: '',
    horario: ''

  };

  constructor(
    private medicamentoServicio: Medicamentoservicio
  ) {}

  guardar() {

    this.medicamentoServicio
      .registrar(this.medicamento)
      .subscribe({

        next: (data) => {

          console.log(data);

          alert('Medicamento registrado exitosamente');

        },

        error: (error) => {

          console.log(error);

          alert(error.error);

        }

      });

  }

}
