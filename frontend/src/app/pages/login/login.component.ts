import { LoginPerson } from './../../interfaces/LoginPerson';
import { Component } from '@angular/core';
import md5 from 'md5';
import Swal from 'sweetalert2'
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: false,

  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

  constructor( // Inyección de dependencias para pasar metodos y variables de otros archivos
    private loginsrv: LoginService,
    private router: Router
  ) {}

  loginPerson: LoginPerson = {
    usuario: '',
    contrasena: '',
  };

  login(): void {
    // Encriptar la contraseña usando md5
    this.loginPerson.contrasena = md5(this.loginPerson.contrasena);

    this.loginsrv.postLogin(this.loginPerson).subscribe(
      (res: any) => {
        // Verificamos si el nombre del usuario es "no encontrado"
        if (res.token !== "error") {
          // Si el nombre no es "no encontrado", el login fue exitoso
          localStorage.setItem('token', res.token);
          this.router.navigate(['/home']); // Redirigir al home
          Swal.fire('Bienvenido', 'Inicio de sesión exitoso', 'success');
        } else {
          Swal.fire('Error', 'Usuario o contraseña incorrectos', 'error'); // Mostrar mensaje de error
        }
      },
      (err) => {
        Swal.fire('Error', err, 'error'); // Mostrar mensaje de error
      }
    );
    // Limpiar los campos de usuario y contraseña
    this.loginPerson.contrasena = '';
    this.loginPerson.usuario = '';
  }

  registrarse(): void {
    this.router.navigate(['/registro']);
  }
}
