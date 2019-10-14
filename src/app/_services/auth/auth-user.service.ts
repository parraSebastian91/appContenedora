import { Injectable } from '@angular/core';
import { Usuario } from './../../modelos/usuarios.class'

@Injectable({
  providedIn: 'root'
})
export class AuthUserService {

  constructor() { }

  autentificacion(usuario: Usuario) {
    return {
      code: 'ok',
      usuario,
      token: 'abc123'
    }
  }

  signOut() {

  }

  getMenuItems() {

    let menu = [
      {
        nameSection: 'Custodia',
        iconSection: 'faBars',
        items: [
          {
            name: 'Administración',
            url: '#',
            list: [
              {
                name: 'Procesos',
                url: '/view/layout/list_process'                
              }
            ]
          },         
        ]
      },
    

    ]

    return menu;

  }

}
