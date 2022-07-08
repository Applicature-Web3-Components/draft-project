import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { W3sIconModule } from '@applicature/ngx-web3-synergy';

import { SidebarComponent } from './sidebar.component';


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
    W3sIconModule
  ]
})
export class SidebarModule { }
