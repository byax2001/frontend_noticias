import { Component, Input, OnInit } from '@angular/core';
import { NoticiaService } from '../../services/noticia.service';
import { NoticiasInterface } from '../../interfaces/NoticiasInterface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia',
  standalone: false,

  templateUrl: './noticia.component.html',
  styleUrl: './noticia.component.css'
})
export class NoticiaComponent implements OnInit {

  constructor(private notisrv:NoticiaService, private route:ActivatedRoute) {
   }

   noticia:NoticiasInterface = {
    id:0,
    titulo:'Ejemplo',
    imagenUrl:'',
    descripcion:' Las zonas tropicales',
    cuerpo:'lrem ipsum dolor sit amet, consectetur adipiscing elit. Nullam nec pur lorem ipsum lorem impsun ',
    fechaPublicacion:'24/555',
    fuente:'http://google.com',
    categoria:{
      id:0,
      nombre:'TEcnologia'
    }
  };

  ngOnInit(): void {
    //El suscribe se ejecuta cuando detecta el cambio de la ruta en el caso que se dese utilizar el mismo componente pero
    // un parametro de la ruta cambie
    this.route.paramMap.subscribe(params => {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    if (id) {
      this.notisrv.getNoticia(id).subscribe((data:any) => {
        this.noticia = data;
      });
    }})
  }



  /*
  id:               number;
  titulo:           string;
  imagenUrl:        string;
  descripcion:      string;
  cuerpo:           string;
  fechaPublicacion: string;
  fuente:           string;
  categoria:        CategoriaInterface; */

  getNoticia(id: number): void {
    this.notisrv.getNoticia(id).subscribe(
      (data:any) => {
        this.noticia = data;
      },
      (error) => {
        console.error('Error al obtener la noticia:', error);
      }
    );
  }


}
