import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class NoticiaService{
  url = 'http://localhost:8080/noticias';
  token = localStorage.getItem('token');
  constructor(private http:HttpClient) { }

  getNoticias(){
    //return this.http.get(this.url);
    //Aplicando el token en bearer el nuevo get seria
    return this.http.get(this.url, {headers: {Authorization: `Bearer ${this.token}`}});
  }
  //Noticia por id
  getNoticia(id:number){
    return this.http.get(this.url+'/'+id, {headers: {Authorization: `Bearer ${this.token}`}});
  }
  //Noticia por categoria
  getNoticiaCategoria(id:number){
    return this.http.get(this.url+'/categoria/'+id, {headers: {Authorization: `Bearer ${this.token}`}});
  }


}
