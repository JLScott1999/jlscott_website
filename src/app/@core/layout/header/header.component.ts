import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  public sidenavOpen: boolean = false;
  public appDialogOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public sidebarToggle()
  {
    this.sidenavOpen = !this.sidenavOpen;
  }

  public appDialogToggle()
  {
    this.appDialogOpen = !this.appDialogOpen;
  }

}
