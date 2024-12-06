import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-base-page',
  standalone: false,

  templateUrl: './base-page.component.html',
  styleUrl: './base-page.component.css'
})
export class BasePageComponent {
  constructor(private router:Router) {
    this.protectRoute(); // Se protege la ruta
  }

  goHome(): void {
    this.router.navigate(['/home']);
  }

  // Función para cerrar sesión
  logout(): void {
    localStorage.removeItem('iduser');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']); // Redirigir al login
  }

  protectRoute(): void {
    if (localStorage.getItem('iduser') == null) {
      this.router.navigate(['/login']);
    }
  }

}
