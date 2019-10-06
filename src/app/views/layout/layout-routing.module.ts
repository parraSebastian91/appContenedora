import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LayoutComponent} from './layout.component'
import { ListProcessComponent } from './component/list-process/list-process.component'


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'list_process',
        component:ListProcessComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
