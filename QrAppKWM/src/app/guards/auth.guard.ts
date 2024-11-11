import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service'; 

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    const isLoggedIn = this.authService.isLoggedIn();
    console.log('Verificando acceso: ', isLoggedIn); 
    if (isLoggedIn) {
      return true;
    } else {
      this.router.navigate(['/login']);
      console.log('Redirigiendo al login'); 
      return false;
    }
  }
}
