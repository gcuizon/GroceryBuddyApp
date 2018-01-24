import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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

import { Routes, RouterModule } from '@angular/router';

const appRoutes: Routes = [
  {path:'dashboard', component: DashboardComponent},
];

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
    HttpModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SideMenuService,
              UserService,
              UserClass],
  bootstrap: [AppComponent]
})
export class AppModule { }
