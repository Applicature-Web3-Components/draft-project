import { ChangeDetectionStrategy, Component } from '@angular/core';

import { SidebarMenuItem } from './interfaces';
import { ROUTER_LINKS } from '../../enums';
import { PageIconsByUrl, PageTitlesByUrl } from '../../constants';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SidebarComponent {

  public menuItems: SidebarMenuItem[] = [
    {
      routerLink: ROUTER_LINKS.FAUCET,
      title: PageTitlesByUrl[ROUTER_LINKS.FAUCET],
      icon: PageIconsByUrl[ROUTER_LINKS.FAUCET]
    },
  ]

}
