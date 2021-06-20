import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit {

  public sidenavOpen: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  public sidebarToggle()
  {
    this.sidenavOpen = !this.sidenavOpen;
  }


}
