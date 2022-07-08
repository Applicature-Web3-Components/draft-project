import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { takeUntil } from 'rxjs';

import {
  W3S_SORT_DIRECTION,
  W3sDialogService,
  W3sTableHeaderItem,
  W3sTableRow,
  W3sTransferModalComponent,
  W3sTransferModalData,
  W3sWalletConnectService,
  BaseSubscriber
} from '@applicature/ngx-web3-synergy';
import { AS_COLOR_GROUP } from '@applicature/styles';

import { tableDataMock } from '../../mocks/table-data-mock';

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InvestmentComponent extends BaseSubscriber implements OnInit {

  public COLORS = AS_COLOR_GROUP;

  public tableHeaders: W3sTableHeaderItem[] = [
    {
      position: 1,
      rowKey: 'action',
      value: 'Action',
    },
    {
      position: 2,
      rowKey: 'tokens',
      value: 'Tokens',
    },
    {
      position: 3,
      rowKey: 'value',
      value: 'Value',
    },
    {
      position: 4,
      rowKey: 'time',
      value: 'Time',
      sort: {
        sortBy: 'time',
        sortDirection: W3S_SORT_DIRECTION.DESC
      }
    }
  ];
  public tableData: W3sTableRow[] = [...tableDataMock];
  public isLoadMore: boolean = true;
  public authorization: boolean = false;

  constructor(
    private dialogService: W3sDialogService,
    private _walletConnectService: W3sWalletConnectService,
    private _cdr: ChangeDetectorRef,
  ) {
    super();
  }

  ngOnInit() {
    this.authorization = this._walletConnectService.connectionState.connected;

    this._walletConnectService.connectionState$
      .subscribe(connectionState => {
        this.authorization = connectionState.connected;
        this._cdr.markForCheck();
      });
  }

  loadMoreTable(): void {
    this.isLoadMore = false;
    this.tableData = [
      ...this.tableData,
      {
        ...tableDataMock[1],
        time: {
          value: 'about 6 hours ago ↗',
          link: 'https://www.google.com/'
        }
      }
    ]
  }

  tableSort(): void {
    this.tableData = this.tableData.reverse();
  }

  showInvestModal(): void {
    const data: W3sTransferModalData = {
      header: 'Invest',
      symbol: 'USDT',
      allowance: '1000000000000000000',
      max: '10000000000000000000',
      approveButton: 'Approve',
      approvingButton: 'Approving...',
      confirmButton: 'Invest',
      approve: () => {
        return Promise.resolve();
      },
      confirm: () => {
        return Promise.resolve();
      }
    };

    this.dialogService.open<W3sTransferModalComponent, W3sTransferModalData>(W3sTransferModalComponent,
      {
        data,
      });
  }

  connectWallet(): void {
    this._walletConnectService.connect()
      .pipe(takeUntil(this.notifier))
      .subscribe((connectionState) => {
        this.authorization = connectionState.connected;
      });
  }

}
