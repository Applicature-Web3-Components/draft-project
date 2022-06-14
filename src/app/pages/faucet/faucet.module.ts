import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AucFaucetModule } from '@applicature/components';

import { FaucetComponent } from './faucet.component';
import { FaucetRoutingModule } from './faucet-routing.module';



@NgModule({
  declarations: [
    FaucetComponent
  ],
  imports: [
    CommonModule,
    AucFaucetModule,
    FaucetRoutingModule
  ]
})
export class FaucetModule { }
