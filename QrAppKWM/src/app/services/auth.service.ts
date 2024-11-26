import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private timeoutId: any; 

  constructor(private router:Router, private toastController: ToastController) {}

  login(userData: any): void {
    localStorage.setItem('user', JSON.stringify(userData));
    this.resetTimeout(); 
  }

  logout(): void {
    localStorage.removeItem('user');
    this.clearTimeout(); 
    console.log('Sesión cerrada automáticamente por inactividad');
  }

  cerrarSesion(){
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  resetTimeout(): void {
    this.clearTimeout(); 
    this.timeoutId = setTimeout(() => {
      this.logout();
      this.cerrarSesion(); 
    }, 30 * 1000); 
  }

  clearTimeout(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }
}
