import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
visible = true;
container = false;
  user: string;
  password: string;
  canEnter: Object = { entrada: true, ruta: Router};
lista: Array<string>;

  constructor(private loginService: LoginServiceService, private router: Router) {
   }

  ngOnInit() {

  }
// verifica mediante servicio si el usuario es correcto
  autenticacion() {
   const userMod: string = this.user + '@unab.edu.co'  ;
this.loginService.login2(userMod, this.password).subscribe(success =>
this.redireccion()
,
  error =>
alert(error)
);

  }
// permite acceso a la siguiente pagina
redireccion() {
  this.loginService.userLogged = true;
  this.router.navigate(['/Access']);
  this.container = true;
  this.visible = false;


}

}
