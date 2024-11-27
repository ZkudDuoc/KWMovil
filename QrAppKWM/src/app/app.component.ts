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
    localStorage.clear();
    
    this.router.navigate(['/login']);
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
