import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormulaModel } from '../modelo/formula.model';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  private API_URL = 'http://localhost:8620/kick/formulas';

  constructor(private http: HttpClient) { }

  // Método para registrar (Criterio: La fórmula debe quedar registrada correctamente)
  registrar(formula: FormulaModel): Observable<FormulaModel> {
    return this.http.post<FormulaModel>(this.API_URL, formula);
  }

  // Método para el GET que añadimos
  listar(): Observable<FormulaModel[]> {
    return this.http.get<FormulaModel[]>(this.API_URL);
  }
}
