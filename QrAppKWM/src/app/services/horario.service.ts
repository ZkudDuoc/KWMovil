import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HorarioService {
  private horario: Record<string, { hora: string; clase: string }[]> = {
    Lunes: [
      { hora: '19:00 - 19:45', clase: 'Bases de Datos' },
      { hora: '19:45 - 20:30', clase: 'Programación Avanzada' },
      { hora: '20:30 - 21:15', clase: 'Redes de Computadoras' },
      { hora: '21:15 - 22:00', clase: 'Estructuras de Datos' },
    ],
    Martes: [
      { hora: '19:00 - 19:45', clase: 'Desarrollo Web' },
      { hora: '19:45 - 20:30', clase: 'Inteligencia Artificial' },
      { hora: '20:30 - 21:15', clase: 'Matemáticas Discretas' },
      { hora: '21:15 - 22:00', clase: 'Seguridad Informática' },
    ],
    Miercoles: [
      { hora: '19:00 - 19:45', clase: 'Cálculo' },
      { hora: '19:45 - 20:30', clase: 'Programación de Aplicaciones Móviles' },
      { hora: '20:30 - 21:15', clase: 'Calidad de Software' },
      { hora: '21:15 - 22:00', clase: 'Sistemas Operativos' },
    ],
    Jueves: [
      { hora: '19:00 - 19:45', clase: 'Bases de Datos II' },
      { hora: '19:45 - 20:30', clase: 'Estrategias Algorítmicas' },
      { hora: '20:30 - 21:15', clase: 'Redes Avanzadas' },
      { hora: '21:15 - 22:00', clase: 'Ingeniería de Software' },
    ],
    Viernes: [
      { hora: '19:00 - 19:45', clase: 'Administración de Proyectos' },
      { hora: '19:45 - 20:30', clase: 'Arquitectura de Computadoras' },
      { hora: '20:30 - 21:15', clase: 'Desarrollo de Videojuegos' },
      { hora: '21:15 - 22:00', clase: 'Machine Learning' },
    ],
    Sabado: [
      { hora: '13:00 - 13:45', clase: 'Taller de Innovación' },
      { hora: '13:45 - 14:30', clase: 'Prototipado' },
    ],
  };

  constructor() {}

  getHorario() {
    return this.horario;
  }
}