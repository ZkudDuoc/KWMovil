import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private asignaturas = [
    { nombre: 'ETICA PARA EL TRABAJO', clases: 14, Asistidas: 14 },
    { nombre: 'INGLES INTERMEDIO', clases: 49, Asistidas: 39 },
    { nombre: 'ESTADISTICA DESCRIPTIVA', clases: 23, Asistidas: 20 },
    { nombre: 'PROGRAMACION DE APPS MOVILES', clases: 23, Asistidas: 21 },
    { nombre: 'CALIDAD DE SOFTWARE', clases: 21, Asistidas: 20},
    { nombre: 'ARQUITECTURA', clases: 11, Asistidas: 8 }
  ];

  constructor() {}

  getAsignaturas() {
    return this.asignaturas;
  }

  calcularPorcentaje(Asistidas: number, clases: number): number {
    return Math.round((Asistidas / clases) * 100);
  }
}  
