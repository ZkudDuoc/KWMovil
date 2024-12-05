import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'app-mis-asistencias',
  templateUrl: './mis-asistencias.page.html',
  styleUrls: ['./mis-asistencias.page.scss'],
})
export class MisAsistenciasPage implements OnInit {
  asistencias: any[] = [];

  constructor(private sharedService: SharedService) {}

  ngOnInit() {
    this.asistencias = this.sharedService.getDatosQR();
    console.log('Asistencias registradas:', this.asistencias);
  }
  
}
