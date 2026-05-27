import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormulaModel } from '../modelo/formula.model';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FormulaService {

  private API_URL = `${environment.apiUrl}/formulas`;

  constructor(private http: HttpClient) { }

  registrar(formula: FormulaModel): Observable<FormulaModel> {
    return this.http.post<FormulaModel>(this.API_URL, formula);
  }

  listar(): Observable<FormulaModel[]> {
    return this.http.get<FormulaModel[]>(this.API_URL);
  }
}
