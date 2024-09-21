import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  usuario: any = {}; // Inicializar `usuario` como un objeto vacío para evitar problemas

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.usuario = navigation.extras.state['usuario'];
    }
  }

  logout() {
    // Lógica para cerrar sesión, como limpiar el token de autenticación
    // Luego rediriges al login
    this.router.navigate(['/login']);
  }
}
