import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AucButtonModule, AucDialogModule, AucTableModule, ModalsModule } from '@applicature/components';

import { InvestmentComponent } from './investment.component';
import { InvestmentRoutingModule } from './investment-routing.module';


@NgModule({
  declarations: [
    InvestmentComponent
  ],
  imports: [
    CommonModule,
    InvestmentRoutingModule,
    AucTableModule,
    AucButtonModule,
    AucDialogModule,
    ModalsModule
  ]
})
export class InvestmentModule {
}
