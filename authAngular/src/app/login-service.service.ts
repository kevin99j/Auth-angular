import { Injectable } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Router } from '@angular/router';

@Injectable()
export class LoginServiceService {

/**
 * Gracias a la integración con Firebase se accede a los token de google
 * solo se pueden verificar usuarios previamente registrados en nuestra base de datos
 * pues google no permite acceso a otros datos
 */



  userLogged: boolean;
  user: Observable<firebase.User>;
  constructor(public afAuth: AngularFireAuth, private router: Router) {
   this.user = afAuth.authState;
  }

  // uso de login directo a google
login() {

 return this.afAuth.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider);

}
// forma facil
login2(email: string, password: string): Observable<any> {
return  Observable.fromPromise(
  this.afAuth.auth.signInWithEmailAndPassword(email, password).then(success =>
  this.userLogged = true).catch(error =>
  this.userLogged = false)

);

}
// forma un poco mas elaborada
login3(email, password) {
  this.afAuth.auth.signInWithEmailAndPassword(email, password).then( data =>
    console.log('Success ' + data)
  )
    .catch(function(error) {
  // Posibles errorres a capturar
const  errorCode = error.code;
  const errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});



}
// logOut para salir de la session 
salir () {

  this.afAuth.auth.signOut();
  this.router.navigate(['/']);

}
// alimentar base de datos con usuarios nuevos
ingresarUsuariosNuevos(email , password) {
  this.afAuth.auth.signInWithEmailAndPassword(email, password)
    .catch(function(error) {
  // posibles errores
  const errorCode = error.code;
  const errorMessage = error.message;
  if (errorCode === 'auth/wrong-password') {
    alert('Wrong password.');
  } else {
    alert(errorMessage);
  }
  console.log(error);
});
}

}
