import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private timeoutId: any;
  private countdownInterval: any;
  private activeAlert: HTMLIonAlertElement | null = null;
  private lastInteractionTime: number = Date.now();
  private alertShown = false; 

  constructor(
    private router: Router,
    private alertController: AlertController
  ) {
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        this.lastInteractionTime = Date.now();
      }
    });

    document.addEventListener('mousemove', this.resetInteractionTime.bind(this));
    document.addEventListener('keydown', this.resetInteractionTime.bind(this));
    document.addEventListener('touchstart', this.resetInteractionTime.bind(this));
  }

  login(userData: any): void {
    localStorage.setItem('user', JSON.stringify(userData));
    this.resetTimeout();
  }

  logout(): void {
    localStorage.removeItem('user');
    this.clearTimeout();
    console.log('Sesión cerrada automáticamente por inactividad');
    this.dismissActiveAlert(); 
  }

  cerrarSesion(): void {
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('user');
  }

  private resetInteractionTime(): void {
    this.lastInteractionTime = Date.now();
    this.alertShown = false;
  }

  async resetTimeout(): Promise<void> {
    this.clearTimeout();

    const totalDuration = 20 * 1000; 
    const alertOffset = 8 * 1000; 

    this.timeoutId = setTimeout(() => {
      this.logout();
      this.cerrarSesion();
    }, totalDuration);

    setTimeout(() => {
      if (Date.now() - this.lastInteractionTime >= alertOffset && !this.alertShown) {
        this.showCountdownAlert(10); 
        this.alertShown = true; 
      }
    }, alertOffset);
  }

  clearTimeout(): void {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
      this.timeoutId = null;
    }
    if (this.countdownInterval) {
      clearInterval(this.countdownInterval);
      this.countdownInterval = null;
    }
  }

  private async showCountdownAlert(countdown: number): Promise<void> {
    if (this.activeAlert) {
      return; 
    }

    if (!this.isLoggedIn()) {
      return; 
    }

    this.activeAlert = await this.alertController.create({
      header: '¿Sigues ahí?',
      message: `Tu sesión se cerrará en breve.`,
      buttons: [
        {
          text: 'Permanecer conectado',
          handler: () => {
            this.resetTimeout();
            this.dismissActiveAlert(); 
          },
        },
      ],
      backdropDismiss: false,
    });

    await this.activeAlert.present();

    this.countdownInterval = setInterval(() => {
      countdown--;
      if (countdown <= 0) {
        clearInterval(this.countdownInterval);
        this.dismissActiveAlert();
      } else if (this.activeAlert) {
        this.activeAlert.message = `Tu sesión se cerrará en breve.`;
      }
    }, 1000);
  }

  private async dismissActiveAlert(): Promise<void> {
    if (this.activeAlert) {
      await this.activeAlert.dismiss();
      this.activeAlert = null;
    }
  }
}
