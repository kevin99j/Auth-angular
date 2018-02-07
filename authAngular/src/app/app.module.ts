import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AngularFireAuthModule} from 'angularfire2/auth';
import { AppComponent } from './app.component';
import {LoginGuardGuard} from './login-guard.guard';
import { LoginComponent } from './login/login.component';
import { LoginServiceService } from './login-service.service';
import { AccesoComponent } from './acceso/acceso.component';
import { RouterModule, Routes } from '@angular/router';
// uso de routing con angular router 
const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'Access', component: AccesoComponent },
  { path: '**', component: AppComponent },
];

// acá va tu api key que puedes encontrar en firebase console en el apartado de autenticacion 
export const firebaseConfig = {
 apiKey: 'XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX',
  authDomain: 'ng-authprueba.firebaseapp.com',
  databaseURL: 'https://my-app.firebaseio.com',
  projectId: 'my-app',
  storageBucket: 'my-app.appspot.com',
  messagingSenderId: 'xxxxxxxxxxxx'
};

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AccesoComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot(routes)

  ],
  providers: [LoginServiceService, LoginGuardGuard],
  bootstrap: [LoginComponent]
})
export class AppModule { }
