import { Component, Input,Output } from '@angular/core';
import { NoticiasInterface } from '../../interfaces/NoticiasInterface';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'app-home',
  standalone: false,

  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private notisrv: NoticiaService) {
    this.llenarNoticias();
  }

  category_select: string = "";

  noticias:NoticiasInterface[] = [
    {
      "id": 25,
      "titulo": "Noticia 1",
      "imagenUrl": "https://cdn-icons-png.flaticon.com/512/10278/10278187.png",
      "descripcion": "Descripción de la noticia 1",
      "cuerpo": "Cuerpo de la noticia 1",
      "fechaPublicacion": new Date(),
      "fuente": "Fuente 1",
      "categoria": {
        "id": 1,
        "nombre": "Tecnología"
      }
    },
    {
      "id": 25,
      "titulo": "Noticia 2",
      "imagenUrl": "https://cdn-icons-png.flaticon.com/512/10278/10278187.png",
      "descripcion": "Descripción de la noticia 1",
      "cuerpo": "Cuerpo de la noticia 1",
      "fechaPublicacion": new Date(),
      "fuente": "Fuente 1",
      "categoria": {
        "id": 1,
        "nombre": "Tecnología"
      }
    },
    {
      "id": 25,
      "titulo": "Noticia 3",
      "imagenUrl": "https://cdn-icons-png.flaticon.com/512/10278/10278187.png",
      "descripcion": "Descripción de la noticia 1",
      "cuerpo": "Cuerpo de la noticia 1",
      "fechaPublicacion": new Date(),
      "fuente": "Fuente 1",
      "categoria": {
        "id": 1,
        "nombre": "Tecnología"
      }
    },
    {
      "id": 25,
      "titulo": "Noticia 4",
      "imagenUrl": "https://cdn-icons-png.flaticon.com/512/10278/10278187.png",
      "descripcion": "Descripción de la noticia 1",
      "cuerpo": "Cuerpo de la noticia 1",
      "fechaPublicacion": new Date(),
      "fuente": "Fuente 1",
      "categoria": {
        "id": 1,
        "nombre": "Tecnología"
      }
    },
    {
      "id": 25,
      "titulo": "Noticia 5",
      "imagenUrl": "https://cdn-icons-png.flaticon.com/512/10278/10278187.png",
      "descripcion": "Descripción de la noticia 1",
      "cuerpo": "Cuerpo de la noticia 1",
      "fechaPublicacion":new Date(),
      "fuente": "Fuente 1",
      "categoria": {
        "id": 1,
        "nombre": "Tecnología"
      }
    },

  ];
  filteredNoticias: NoticiasInterface[] = [];

  //Funcion para llenar el array de noticias
  llenarNoticias(){
    this.notisrv.getNoticias().subscribe((data: any) => {
      this.noticias = data;
      this.filteredNoticias = this.noticias;
    });
  }

  onCategoryChange(categoryNombre: string): void {
    this.category_select = categoryNombre;

    // Filtra las noticias según la categoría seleccionada
    this.filteredNoticias = this.category_select
      ? this.noticias.filter(
          (noticia) => noticia.categoria.nombre.toString() === this.category_select
        )
      : this.noticias; // Si no hay categoría seleccionada, muestra todas
  }
}
