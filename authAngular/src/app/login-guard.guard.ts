import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import {LoginServiceService} from './login-service.service';


@Injectable()
export class LoginGuardGuard implements CanActivate {

constructor(private loginService: LoginServiceService, private router: Router) {

}


  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
this.router.navigate(['/']);
console.log(this.loginService.userLogged);
      return this.loginService.userLogged;

  }
}
