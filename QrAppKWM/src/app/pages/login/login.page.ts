import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service';
import { AuthService } from '../../services/auth.service'; 
import { StorageService } from '../../services/storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {
  loginFormulario: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private toastController: ToastController,
    private usuarioService: UsuarioService,
    private authService: AuthService, 
    private storageService: StorageService 
  ) {
    this.loginFormulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  async validacionLogin() {
    if (this.loginFormulario.valid) {
      const username = this.loginFormulario.get('username')?.value;
      const password = this.loginFormulario.get('password')?.value;
      const usuarios = this.usuarioService.getUsuarios();
      const usuarioValido = usuarios.find(user => user.username === username && user.password === password);
  
      if (usuarioValido) {
        this.authService.login(usuarioValido); 
        await this.storageService.set('usuario', JSON.stringify(usuarioValido));
  
        const navigationExtras: NavigationExtras = {
          state: {
            usuario: usuarioValido
          }
        };
  
        await this.router.navigate(['/home'], navigationExtras);
  
        const toast = await this.toastController.create({
          message: `Bienvenido, ${usuarioValido.nombreCompleto}!`,
          duration: 2000,
          position: 'top'
        });
        await toast.present();
      } else {
        const toast = await this.toastController.create({
          message: 'Usuario o contraseña incorrectos',
          duration: 2000,
          position: 'top'
        });
        await toast.present();
      }
    } else {
      const toast = await this.toastController.create({
        message: 'Por favor, completa todos los campos correctamente.',
        duration: 2000,
        position: 'top'
      });
      await toast.present();
    }
  }

  recuperarPassword() {
    this.router.navigate(['/recu-contra']);
  }
}
