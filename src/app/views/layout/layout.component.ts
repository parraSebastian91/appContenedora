import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { faBars } from '@fortawesome/free-solid-svg-icons';

import {AuthUserService} from './../../_services/auth/auth-user.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private _AuthUserService:AuthUserService
  ) { 
    this.menu = this._AuthUserService.getMenuItems();
  }
  menu 
  faBars = faBars

  mode = new FormControl('over');
  shouldRun = true

  ngOnInit() {
  }

  testClick() {

  }

}
