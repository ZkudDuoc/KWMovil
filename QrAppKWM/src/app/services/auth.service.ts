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
    return !!user;
  }


  login(userData: User): void {
    try {
      localStorage.setItem('user', JSON.stringify(userData)); 
    } catch (error) {
      console.error('Error al guardar el usuario:', error);
    }
  }

 
  logout(): void {
    localStorage.removeItem('user'); 
  }
}
