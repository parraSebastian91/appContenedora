import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';
import { Usuario} from './../modelos/usuarios.class'
import { AuthUserService } from './../_services/auth/auth-user.service'

import { ViewsRoutingModule } from './views-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginComponent } from './pages/login/login.component';
import { ErrorPageComponent } from './pages/error/error-page/error-page.component'

@NgModule({
  declarations: [
    LoginComponent,
    ErrorPageComponent
  ],
  providers:[
    CookieService,
    Usuario,
    AuthUserService
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule,
    FontAwesomeModule
  ]
})
export class ViewsModule { }
