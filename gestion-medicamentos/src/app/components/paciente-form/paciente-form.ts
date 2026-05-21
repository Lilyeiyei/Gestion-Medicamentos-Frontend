import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PacienteService } from '../../services/paciente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-paciente-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './paciente-form.html',
  styleUrl: './paciente-form.scss'
})
export class PacienteForm {

  form: FormGroup;
  mensaje: string = '';
  error: string = '';

  epsList = ['Sura', 'Sanitas', 'Compensar', 'Nueva EPS', 'Famisanar', 'Coomeva'];

  constructor(private fb: FormBuilder, private pacienteService: PacienteService) {
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
      this.pacienteService.registrar(this.form.value).subscribe({
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
