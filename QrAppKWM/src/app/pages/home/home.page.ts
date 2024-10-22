import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { Geolocation } from '@capacitor/geolocation';
import { StorageService } from '../../services/storage.service';
import { PerfilService } from 'src/app/services/perfil.service';
import axios from 'axios';
import emailjs from 'emailjs-com'; // Importa EmailJS

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

  constructor(
    private barcodeScanner: BarcodeScanner,
    private router: Router,
    private usuarioService: UsuarioService,
    private perfilService: PerfilService,
    private storageService: StorageService
  ) {
    this.setClasesDelDia();
  }

  async ngOnInit() {
    // Cargar usuario desde el Storage
    const usuarioStored = await this.storageService.get('usuario');
    console.log('Usuario almacenado recuperado:', usuarioStored); // Agregar este log

    if (usuarioStored) {
      this.usuario = JSON.parse(usuarioStored);
    } else {
      this.usuario = { nombreCompleto: 'Juan Pérez', semestre: 3, carrera: 'Ingeniería', seccion: 'A', jornada: 'Diurna' };
      await this.storageService.set('usuario', JSON.stringify(this.usuario));
      console.log('Usuario por defecto guardado:', this.usuario); // Agregar este log
    }

    await this.obtenerFotoPerfil();
  }

  setClasesDelDia() {
    const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const fechaActual = new Date();
    const diaActual = dias[fechaActual.getDay()];
    this.clasesDelDia = this.horario[diaActual] || [];
  }

  async openCamara() {
    try {
      const scanResult: BarcodeScanResult = await this.barcodeScanner.scan();
      if (scanResult.text) {
        const content = scanResult.text;
        console.log('Código escaneado:', content);

        const position = await Geolocation.getCurrentPosition();
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        const response = await axios.get(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`);
        const address = response.data.display_name;
        console.log('Dirección:', address);

        // Envía un correo con las coordenadas y la dirección
        await this.enviarCorreo(lat, lon, address);
      } else {
        console.error('No se pudo escanear el código');
      }
    } catch (error) {
      console.error('Error al escanear:', error);
    }
  }

  async enviarCorreo(lat: number, lon: number, address: string) {
    const templateParams = {
      from_name: 'appMovile', // Puedes cambiar esto
      to_name: 'Nico Saavedra',
      coordinates: `Latitud: ${lat}, Longitud: ${lon}`,
      address: address,
    };

    try {
      // Reemplaza 'YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', 'YOUR_USER_ID' con tus valores de EmailJS
      await emailjs.send('service_yrzd448', 'template_wc9leg3', templateParams, 'jOS-iYahM44Okfz-t');
      console.log('Correo enviado con éxito');
    } catch (error) {
      console.error('Error al enviar el correo:', error);
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
