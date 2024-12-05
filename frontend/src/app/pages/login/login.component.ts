import { LoginPerson } from './../../interfaces/LoginPerson';
import { Component } from '@angular/core';
import md5 from 'md5';

@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor() { }
  loginPerson: LoginPerson = {
    username: '',
    password: md5('')
  };
  login():void {
    this.loginPerson.password = md5(this.loginPerson.password); // uso de md5 para encriptar la contraseña
    console.log(this.loginPerson);
    this.loginPerson.username = '';
    this.loginPerson.password = '';
  }

}
