import { Injectable } from '@angular/core'; 
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    this._storage = await this.storage.create();
    console.log('Storage inicializado:', this._storage); // Agregar esta línea
  }
  

  // Guardar un valor en el storage
  async set(key: string, value: any): Promise<any> {
    return this._storage?.set(key, value);
  }

  // Obtener un valor del storage
  async get(key: string): Promise<any> {
    return this._storage?.get(key);
  }

  // Eliminar un valor del storage
  async remove(key: string): Promise<void> {
    await this._storage?.remove(key);
  }

  // Limpiar el storage
  async clear(): Promise<void> {
    await this._storage?.clear();
  }
}
