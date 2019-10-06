import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { ListProcessComponent } from './component/list-process/list-process.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatRadioModule} from '@angular/material/radio';
import {FormsModule,ReactiveFormsModule,} from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatExpansionModule} from '@angular/material/expansion'; 
import {MatListModule} from '@angular/material/list'; 
import {MatMenuModule} from '@angular/material/menu'; 
import {MatDividerModule} from '@angular/material/divider'; 
import {MatCardModule} from '@angular/material/card'; 
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatTableModule} from '@angular/material/table'; 
import {MatButtonModule} from '@angular/material/button'; 
import {MatDialogModule} from '@angular/material/dialog'; 
import { NgxDropzoneModule } from 'ngx-dropzone';

import {AuthUserService} from './../../_services/auth/auth-user.service';
import { UploadDocComponent } from './component/upload-doc/upload-doc.component';

@NgModule({
  declarations: [LayoutComponent, ListProcessComponent, UploadDocComponent],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    MatSidenavModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    MatToolbarModule,
    MatExpansionModule,
    MatListModule,
    MatMenuModule,
    MatDividerModule,
    MatCardModule,
    MatFormFieldModule,
    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    NgxDropzoneModule
  ],
  providers:[
    AuthUserService
  ],
})
export class LayoutModule { }
