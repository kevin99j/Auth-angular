import { Component, OnInit } from '@angular/core';
import { LoginServiceService } from '../login-service.service';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-acceso',
  templateUrl: './acceso.component.html',
  styleUrls: ['./acceso.component.css']
})
export class AccesoComponent implements OnInit {

  constructor(private service: LoginServiceService, private login: LoginComponent) { }

  ngOnInit() {
  }
salir() {
this.service.salir();
this.login.visible = true;
this.login.container = false;
this.login.user = '';
this.login.password = '';
}

}
