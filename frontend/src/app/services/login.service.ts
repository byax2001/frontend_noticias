import { UserRegist } from './../interfaces/UserRegist';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LoginPerson } from '../interfaces/LoginPerson';



@Injectable({providedIn: 'root'})
export class LoginService {
  url = 'http://localhost:8080/usuarios';
  constructor(private http: HttpClient) { }

  postLogin(loginPerson: LoginPerson) {
    return this.http.post(`${this.url}/login`, loginPerson);
  }

  postRegister(userRegist: UserRegist) {
    return this.http.post(`${this.url}`, userRegist);
  }


}
