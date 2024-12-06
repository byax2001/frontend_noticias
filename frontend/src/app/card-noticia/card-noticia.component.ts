import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-noticia',
  standalone: false,

  templateUrl: './card-noticia.component.html',
  styleUrl: './card-noticia.component.css'
})
export class CardNoticiaComponent {
  @Input() noticia: any;  
}
