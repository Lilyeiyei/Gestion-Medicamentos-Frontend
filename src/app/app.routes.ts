import { Routes } from '@angular/router';
import { FormulaComponent } from './components/formula/formula.component';

export const routes: Routes = [
  { path: 'formulas', component: FormulaComponent },
  { path: '', redirectTo: '/formulas', pathMatch: 'full' }
];
