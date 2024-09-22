import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';  // Importa Capacitor Camera

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: any = {}; // Inicializar `usuario` como un objeto vacío
  capturedImage: any;  // Para almacenar la imagen capturada

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

  async openCamera() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.Uri, // Puedes usar base64 si quieres el archivo en ese formato
        source: CameraSource.Camera // Abre la cámara directamente
      });

      // Guarda la imagen capturada
      this.capturedImage = image.webPath;
      console.log('Imagen capturada:', this.capturedImage);

    } catch (error) {
      console.error('Error al capturar imagen', error);
    }
  }

  logout() {
    // Lógica para cerrar sesión y redirigir a la página de login
    this.router.navigate(['/login']);
  }
}
