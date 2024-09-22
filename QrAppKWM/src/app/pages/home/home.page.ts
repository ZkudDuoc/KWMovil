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
  horario: { [key: string]: { hora: string; clase: string }[] } = {
    lunes: [
      { hora: '19:01 - 20:20', clase: 'ETICA PARA EL TRABAJO' },
      { hora: '20:31 - 21:50', clase: 'INGLES INTERMEDIO' }
    ],
    martes: [
      { hora: '19:01 - 21:10', clase: 'PROGRAMACION DE APLICACIONES MOVILES' },
      { hora: '21:11 - 22:30', clase: 'INGLES INTERMEDIO' }
    ],
    miércoles: [
      { hora: '19:01 - 20:20', clase: 'ESTADISTICA DESCRIPTIVA' },
      { hora: '20:31 - 21:50', clase: 'INGLES INTERMEDIO' }
    ],
    jueves: [
      { hora: '19:01 - 20:20', clase: 'PROGRAMACION DE APLICACIONES MOVILES' },
      { hora: '20:30 - 21:10', clase: 'CALIDAD DE SOFTWARE' },
      { hora: '21:11 - 22:30', clase: 'INGLES INTERMEDIO' }
    ],
    viernes: [
      { hora: '19:01 - 20:20', clase: 'ESTADISTICA DESCRIPTIVA' },
      { hora: '20:30 - 22:30', clase: 'CALIDAD DE SOFTWARE' }
    ],
    sábado: [
      { hora: '13:00 - 16:40', clase: 'ARQUITECTURA' }
    ]
  };
  
  clasesDelDia: { hora: string; clase: string }[] = [];
  capturedImage: any;  // Para almacenar la imagen capturada

  constructor(private router: Router, private usuarioService: UsuarioService) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      // Obtener los datos del usuario desde la navegación si están disponibles
      this.usuario = navigation.extras.state['usuario'];
    }
    this.setClasesDelDia();
  }

  ngOnInit() {
    // Si no se reciben datos del usuario, obtener desde el servicio
    if (!this.usuario || !this.usuario.nombreCompleto) {
      // Como ejemplo, obtenemos el primer usuario de la lista del servicio
      this.usuario = this.usuarioService.getUsuarios()[0];  // Puedes cambiar esto según tu lógica
    }
  }

  setClasesDelDia() {
    const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const fechaActual = new Date();
    const diaActual = dias[fechaActual.getDay()];
    
    this.clasesDelDia = this.horario[diaActual] || [];
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
