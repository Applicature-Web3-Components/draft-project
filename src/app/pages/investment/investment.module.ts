import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { W3sButtonModule, W3sDialogModule, W3sTableModule, W3sModalsModule } from '@applicature/ngx-web3-synergy';

import { InvestmentComponent } from './investment.component';
import { InvestmentRoutingModule } from './investment-routing.module';


@NgModule({
  declarations: [
    InvestmentComponent
  ],
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    W3sTableModule,
    W3sButtonModule,
    W3sDialogModule,
    W3sModalsModule
  ]
})
export class InvestmentModule {
}
