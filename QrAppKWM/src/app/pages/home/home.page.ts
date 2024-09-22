import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
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

  constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.usuario = navigation.extras.state['usuario'];
    }
    this.setClasesDelDia();
  }

  setClasesDelDia() {
    const dias = ['domingo', 'lunes', 'martes', 'miércoles', 'jueves', 'viernes', 'sábado'];
    const fechaActual = new Date();
    const diaActual = dias[fechaActual.getDay()];
    
    this.clasesDelDia = this.horario[diaActual] || [];
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
