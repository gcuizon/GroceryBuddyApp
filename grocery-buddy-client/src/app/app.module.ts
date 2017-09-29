import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DashboardContentComponent } from './dashboard/dashboard-content/dashboard-content.component';
import { CatItemComponent } from './dashboard/cat-item/cat-item.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { SideMenuService } from './side-menu/side-menu.service';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    DashboardContentComponent,
    CatItemComponent,
    SideMenuComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [SideMenuService],
  bootstrap: [AppComponent]
})
export class AppModule { }
