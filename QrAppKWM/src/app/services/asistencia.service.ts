import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private readonly STORAGE_KEY = 'asistencia';

  private asignaturas = [
    { nombre: 'ETICA PARA EL TRABAJO', clases: 14, asistidas: 14 },
    { nombre: 'INGLES INTERMEDIO', clases: 49, asistidas: 39 },
    { nombre: 'ESTADISTICA DESCRIPTIVA', clases: 23, asistidas: 20 },
    { nombre: 'PROGRAMACION DE APPS MOVILES', clases: 23, asistidas: 21 },
    { nombre: 'CALIDAD DE SOFTWARE', clases: 21, asistidas: 20 },
    { nombre: 'ARQUITECTURA', clases: 11, asistidas: 8 }
  ];

  constructor() {
    this.initializeData();
  }

  private initializeData() {
    const storedData = localStorage.getItem(this.STORAGE_KEY);
    if (!storedData) {
      this.saveAsignaturas(this.asignaturas);
    }
  }

  getAsignaturas() {
    const data = localStorage.getItem(this.STORAGE_KEY);
    return data ? JSON.parse(data) : this.asignaturas;
  }

  saveAsignaturas(asignaturas: any[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(asignaturas));
  }

  updateAsistencia(nombre: string, nuevasAsistidas: number): void {
    const asignaturas = this.getAsignaturas();
    const asignatura = asignaturas.find((a: any) => a.nombre === nombre);

    if (asignatura) {
      asignatura.asistidas = nuevasAsistidas;
      this.saveAsignaturas(asignaturas);
    } else {
      console.warn(`Asignatura no encontrada: ${nombre}`);
    }
  }

  calcularPorcentaje(asistidas: number, clases: number): number {
    return clases === 0 ? 0 : Math.round((asistidas / clases) * 100);
  }
}
