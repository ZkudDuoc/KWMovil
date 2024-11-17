import { Injectable } from '@angular/core';
import { LoadingController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class LoaderService {
  private loading: HTMLIonLoadingElement | null = null;

  constructor(private loadingController: LoadingController) {}

  async mostrarCargando(mensaje: string) {
    if (this.loading) {
      await this.loading.dismiss();
    }

    this.loading = await this.loadingController.create({
      message: mensaje,
      spinner: 'circles', 
      cssClass: 'custom-loader-class', 
    });

    await this.loading.present();
  }

  async ocultarCargando() {
    if (this.loading) {
      await this.loading.dismiss();
      this.loading = null;
    }
  }
}
