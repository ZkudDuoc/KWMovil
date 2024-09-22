import { Component } from '@angular/core';

@Component({
  selector: 'app-asistencia',
  templateUrl: './asistencia.page.html',
  styleUrls: ['./asistencia.page.scss'],
})
export class AsistenciaPage {

 
  asignaturas = [
    { nombre: 'ETICA PARA EL TRABAJO', clases: 6, Asistidas: 6 },
    { nombre: 'INGLES INTERMEDIO', clases: 20, Asistidas: 16 },
    { nombre: 'ESTADISTICA DESCRIPTIVA', clases: 10, Asistidas: 9},
    { nombre: 'PROGRAMACION DE APLICACIONES MOVILES', clases: 9, Asistidas: 9 },
    { nombre: 'CALIDAD DE SOFTWARE', clases: 9, Asistidas: 9 },
    { nombre: 'ARQUITECTURA', clases: 5, Asistidas: 3 }


  ];

  constructor() { }
  calcularPorcentaje(Asistidas: number, clases: number): number {
    return parseFloat(((Asistidas / clases) * 100).toFixed(1));
  }
}
