import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './pages/login/login.component'
import { ErrorPageComponent } from './pages/error/error-page/error-page.component'

const routes: Routes = [
  {
    path:'page/login',
    component: LoginComponent
  },
  {
    path:'page/error',
    component: ErrorPageComponent
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
