import { Component,HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { BarcodeScanner, BarcodeScanResult } from '@ionic-native/barcode-scanner/ngx';
import { Geolocation } from '@capacitor/geolocation';
import { StorageService } from '../../services/storage.service';
import { AuthService } from '../../services/auth.service'; 

import { PerfilService } from 'src/app/services/perfil.service';
import axios from 'axios';

import { ToastController } from '@ionic/angular';
import { LoaderService } from '../../services/loader.service';

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
    private storageService: StorageService,
    private toastController: ToastController,
    private loaderService: LoaderService,
    private authService: AuthService
  ) {
    this.setClasesDelDia();
  }

  async ngOnInit() {
    await this.loaderService.mostrarCargando('Procesando, por favor espera...');
    this.iniciarTimeout();
    const usuarioStored = await this.storageService.get('usuario');
    console.log('Usuario almacenado recuperado:', usuarioStored); 

    if (usuarioStored) {
      this.usuario = JSON.parse(usuarioStored);
    } else {
      this.usuario = { nombreCompleto: 'Juan Pérez', semestre: 3, carrera: 'Ingeniería', seccion: 'A', jornada: 'Diurna' };
      await this.storageService.set('usuario', JSON.stringify(this.usuario));
      console.log('Usuario por defecto guardado:', this.usuario); 
    }

    await this.obtenerFotoPerfil();
    await this.loaderService.ocultarCargando();
  }

  setClasesDelDia() {
    const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const fechaActual = new Date();
    const diaActual = dias[fechaActual.getDay()];
    this.clasesDelDia = this.horario[diaActual] || [];
  }

  async mostrarAlerta(titulo: string, mensaje: string) {
    const alerta = document.createElement('ion-alert');
    alerta.header = titulo;
    alerta.message = mensaje;
    alerta.buttons = ['OK'];
  
    document.body.appendChild(alerta);
    await alerta.present();
  }
  

  async openCamara() {
    const scanResult: BarcodeScanResult = await this.barcodeScanner.scan();
    
    if (scanResult.text) {
      const content = scanResult.text.trim(); 
      console.log('Código escaneado:', content);
  
      await this.loaderService.mostrarCargando('Procesando datos, por favor espera...');
      const regexFormatoQR = /^[A-Z0-9]+?\|[A-Z0-9]+?\|[A-Z0-9]+?\|\d{8}$/;
      await this.loaderService.ocultarCargando();
      if (regexFormatoQR.test(content)) {
        const [asignatura, seccion, sala, fecha] = content.split('|');
        await this.mostrarAlerta(
          'Asistencia Registrada',
          `Asignatura: ${asignatura}\nSección: ${seccion}\nSala: ${sala}\nFecha: ${fecha}`
        );
      } else {
        console.error('Formato de código QR no válido');
        await this.mostrarToast('El código QR no tiene el formato esperado.');
      }
  
      const position = await Geolocation.getCurrentPosition();
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
  
      const response = await axios.get(
        `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${lat}&lon=${lon}`
      );
      const address = response.data.display_name;
      console.log('Dirección:', address);
  
      await this.mostrarToast(`Dirección: ${address}`);
    } else {
      console.error('No se pudo escanear el código');
      await this.mostrarToast('No se detectó ningún código.');
    }
  
    
  }
  
  
  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 5000, 
      position:'bottom', 
      color: 'dark', 
    });
    await toast.present();
  }


  async obtenerFotoPerfil() {
    try {
      const response = await axios.get('https://randomuser.me/api/');
      const foto = response.data.results[0].picture.large;
      this.fotoPerfil = foto;
    } catch (error) {
      console.error('Error al obtener la foto de perfil', error);
    }
  }

  cerrarSesion(){
    this.storageService.remove('usuario');
    this.router.navigate(['/login']);
  }

  async logout() {
    const toast = await this.toastController.create({
      message: 'Sesión cerrada por inactividad.',
      duration: 3000, 
      position: 'bottom',
      color:'light' 
    });
    await toast.present();
  
    if (this.authService) {
      this.authService.logout(); 
    }
  
    this.router.navigate(['/login']);
  }
  

  @HostListener('document:click') onUserInteraction(): void {
    this.authService.resetTimeout(); 
  }

  @HostListener('document:keydown') onKeyInteraction(): void {
    this.authService.resetTimeout(); 
  }

  iniciarTimeout() {
    let timeout: any;
  
    const reiniciarTimeout = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        this.logout();
      }, 13  * 1000); 
    };
  
    window.addEventListener('click', reiniciarTimeout);
    window.addEventListener('keypress', reiniciarTimeout);
    reiniciarTimeout();
  }
}
