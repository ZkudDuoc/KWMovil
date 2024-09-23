import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private usuarios = [
    { username: 'Agustin', password: 'agustin', nombreCompleto: 'Agustin Cavieres', semestre: '4', carrera: 'Ingeniería', seccion: '008v', jornada: 'Diurna' },
    { username: 'Nicolas', password: 'nicolas', nombreCompleto: 'Nicolas Saavedra', semestre: '4', carrera: 'Derecho', seccion: '008v', jornada: 'Vespertina' },
    { username: 'Benja', password: 'benja', nombreCompleto: 'Benjamin Morales', semestre: '4', carrera: 'Medicina', seccion: '008v', jornada: 'Diurna' },
    { username: 'Anais', password: 'anais', nombreCompleto: 'Anais Morales', semestre: '0.1', carrera: 'Arquitectura', seccion: '008v', jornada: 'Diurna' }
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
