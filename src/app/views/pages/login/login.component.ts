import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faKey, faUser } from '@fortawesome/free-solid-svg-icons';
import { CookieService } from 'ngx-cookie-service';
import { AuthUserService } from './../../../_services/auth/auth-user.service'
import { Usuario } from './../../../modelos/usuarios.class'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private cookieService: CookieService,
    private _authUserService: AuthUserService,
    private usuario: Usuario
  ) { }

  faKey = faKey;
  faUser = faUser
  urlImgUser: string = "https://cdn.pixabay.com/photo/2015/03/04/22/35/head-659651_960_720.png"
  rgexEmail: string = '^[a-z0-9](\.?[a-z0-9_-]){0,}@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$'
  inputGroupClassArray = ["input-group-text", "input-group-text has-error"]
  btnClassArray = ["btn login_btn", "btn login_btn has-error"]
  inputClassUser = this.inputGroupClassArray[0]
  inputClassPass = this.inputGroupClassArray[0]
  btnClass = this.btnClassArray[0]
  nameUser: string = ""
  passUser: string = ""

  btnLogin() {
    let regexp = new RegExp(this.rgexEmail);
    if (!regexp.test(this.nameUser) || this.passUser.length < 6) {
      console.log("Usuario y/o contraseña inválidos")
      this.btnClass = this.btnClassArray[1]
      setTimeout(
        () => {
          this.btnClass = this.btnClassArray[0]
        }
        , 2000)
    }
    else {
      this.cookieService.set('CoockieLogin', `{nameUser:${this.nameUser},passUser:${this.passUser}`);
      this.usuario.usuario = this.nameUser
      this.usuario.password = this.passUser
      let response = this._authUserService.autentificacion(this.usuario)
      console.log(response)
      if (response.code === "ok") {
        this.router.navigate(['/view/layout/list_process']);
      } else {
        this.btnClass = this.btnClassArray[1]
        this.inputClassUser = this.btnClassArray[1]
        this.inputClassPass = this.btnClassArray[1]
        setTimeout(
          () => {
            this.btnClass = this.btnClassArray[0]
            this.inputClassUser = this.btnClassArray[0]
            this.inputClassPass = this.btnClassArray[0]
          }
          , 2000)
      }
    }
  }

  ingresandoUsuario(event: Event) {
    let regexp = new RegExp(this.rgexEmail);
    this.nameUser = (<HTMLInputElement>event.target).value.trim();
    this.inputClassUser = ((regexp.test(this.nameUser)) ? this.inputGroupClassArray[0] : this.inputGroupClassArray[1])
  }

  ingresandoPassword(event: Event) {
    this.passUser = (<HTMLInputElement>event.target).value
    this.inputClassPass = ((this.passUser.length > 6) ? this.inputGroupClassArray[0] : this.inputGroupClassArray[1])
  }

  ngOnInit() {
  }


}
