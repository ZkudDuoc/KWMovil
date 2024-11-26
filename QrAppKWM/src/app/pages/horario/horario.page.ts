import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HorarioService } from '../../services/horario.service';
import { AuthService } from '../../services/auth.service'; 

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage {
  horario: Record<string, { hora: string; clase: string }[]> = {};
  dias: string[] = []; 
  diaActualIndex: number = 0; 
  diaActual: string = ''; 

  constructor(
    private router: Router,
    private horarioService: HorarioService, 
    private authService: AuthService ) {}

  ngOnInit() {
    this.horario = this.horarioService.getHorario();
    this.dias = Object.keys(this.horario); 
    this.diaActual = this.dias[this.diaActualIndex]; 
  }

  


  nextDay() {
    if (this.diaActualIndex < this.dias.length - 1) {
      this.diaActualIndex++;
      this.diaActual = this.dias[this.diaActualIndex];
    }
  }


  prevDay() {
    if (this.diaActualIndex > 0) {
      this.diaActualIndex--;
      this.diaActual = this.dias[this.diaActualIndex];
    }
  }

  cambiarDia(index: number) {
    this.diaActualIndex = index;
    this.diaActual = this.dias[this.diaActualIndex];
  }
  

  logout() {
    this.authService.logout();
  }
}
