import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class CategoriaService {
  url = 'http://localhost:8080/categorias';
  token = localStorage.getItem('token');
  constructor(private http: HttpClient) { }

  getCategorias() {
    return this.http.get(`${this.url}`, {headers: {Authorization: `Bearer ${this.token}`}});
  }


}
