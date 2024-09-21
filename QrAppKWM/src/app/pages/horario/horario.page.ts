import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage {
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
    ],
  };

  constructor(private router: Router) {}

  logout() {
    this.router.navigate(['/login']);
  }
}
