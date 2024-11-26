import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SessionTimeoutService {
  private timeoutDuration = 30  * 1000; 
  private timeout: any;

  constructor(private router: Router) {}

  startTimeout() {
    let timeout: any;
  
    const reiniciarTimeout = () => {
      if (timeout) {
        clearTimeout(timeout); 
      }
      timeout = setTimeout(() => {
        this.logout(); 
      }, 30 * 1000); 
    };
  
    window.addEventListener('click', reiniciarTimeout);
    window.addEventListener('keypress', reiniciarTimeout);
    reiniciarTimeout(); 
  }

  clearTimeout() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
  }

  logout() {
    alert('Tu sesión ha expirado. Por favor, inicia sesión nuevamente.');
    this.router.navigate(['/login']);
  }
}
