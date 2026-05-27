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

    id: 0,
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

    // VALIDAR ID
    if(this.medicamento.id == null || this.medicamento.id <= 0){

      alert('El ID debe ser mayor a 0');
      return;

    }

    // VALIDAR NOMBRE
    if(!this.medicamento.nombreMedicamento.trim()){

      alert('Nombre obligatorio');
      return;

    }

    // VALIDAR MILIGRAMOS
    if(!this.medicamento.miligramos.trim()){

      alert('Miligramos obligatorios');
      return;

    }

    // VALIDAR DOSIS
    if(!this.medicamento.dosis.trim()){

      alert('Dosis obligatoria');
      return;

    }

    // VALIDAR FECHA
    if(!this.medicamento.fechaVencimiento){

      alert('Fecha obligatoria');
      return;

    }

    // VALIDAR FECHA VENCIDA
    const fechaActual = new Date();

    const fechaMedicamento = new Date(this.medicamento.fechaVencimiento);

    if(fechaMedicamento < fechaActual){

      alert('Medicamento vencido');
      return;

    }

    // VALIDAR FRECUENCIA
    if(!this.medicamento.frecuencia.trim()){

      alert('Frecuencia obligatoria');
      return;

    }

    // VALIDAR HORARIO
    if(!this.medicamento.horario.trim()){

      alert('Horario obligatorio');
      return;

    }

    // ENVIAR AL BACKEND
    this.medicamentoServicio
      .registrar(this.medicamento)
      .subscribe({

        next: (data) => {

          console.log(data);

          alert('Medicamento registrado exitosamente');

          // LIMPIAR FORMULARIO
          this.medicamento = {

            id: 0,
            nombreMedicamento: '',
            miligramos: '',
            dosis: '',
            fechaVencimiento: '',
            frecuencia: '',
            horario: ''

          };

        },

        error: (error) => {

          console.log(error);

          // MENSAJE DETALLADO DEL BACKEND
          if(error.error && error.error.details){

            alert(error.error.details);

          }

          // MENSAJE SIMPLE
          else if(error.error){

            alert(error.error);

          }

          // ERROR GENERAL
          else{

            alert('Error al registrar medicamento');

          }

        }

      });

  }

}
