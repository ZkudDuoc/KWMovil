import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: any = {}; // Inicializar `usuario` como un objeto vacío

  constructor(private router: Router, private usuarioService: UsuarioService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      // Obtener los datos del usuario desde la navegación si están disponibles
      this.usuario = navigation.extras.state['usuario'];
    }
  }

  ngOnInit() {
    // Si no se reciben datos del usuario, obtener desde el servicio
    if (!this.usuario || !this.usuario.nombreCompleto) {
      // Como ejemplo, obtenemos el primer usuario de la lista del servicio
      this.usuario = this.usuarioService.getUsuarios()[0];  // Puedes cambiar esto según tu lógica
    }
  }

  logout() {
    // Lógica para cerrar sesión y redirigir a la página de login
    this.router.navigate(['/login']);
  }
}
