import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookieService } from 'ngx-cookie-service';
import { Usuario} from './../modelos/usuarios.class'
import { AuthUserService } from './../_services/auth/auth-user.service'

import { ViewsRoutingModule } from './views-routing.module';
import { LoginComponent } from './pages/login/login.component'

@NgModule({
  declarations: [
    LoginComponent
  ],
  providers:[
    CookieService,
    Usuario,
    AuthUserService
  ],
  imports: [
    CommonModule,
    ViewsRoutingModule
  ]
})
export class ViewsModule { }
