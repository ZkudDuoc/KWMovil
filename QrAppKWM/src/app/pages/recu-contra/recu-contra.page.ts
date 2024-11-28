import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../../services/usuario.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-recu-contra',
  templateUrl: './recu-contra.page.html',
  styleUrls: ['./recu-contra.page.scss'],
})
export class RecuContraPage {
  
  username: string = '';  
  recuperarFormulario: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private usuarioService: UsuarioService,
    private toastController: ToastController
  ) {
    this.recuperarFormulario = this.formBuilder.group({
      username: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  // Función de confirmación antes de actualizar la contraseña
  async confirmLogout() {
    const alerta = document.createElement('ion-alert');
    alerta.header = 'Confirmar';
    alerta.message = '¿Estás seguro de que deseas actualizar la contraseña?';
    alerta.cssClass = 'custom-alert'; 
    alerta.buttons = [
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          console.log('Actualización cancelada.');
        },
      },
      {
        text: 'Confirmar',
        handler: () => {
          this.navigateToLogin(); // Llamar a la función que actualiza la contraseña
        },
      },
    ];

    document.body.appendChild(alerta);
    await alerta.present();
  }

  // Función para actualizar la contraseña y redirigir a login
  async navigateToLogin() {
    const username = this.recuperarFormulario.get('username')?.value.trim();
    const newPassword = this.recuperarFormulario.get('newPassword')?.value;
    
    const actualizacionExitosa = await this.usuarioService.actualizarPassword(username, newPassword);

    if (actualizacionExitosa) {
      const toast = await this.toastController.create({
        message: 'Contraseña actualizada exitosamente!',
        duration: 2000,
        position: 'top'
      });

      toast.present();
      this.router.navigate(['/login']);
    } else {
      alert('Usuario no encontrado');
    }
  }
}
