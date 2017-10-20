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
import { HttpModule } from "@angular/http";
import { UserService } from "app/user-account/user.service";
import { UserClass } from "app/user-account/user";
import { UserLoginComponent } from './user-login/user-login.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    DashboardContentComponent,
    CatItemComponent,
    SideMenuComponent,
    UserLoginComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule
  ],
  providers: [SideMenuService,
              UserService,
              UserClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
