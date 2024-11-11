import { Component } from '@angular/core';
import { AsistenciaService } from '../../services/asistencia.service';
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
  constructor(private asistenciaService: AsistenciaService) {}

  ngOnInit() {
    this.asignaturas = this.asistenciaService.getAsignaturas();
  }

  calcularPorcentaje(Asistidas: number, clases: number): number {
    return this.asistenciaService.calcularPorcentaje(Asistidas, clases);
  }
}
