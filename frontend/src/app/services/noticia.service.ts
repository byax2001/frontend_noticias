import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NoticiaService{
  url = 'http://localhost:8080/noticias';
  constructor(private http:HttpClient) { }

  getNoticias(){
    return this.http.get(this.url);
  }

}
