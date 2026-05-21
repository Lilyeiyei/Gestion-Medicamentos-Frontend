import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { FormulaService } from '../../services/formula.service';
import { FormulaModel } from '../../modelo/formula.model';
import { CommonModule } from '@angular/common'; // Importante para el *ngFor

@Component({
  selector: 'app-formula',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './formula.component.html',
  styleUrl: './formula.component.css'
})
export class FormulaComponent implements OnInit {
  formulaForm!: FormGroup;
  mensaje: string = '';
  listaFormulas: FormulaModel[] = []; // Array para almacenar los datos del GET

  constructor(
    private fb: FormBuilder,
    private formulaService: FormulaService
  ) {}

  ngOnInit(): void {
    this.initForm();
    this.cargarFormulas(); // Cargamos los datos al iniciar
  }

  initForm(): void {
    this.formulaForm = this.fb.group({
      identificacionPaciente: ['', Validators.required],
      nombrePaciente: ['', Validators.required],
      idMedicamento: ['', Validators.required],
      medicamento: ['', Validators.required],
      dosis: ['', Validators.required],
      fecha: ['', Validators.required],
      descripcion: ['']
    });
  }

  cargarFormulas(): void {
    this.formulaService.listar().subscribe({
      next: (data) => this.listaFormulas = data,
      error: (err) => console.error('Error al cargar la lista', err)
    });
  }

  onGuardar(): void {
    if (this.formulaForm.valid) {
      const datos: FormulaModel = this.formulaForm.value;
      this.formulaService.registrar(datos).subscribe({
        next: () => {
          this.mensaje = 'Fórmula registrada con éxito';
          this.formulaForm.reset();
          this.cargarFormulas(); // Refrescamos la tabla tras el registro
        },
        error: (err) => {
          this.mensaje = 'Error: ' + (err.error?.message || 'No se pudo registrar');
        }
      });
    }
  }
}
