// asistencia.page.ts
import { Component } from '@angular/core';
import { AsistenciaService } from '../../services/asistencia.service';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage {
  asignaturas: any[] = [];
  asignaturaVisible: boolean[] = []; // Controla qué tarjetas están visibles

  constructor(private asistenciaService: AsistenciaService) {}

  ngOnInit() {
    this.cargarAsignaturas();
  }

  cargarAsignaturas() {
    this.asignaturas = this.asistenciaService.getAsignaturas();
    this.asignaturaVisible = this.asignaturas.map(() => false); // Inicializa todas las tarjetas como ocultas
  }

  toggleCard(index: number) {
    this.asignaturaVisible[index] = !this.asignaturaVisible[index];
  }

  calcularPorcentaje(Asistidas: number, clases: number): number {
    return this.asistenciaService.calcularPorcentaje(Asistidas, clases);
  }

  // Actualizar asistencia desde la tarjeta (ejemplo para interacción futura)
  actualizarAsistencia(nombre: string, nuevasAsistidas: number) {
    this.asistenciaService.updateAsistencia(nombre, nuevasAsistidas);
    this.cargarAsignaturas(); // Recargar para reflejar los cambios
  }
}
