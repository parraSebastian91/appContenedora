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

  getMenuItems() {   

    let menu = [
      {
        nameSection: 'seccion 1',
        iconSection: 'faBars',
        items: [
          {
            name: 'nombre item 1',
            icono: 'faBars',
            url: '#',
            list: [
              {
                name: 'Procesos',
                icono: 'faBars',
                url: '/view/layout/list_process',
                list: [
    
                ]
              },
              {
                name: 'Subir Documentos',
                icono: 'faBars',
                url: '/view/layout/upload',
                list: [
    
                ]
              }
            ]
          },
          {
            name: 'nombre item 2',
            icono: 'faBars',
            url: '#',
            list: [
              {
                name: 'nombre item 1',
                icono: 'faBars',
                url: '#',
                list: [
    
                ]
              },
              {
                name: 'nombre item 2',
                icono: 'faBars',
                url: '#',
                list: [
    
                ]
              },
              {
                name: 'nombre item 3',
                icono: 'faBars',
                url: '#',
                list: [
    
                ]
              }
            ]
          }
        ]
      },
      {
        nameSection: 'seccion 2',
        iconSection: 'faBars',
        items: [
          {
            name: 'nombre item',
            icono: 'faBars',
            url: '#',
            list: [
              {
                name: 'nombre item 1',
                icono: 'faBars',
                url: '#',
                list: [
    
                ]
              },
              {
                name: 'nombre item 2',
                icono: 'faBars',
                url: '#',
                list: [
    
                ]
              },
              {
                name: 'nombre item 3',
                icono: 'faBars',
                url: '#',
                list: [
    
                ]
              }
            ]
          }
        ]
      }
    ]

    return menu;

  }

}
