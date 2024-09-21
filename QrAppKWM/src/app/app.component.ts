import { Component } from '@angular/core';
import { Router } from '@angular/router'; // Importa Router

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router) {} // Inyecta Router

  logout() {
    // Lógica para cerrar sesión, como limpiar el token de autenticación
    // Redirige al login
    this.router.navigate(['/login']);
  }
}
