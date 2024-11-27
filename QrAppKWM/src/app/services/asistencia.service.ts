import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AsistenciaService {
  private readonly STORAGE_KEY = 'asistencia';

  private asignaturas = [
    { nombre: 'ETICA PARA EL TRABAJO', clases: 14, Asistidas: 14 },
    { nombre: 'INGLES INTERMEDIO', clases: 49, Asistidas: 39 },
    { nombre: 'ESTADISTICA DESCRIPTIVA', clases: 23, Asistidas: 20 },
    { nombre: 'PROGRAMACION DE APPS MOVILES', clases: 23, Asistidas: 21 },
    { nombre: 'CALIDAD DE SOFTWARE', clases: 21, Asistidas: 20 },
    { nombre: 'ARQUITECTURA', clases: 11, Asistidas: 8 }
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
    if (data) {
      return JSON.parse(data); 
    }
    return this.asignaturas; 
  }

  saveAsignaturas(asignaturas: any[]): void {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(asignaturas));
  }

  updateAsistencia(nombre: string, nuevasAsistidas: number): void {
    const asignaturas = this.getAsignaturas(); 
  
    if (Array.isArray(asignaturas)) {
      const asignatura = asignaturas.find((a: any) => a.nombre === nombre); 
      if (asignatura) {
        asignatura.Asistidas = nuevasAsistidas; 
        this.saveAsignaturas(asignaturas); 
      } else {
        console.warn(`No se encontró la asignatura con el nombre: ${nombre}`);
      }
    } else {
      console.error('Error: asignaturas no es un array válido.');
    }
  }
  
  calcularPorcentaje(Asistidas: number, clases: number): number {
    return Math.round((Asistidas / clases) * 100);
  }
}
