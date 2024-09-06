import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginFormulario: FormGroup;

  
  usuarios = [
    { username: 'Agustin', password: 'agustin' , nombreCompleto: 'Agustin Cavieres', semestre: '4 semestre' , carrera: 'Informatica' , seccion: '008-V' , jornada: 'Vespertino'},
    { username: 'Nicolas', password: 'nicolas' , nombreCompleto: 'Nicolas Saavedra', semestre: '2 semestre' , carrera: 'Mecanica' , seccion: '013-D' , jornada: 'Diurno'},
    { username: 'Benja', password: 'benja' , nombreCompleto: 'Benjamin Morales', semestre: '8 semestre' , carrera: 'Medicina' , seccion: '007-V' , jornada: 'Vespertino'}
  ];

  constructor(
    private formBuilder: FormBuilder
    , private router: Router, private toastController: ToastController) {
    
    this.loginFormulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  
  async validacionLogin() {
    if (this.loginFormulario.valid) {
      const username = this.loginFormulario.get('username')?.value;
      const password = this.loginFormulario.get('password')?.value;
  
      
      const usuarioValido = this.usuarios.find(user => user.username === username && user.password === password);
  
      if (usuarioValido) {
        console.log('Inicio de sesión exitoso');
        alert('Inicio de sesión exitoso');
        
        this.router.navigate(['/home']);
        
        const toast = await this.toastController.create({
          message: 'Buenos dias, ${username}!',
          duration: 2000,
          position: 'top'
        });
        
        toast.present();

      } else {
        console.log('Credenciales incorrectas');
        alert('Usuario o contraseña incorrectos');
      }
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
