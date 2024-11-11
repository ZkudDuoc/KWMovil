import { Injectable } from '@angular/core';

export interface User {
  username: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor() { }
  isLoggedIn(): boolean {
    const user = localStorage.getItem('user');
    console.log('Comprobando si el usuario está logueado: ', user);
    return !!user; 
  }

  getUser(): User | null {
    const user = localStorage.getItem('user');
    console.log('Datos del usuario en getUser:', user);
    return user ? JSON.parse(user) : null; 
  }

  login(userData: User): void {
    try {
      localStorage.setItem('user', JSON.stringify(userData)); 
      console.log('Usuario guardado en localStorage:', JSON.stringify(userData)); 
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
    }
  }

  logout(): void {
    localStorage.removeItem('user'); 
    console.log('Usuario eliminado de localStorage'); 
  }
}
