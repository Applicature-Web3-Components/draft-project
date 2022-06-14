import { Component, OnInit } from '@angular/core';

import { aucToWei } from '@applicature/components';

import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-faucet',
  templateUrl: './faucet.component.html',
  styleUrls: ['./faucet.component.scss']
})
export class FaucetComponent implements OnInit {

  amount: string = aucToWei(1, 18);
  contractToken: string = environment.faucetTokenAddress;

  constructor() { }

  ngOnInit(): void {
  }

}
