import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LayoutComponent} from './layout.component'
import { ListProcessComponent } from './component/list-process/list-process.component'
import {UploadDocComponent} from './component/upload-doc/upload-doc.component'

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children:[
      {
        path:'list_process',
        component:ListProcessComponent
      },
      {
        path:'upload',
        component:UploadDocComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
