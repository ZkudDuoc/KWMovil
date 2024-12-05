import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  private datosQR: any[] = [];

  constructor() {}

  /**
   * Agrega datos QR a la lista. Verifica que no se dupliquen.
   * @param data - Datos a agregar.
   */
  setDatosQR(data: any) {
    if (this.isValidQRData(data) && !this.datosQR.some(item => JSON.stringify(item) === JSON.stringify(data))) {
      this.datosQR.push(data);
    }
  }

  /**
   * Obtiene todos los datos QR almacenados.
   * @returns 
   */
  getDatosQR() {
    return [...this.datosQR]; 
  }

  
  clearDatosQR() {
    this.datosQR = [];
  }

  /**
   * Valida si los datos QR tienen el formato esperado.
   * @param data - Datos a validar.
   * @returns `true` si los datos son válidos; `false` en caso contrario.
   */
  private isValidQRData(data: any): boolean {
    return (
      data &&
      typeof data.asignatura === 'string' &&
      typeof data.seccion === 'string' &&
      typeof data.sala === 'string' &&
      typeof data.fecha === 'string'
    );
  }
}
