import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { HorarioService } from '../../services/horario.service';

@Component({
  selector: 'app-horario',
  templateUrl: './horario.page.html',
  styleUrls: ['./horario.page.scss'],
})
export class HorarioPage {
  horario: { [key: string]: { hora: string; clase: string }[] } = {};

  constructor(private router: Router, private horarioService: HorarioService) {}

  ngOnInit() {
    this.horario = this.horarioService.getHorario();
  }

  logout() {
    this.router.navigate(['/login']);
  }
}
