import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { faBars, faSignOutAlt, faEllipsisV } from '@fortawesome/free-solid-svg-icons';

import { AuthUserService } from './../../_services/auth/auth-user.service'

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  constructor(
    private _AuthUserService: AuthUserService
  ) {
    this.menuNavegacion = this._AuthUserService.getMenuItems();
  }
  menuNavegacion;
  faBars = faBars
  faSignOutAlt = faSignOutAlt
  faEllipsisV = faEllipsisV

  mode = new FormControl('over');
  shouldRun = true

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  ngOnInit() {

  }

  signOut() {

  }

}
