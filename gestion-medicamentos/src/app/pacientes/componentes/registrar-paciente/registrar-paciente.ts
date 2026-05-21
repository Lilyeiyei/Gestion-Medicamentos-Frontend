import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Pacienteservicio } from '../../servicios/pacienteservicio';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registrar-paciente',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './registrar-paciente.html',
  styleUrl: './registrar-paciente.scss'
})
export class RegistrarPaciente {

  form: FormGroup;
  mensaje: string = '';
  error: string = '';

  epsList = ['Sura', 'Sanitas', 'Compensar', 'Nueva EPS', 'Famisanar', 'Coomeva'];

  constructor(private fb: FormBuilder, private pacienteServicio: Pacienteservicio) {
    this.form = this.fb.group({
      nombreCompleto: ['', Validators.required],
      documentoIdentidad: ['', [Validators.required, Validators.pattern('^[0-9]+$')]],
      eps: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      contrasena: ['', Validators.required]
    });
  }

  registrar() {
    if (this.form.valid) {
      this.pacienteServicio.registrar(this.form.value).subscribe({
        next: () => {
          this.mensaje = 'Paciente registrado exitosamente';
          this.error = '';
          this.form.reset();
        },
        error: (err) => {
          if (err.status === 201 || err.status === 200) {
            this.mensaje = 'Paciente registrado exitosamente';
            this.error = '';
            this.form.reset();
          } else {
            this.error = 'Error al registrar el paciente: ' + err.status;
            this.mensaje = '';
          }
        }
      });
    }
  }
}
