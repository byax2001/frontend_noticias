import { Component } from '@angular/core';
import { LoginPerson } from './../../interfaces/LoginPerson';
import md5 from 'md5';
import Swal from 'sweetalert2'
import { UserRegist } from '../../interfaces/UserRegist';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';
@Component({
  selector: 'app-registrarse',
  standalone: false,

  templateUrl: './registrarse.component.html',
  styleUrl: './registrarse.component.css'
})
export class RegistrarseComponent {
  userRegist: UserRegist= {
    nombre: '',
    usuario: '',
    contrasena: '',
  };
  constructor(// Inyección de dependencias para pasar metodos y variables de otros archivos
    private loginsrv: LoginService,
    private router: Router
  ) { }

  registrarse(): void {
    this.userRegist.contrasena = md5(this.userRegist.contrasena); // Encriptar contraseña
    console.log(this.userRegist);
    this.loginsrv.postRegister(this.userRegist).subscribe(
      (res: any) => {
        // Verificamos el estado de la respuesta
        if (res.status) {
          Swal.fire('Usuario Registrado', res.mensaje, 'success'); // Mostrar mensaje de éxito
          this.router.navigate(['']); // Redirigir a la página de login o inicio
        } else {
          Swal.fire('Error', res.mensaje, 'error'); // Mostrar mensaje de error
        }
      },
      (err) => {
        Swal.fire('Error', err, 'error'); // Mostrar mensaje de error
      }
    );
  }

  backLogin(): void {
    this.router.navigate(['']);
  }


}
