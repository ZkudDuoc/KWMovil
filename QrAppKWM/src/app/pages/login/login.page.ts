import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, NavigationExtras } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { UsuarioService } from '../../services/usuario.service'; // Importar el servicio

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
    private usuarioService: UsuarioService // Inyectar el servicio
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

      // Obtener los usuarios desde el servicio
      const usuarios = this.usuarioService.getUsuarios();

      // Buscar el usuario que coincide con el username y password
      const usuarioValido = usuarios.find(user => user.username === username && user.password === password);

      if (usuarioValido) {
        // Si el usuario es válido, navegamos al home y mostramos el toast
        const navigationExtras: NavigationExtras = {
          state: {
            usuario: usuarioValido
          }
        };

        await this.router.navigate(['/home'], navigationExtras);

        // Mostrar el toast de bienvenida
        const toast = await this.toastController.create({
          message: `Bienvenido, ${usuarioValido.nombreCompleto}!`,
          duration: 2000,
          position: 'top'
        });
        await toast.present();

      } else {
        // Si las credenciales no son correctas, mostramos un toast de error
        const toast = await this.toastController.create({
          message: 'Usuario o contraseña incorrectos',
          duration: 2000,
          position: 'top'
        });
        await toast.present();
      }
    } else {
      // Si el formulario no es válido, mostramos un toast de validación
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
