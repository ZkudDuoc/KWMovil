import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  private storage!: Storage;

  constructor(private storageService: Storage) {}

  // Inicializa el servicio de almacenamiento
  async initialize() {
    this.storage = await this.storageService.create();
  }

  // Establece el tema, cambiando la clase del body
  setTheme(isDarkMode: boolean) {
    if (isDarkMode) {
      document.body.classList.add('dark-theme');
      this.storage.set('darkMode', true);  // Guarda la preferencia en el almacenamiento
    } else {
      document.body.classList.remove('dark-theme');
      this.storage.set('darkMode', false);  // Guarda la preferencia en el almacenamiento
    }
  }

  // Obtiene la preferencia del tema desde el almacenamiento
  async getDarkMode(): Promise<boolean> {
    const darkMode = await this.storage.get('darkMode');
    return darkMode !== null ? darkMode : false;  // Devuelve el valor guardado o false por defecto
  }
}
