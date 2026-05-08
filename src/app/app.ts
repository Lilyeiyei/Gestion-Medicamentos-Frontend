import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet], // Quitamos Navbar de aquí porque no existe el archivo
  template: `
    <main>
      <h1>Gestión de Medicamentos</h1>
      <router-outlet></router-outlet>
    </main>
  `
})
export class AppComponent { }
