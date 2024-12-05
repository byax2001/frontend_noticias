import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-headernews',
  standalone: false,

  templateUrl: './headernews.component.html',
  styleUrl: './headernews.component.css'
})
export class HeadernewsComponent {
  categorias = [
    { "categoria": "Tecnologia", "id": 0 },
    { "categoria": "Entretenimiento", "id": 1 },
    { "categoria": "Cultura", "id": 2 },
    { "categoria": "Deportes", "id": 3 },
    { "categoria": "Ciencia", "id": 4 },
    { "categoria": "Política", "id": 5 },
    { "categoria": "Economía", "id": 6 }
  ];
  constructor(private router: Router) { }
   // Función para redirigir al home
   goHome(): void {
    this.router.navigate(['/home']);
  }

  // Función para cerrar sesión
  logout(): void {
    localStorage.removeItem('id');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']); // Redirigir al login
  }
}
