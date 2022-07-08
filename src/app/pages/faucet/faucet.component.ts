import { Component } from '@angular/core';

import { w3sToWei } from '@applicature/ngx-web3-synergy';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.scss']
})
export class FaucetComponent {
  amount: string = w3sToWei(1, 18);
  contractToken: string = environment.faucetTokenAddress;
}
