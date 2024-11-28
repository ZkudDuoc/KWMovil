import { Component } from '@angular/core';
import { AsistenciaService } from '../../services/asistencia.service';
import { AuthService } from 'src/app/services/auth.service';

interface Asignatura {
  nombre: string;
  clases: number;
  asistidas: number;
}

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage {
  asignaturas: Asignatura[] = [];
  asignaturaVisible: boolean[] = [];

  constructor(
    private asistenciaService: AsistenciaService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.cargarAsignaturas();
    this.iniciarTimeout();
  }

  cargarAsignaturas() {
    this.asignaturas = this.asistenciaService.getAsignaturas();
    this.asignaturaVisible = this.asignaturas.map(() => false);
  }

  toggleCard(index: number) {
    this.asignaturaVisible[index] = !this.asignaturaVisible[index];
  }

  calcularPorcentaje(asistidas: number, clases: number): number {
    return this.asistenciaService.calcularPorcentaje(asistidas, clases);
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
      }, 13 * 1000);
    };

    window.addEventListener('click', reiniciarTimeout);
    window.addEventListener('keypress', reiniciarTimeout);
    reiniciarTimeout();
  }
}
