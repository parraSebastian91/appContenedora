import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component'

const routes: Routes = [
  {
    path:'page/login',
    component: LoginComponent
  },
  {
    path:'layout',
    loadChildren:'./layout/layout.module#LayoutModule'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule { }
