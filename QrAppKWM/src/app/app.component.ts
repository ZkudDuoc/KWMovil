import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    const userToken = localStorage.getItem('user-token');
    
    if (!userToken) {
      this.router.navigate(['/login']);  
    } else {
      this.router.navigate(['/home']);  
    }

    const darkMode = localStorage.getItem('dark-mode') === 'true';
    if (darkMode) {
      document.body.classList.add('dark-theme'); 
    }
  }

  toggleDarkMode() {
    const isDark = document.body.classList.toggle('dark-theme');
    localStorage.setItem('dark-mode', isDark.toString());  
  }

  logout() {
    localStorage.removeItem('user-token');
    this.router.navigate(['/login']);
  }
}
