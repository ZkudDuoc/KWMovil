import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios = [
    { username: 'Agustin', password: 'agustin', nombreCompleto: 'Agustin Cavieres', semestre: '2', carrera: 'Ingeniería', seccion: 'A', jornada: 'Diurna' },
    { username: 'Nicolas', password: 'nicolas', nombreCompleto: 'Nicolas Saavedra', semestre: '4', carrera: 'Derecho', seccion: 'B', jornada: 'Vespertina' },
    { username: 'Benja', password: 'benja', nombreCompleto: 'Benjamin Morales', semestre: '3', carrera: 'Medicina', seccion: 'C', jornada: 'Diurna' },
    { username: 'Anais', password: 'anais', nombreCompleto: 'Anais Morales', semestre: '1', carrera: 'Arquitectura', seccion: 'D', jornada: 'Diurna' }
  ];

  constructor() {}

  getUsuarios() {
    return this.usuarios;
  }

  actualizarPassword(username: string, newPassword: string) {
    const usuario = this.usuarios.find(user => user.username === username);
    if (usuario) {
      usuario.password = newPassword;
      return true;
    }
    return false;
  }
}
