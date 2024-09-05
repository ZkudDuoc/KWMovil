import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage {

  loginFormulario: FormGroup;

  
  usuarios = [
    { username: 'Agustin', password: 'agustin' },
    { username: 'Nicolas', password: 'nicolas' },
    { username: 'Benja', password: 'benja' }
  ];

  constructor(private formBuilder: FormBuilder, private router: Router) {
    
    this.loginFormulario = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  
  validacionLogin() {
    if (this.loginFormulario.valid) {
      const username = this.loginFormulario.get('username')?.value;
      const password = this.loginFormulario.get('password')?.value;
  
      
      const usuarioValido = this.usuarios.find(user => user.username === username && user.password === password);
  
      if (usuarioValido) {
        console.log('Inicio de sesión exitoso');
        alert('Inicio de sesión exitoso');
        
        this.router.navigate(['/home']);
      } else {
        console.log('Credenciales incorrectas');
        alert('Usuario o contraseña incorrectos');
      }
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }
}
