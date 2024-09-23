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

  async navigateToLogin() {
    const username = this.recuperarFormulario.get('username')?.value.trim();
    const newPassword = this.recuperarFormulario.get('newPassword')?.value;
    const actualizacionExitosa = this.usuarioService.actualizarPassword(username, newPassword);

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
