import { Component } from '@angular/core';
import { AsistenciaService } from '../../services/asistencia.service';
import { AuthService } from 'src/app/services/auth.service';
interface Asignatura {
  nombre: string;
  clases: number;
  Asistidas: number;
}

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})

export class AsistenciaPage {
  asignaturas: Asignatura[] = []; 
  constructor(private asistenciaService: AsistenciaService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.iniciarTimeout();
    this.asignaturas = this.asistenciaService.getAsignaturas();
  }

  calcularPorcentaje(Asistidas: number, clases: number): number {
    return this.asistenciaService.calcularPorcentaje(Asistidas, clases);
  }

  logout() {
    this.authService.logout();
  }

  iniciarTimeout() {
    let timeout: any;
  
    const reiniciarTimeout = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        this.logout();
      }, 2 * 60 * 1000); 
    };
  
    window.addEventListener('click', reiniciarTimeout);
    window.addEventListener('keypress', reiniciarTimeout);
    reiniciarTimeout();
  }

  
}
