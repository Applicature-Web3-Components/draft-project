import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W3sFaucetModule } from '@applicature/ngx-web3-synergy';

import { FaucetComponent } from './faucet.component';
import { FaucetRoutingModule } from './faucet-routing.module';


@NgModule({
  declarations: [
    FaucetComponent
  ],
  imports: [
    CommonModule,
    W3sFaucetModule,
    FaucetRoutingModule
  ]
})
export class FaucetModule { }
