import { Component, Input, OnInit, OnChanges} from '@angular/core';
import { NoticiasInterface } from '../../interfaces/NoticiasInterface';
import { NoticiaService } from '../../services/noticia.service';

@Component({
  selector: 'app-noticias-recomendadas',
  standalone: false,

  templateUrl: './noticias-recomendadas.component.html',
  styleUrl: './noticias-recomendadas.component.css'
})
export class NoticiasRecomendadasComponent implements OnChanges {
  constructor(
    private newsrv: NoticiaService

  ) { }

  @Input() idCategoria:number=1;

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
      "fechaPublicacion": new Date(),
      "fuente": "Fuente 1",
      "categoria": {
        "id": 1,
        "nombre": "Tecnología"
      }
    },

  ];

  // Se ejecuta cuando cambia el valor de la propiedad idCategoria en el componente padre
  // De modo que ya que no se pueden tomar al inicio que se ejecuta el ngOnInit
  // Se ejecuta cuando cambia el valor de la propiedad idCategoria
  ngOnChanges(changes: any): void {
    if (changes['idCategoria'] && changes['idCategoria'].currentValue !== changes['idCategoria'].previousValue) {
      //console.log('idCategoria cambiado a:', this.idCategoria);
      this.getNoticiasCategoria(this.idCategoria);
    }
  }

  getNoticiasCategoria(idCategoria: number): void {
    this.newsrv.getNoticiaCategoria(idCategoria).subscribe(
      (data: any) => {
        this.noticias = data;
      },
      (error) => {
        console.error('Error al obtener las noticias:', error);
      }
    );
  }
}
