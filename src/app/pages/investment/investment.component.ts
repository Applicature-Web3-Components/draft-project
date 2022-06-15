import { Component } from '@angular/core';

import {
  AUC_SORT_DIRECTION, AucDialogService,
  AucTableHeaderItem,
  AucTableRow, AucTransferModalComponent,
  AucTransferModalData
} from '@applicature/components';
import { AS_COLOR_GROUP } from '@applicature/styles';

const TableData: AucTableRow[] = [
  {
    action: {
      value: 'Withdraw',
      icon: 'assets/images/icons/minus-red.svg'
    },
    tokens: [
      {
        value: '1.240123',
        icon: 'assets/images/network/eth.svg',
        withBg: true
      },
      {
        value: '5.2k',
        icon: 'assets/images/coin/usdt.svg',
        withBg: true
      }
    ],
    value: {
      value: '$10.4k',
    },
    time: {
      value: 'about 6 hours ago ↗',
      link: 'https://www.google.com/'
    }
  },
  {
    action: {
      value: 'Withdraw',
      icon: 'assets/images/icons/minus-red.svg'
    },
    tokens: [
      {
        value: '1.0...01234',
        icon: 'assets/images/network/eth.svg',
        withBg: true
      }
    ],
    value: {
      value: '$4.2k',
    },
    time: {
      value: 'about 6 hours ago ↗',
      link: 'https://www.google.com/'
    }
  },
  {
    action: {
      value: 'Invest',
      icon: 'assets/images/icons/plus-green.svg'
    },
    tokens: [
      {
        value: '500',
        icon: 'assets/images/coin/usdt.svg',
        withBg: true
      }
    ],
    value: {
      value: '$500',
    },
    time: {
      value: 'about 6 hours ago ↗',
      link: 'https://www.google.com/'
    }
  },
  {
    action: {
      value: 'Invest',
      icon: 'assets/images/icons/plus-green.svg'
    },
    tokens: [
      {
        value: '1.240123',
        icon: 'assets/images/network/eth.svg',
        withBg: true
      },
      {
        value: '5.2k',
        icon: 'assets/images/coin/usdt.svg',
        withBg: true
      }
    ],
    value: {
      value: '$10.4k',
    },
    time: {
      value: 'about 6 hours ago ↗',
      link: 'https://www.google.com/'
    }
  },
];

@Component({
  selector: 'app-investment',
  templateUrl: './investment.component.html',
  styleUrls: ['./investment.component.scss']
})
export class InvestmentComponent {

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
  public tableData: AucTableRow[] = [...TableData];
  public isLoadMore: boolean = true;

  constructor(
    private dialogService: AucDialogService
  ) {
  }

  loadMoreTable(): void {
    this.isLoadMore = false;
    this.tableData = [
      ...this.tableData,
      {
        ...TableData[1],
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

}
