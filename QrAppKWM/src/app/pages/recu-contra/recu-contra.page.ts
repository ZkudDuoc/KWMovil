import { Component } from '@angular/core';
import { Router } from '@angular/router';  
@Component({
  selector: 'app-recu-contra',
  templateUrl: './recu-contra.page.html',
  styleUrls: ['./recu-contra.page.scss'],
})
export class RecuContraPage {
  username: string = 'Agustin'; 

  constructor(private router: Router) { }


  navigateToLogin() {
    if (this.username.trim() === 'Agustin ') { 
      this.router.navigate(['/login']);  
    } else {
     
      console.log('Por favor, ingresa un nombre de usuario.');
      alert('Por favor, ingresa un nombre de usuario.'); 
    }
  }
}
