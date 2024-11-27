// theme.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {

  constructor() { }

  toggleTheme() {
    // Cambia entre los modos claro y oscuro
    const isDark = document.body.classList.contains('dark');
    if (isDark) {
      document.body.classList.remove('dark');
      localStorage.setItem('theme', 'light');  // Guarda el estado en localStorage
    } else {
      document.body.classList.add('dark');
      localStorage.setItem('theme', 'dark');  // Guarda el estado en localStorage
    }
  }

  // Puedes crear un método para restaurar el tema guardado en localStorage
  initTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
