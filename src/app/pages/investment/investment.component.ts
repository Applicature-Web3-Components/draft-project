import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnInit
} from '@angular/core';
import { takeUntil } from 'rxjs';

import {
  AUC_SORT_DIRECTION, AucDialogService,
  AucTableHeaderItem,
  AucTableRow, AucTransferModalComponent,
  AucTransferModalData, AucWalletConnectService, BaseSubscriber
} from '@applicature/components';
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

  public tableHeaders: AucTableHeaderItem[] = [
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
        sortDirection: AUC_SORT_DIRECTION.DESC
      }
    }
  ];
  public tableData: AucTableRow[] = [...tableDataMock];
  public isLoadMore: boolean = true;
  public authorization: boolean = false;

  constructor(
    private dialogService: AucDialogService,
    private _walletConnectService: AucWalletConnectService,
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
    const data: AucTransferModalData = {
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

    this.dialogService.open<AucTransferModalComponent, AucTransferModalData>(AucTransferModalComponent,
      {
        data,
      });
  }

  connectWallet(): void {
    this._walletConnectService.connectWallet(false)
      .pipe(takeUntil(this.notifier))
      .subscribe((connectionState) => {
        this.authorization = connectionState.connected;
      });
  }

}
