import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { DoctorServicio } from '../../servicios/doctorservicio';
import { Doctor } from '../../modelo/doctor';

@Component({
  selector: 'app-creardoctor',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creardoctor.html',
  styleUrl: './creardoctor.scss'
})
export class CrearDoctorComponent implements OnInit {

  doctor: Doctor = {
    cedula: '',
    nombreCompleto: '',
    especialidad: '',
    correoElectronico: '',
    telefono: ''
  };

  doctores: Doctor[] = [];
  mensajeExito: string = '';
  mensajeError: string = '';
  cargando: boolean = false;

  constructor(private doctorServicio: DoctorServicio, private router: Router) {}

  ngOnInit(): void {
    this.cargarDoctores();
  }

  cargarDoctores(): void {
    this.doctorServicio.listarDoctores().subscribe({
      next: (data) => this.doctores = data,
      error: () => this.mensajeError = 'Error al cargar los doctores.'
    });
  }

  registrar(form: NgForm): void {
    if (form.invalid) return;

    this.cargando = true;
    this.mensajeExito = '';
    this.mensajeError = '';

    this.doctorServicio.registrarDoctor(this.doctor).subscribe({
      next: () => {
        this.mensajeExito = 'Doctor registrado exitosamente.';
        this.cargando = false;
        form.resetForm();
        this.cargarDoctores();
      },
      error: (err) => {
        if (err.status === 409) {
          this.mensajeError = 'Ya existe un doctor con esa cédula.';
        } else {
          this.mensajeError = 'Error al registrar el doctor. Intente nuevamente.';
        }
        this.cargando = false;
      }
    });
  }

  cancelar(): void {
    this.router.navigate(['/doctores']);
  }
}
