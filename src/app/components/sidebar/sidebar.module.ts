import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar.component';
import { RouterModule } from '@angular/router';
import { AucIconModule } from '@applicature/components';


@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    AucIconModule
  ]
})
export class SidebarModule { }
