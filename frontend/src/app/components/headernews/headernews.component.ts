import { Component, EventEmitter,Output } from '@angular/core';
import { Router } from '@angular/router';
import { CategoriaService } from '../../services/categoria.service';
import { CategoriaInterface } from '../../interfaces/CategoriaInterface';

@Component({
  selector: 'app-headernews',
  standalone: false,

  templateUrl: './headernews.component.html',
  styleUrl: './headernews.component.css'
})
export class HeadernewsComponent {
  constructor(private router: Router, private cat_serv: CategoriaService) {
    this.fillCategoria(); // Se llena el arreglo de categorias
    this.protectRoute(); // Se protege la ruta
  }
  @Output() categoryChanged = new EventEmitter<string>(); // Emite cambios de categoría

  categorias:CategoriaInterface[] = [
    { "nombre": "Tecnologia y Computacion", id: 0 },
    { "nombre": "Entretenimiento y Comunicacin", id: 1 },
    { "nombre": "Cultura", id: 2 },
    { "nombre": "Deportes", id: 3 },
    { "nombre": "Ciencia", id: 4 },
    { "nombre": "Política", id: 5 },
    { "nombre": "Economía", id: 6 }
  ];

  //Funcion para llenar categorias
  fillCategoria(): void {
    this.cat_serv.getCategorias().subscribe(
      (res: any) => {
        this.categorias = res;
      },
      (err) => {
        console.log(err);
      }
    );
  }

   // Función para redirigir al home
   goHome(): void {
    this.router.navigate(['/home']);
  }

  // Función para cerrar sesión
  logout(): void {
    localStorage.removeItem('iduser');
    localStorage.removeItem('usuario');
    this.router.navigate(['/login']); // Redirigir al login
  }

  // Función para emitir cambios de categoría
  selectCategory(categoryId: string): void {
    this.categoryChanged.emit(categoryId);
  }
  //Funcion para proteger la ruta de la pagina de inicio
  protectRoute(): void {
    if (localStorage.getItem('iduser') == null) {
      this.router.navigate(['/login']);
    }
  }

}
