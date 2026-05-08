export interface FormulaModel {
  id?: number;
  nombrePaciente: string;
  identificacionPaciente: string;
  medicamento: string;
  idMedicamento: string;
  dosis: string;
  fecha: string; // Se envía como string en formato YYYY-MM-DD
  descripcion?: string; // Basado en el campo de descripción de tu diseño
}
