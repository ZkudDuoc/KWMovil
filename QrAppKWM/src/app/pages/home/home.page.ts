import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { StorageService } from '../../services/storage.service'; // Importa tu servicio de almacenamiento
import { PerfilService } from 'src/app/services/perfil.service';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  usuario: any = {};
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
  capturedImage: any;
  fotoPerfil: string = '';  

  constructor(private router: Router, private usuarioService: UsuarioService, private perfilService: PerfilService, private storageService: StorageService) {
    this.setClasesDelDia();
  }

  async ngOnInit() {
    // Cargar usuario desde el Storage
    const usuarioStored = await this.storageService.get('usuario');
    if (usuarioStored) {
      this.usuario = JSON.parse(usuarioStored); // Parsear el JSON para convertirlo en objeto
    } else {
      // Si no hay usuario en el Storage, podrías usar un usuario por defecto o manejarlo según tu lógica
      this.usuario = this.usuarioService.getUsuarios()[0]; 
    }
    
    // Obtener la foto de perfil
    await this.obtenerFotoPerfil();
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
        resultType: CameraResultType.Uri,
        source: CameraSource.Camera 
      });

      this.capturedImage = image.webPath;
      console.log('Imagen capturada:', this.capturedImage);

    } catch (error) {
      console.error('Error al capturar imagen', error);
    }
  }

  async obtenerFotoPerfil() {
    try {
      // Supongamos que esta es la URL de la API que proporciona la foto de perfil
      const response = await axios.get('https://randomuser.me/api/');
      const foto = response.data.results[0].picture.large; // Cambia según la estructura de la respuesta de tu API
      this.fotoPerfil = foto; // Almacena la foto de perfil
    } catch (error) {
      console.error('Error al obtener la foto de perfil', error);
    }
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
