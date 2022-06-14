import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ROUTER_LINKS } from './enums';

const routes: Routes = [
  {
    path: '',
    redirectTo: ROUTER_LINKS.FAUCET,
    pathMatch: 'full'
  },
  {
    path: ROUTER_LINKS.FAUCET,
    loadChildren: () => import('./pages/faucet/faucet.module').then(m => m.FaucetModule)
  },
  {
    path: '**',
    redirectTo: ROUTER_LINKS.FAUCET,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
