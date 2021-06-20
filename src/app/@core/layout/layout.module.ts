import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SimplebarAngularModule } from 'simplebar-angular';
import { SidenavLinkComponent } from './header/sidenav-link/sidenav-link.component';
import { TopnavLinkComponent } from './header/topnav-link/topnav-link.component';

@NgModule({
  declarations: [LayoutComponent, HeaderComponent, FooterComponent, SidenavLinkComponent, TopnavLinkComponent],
  imports: [CommonModule, SimplebarAngularModule],
  exports: [LayoutComponent],
})
export class LayoutModule {}
