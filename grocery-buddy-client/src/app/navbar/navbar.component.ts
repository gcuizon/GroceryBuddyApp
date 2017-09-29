import { Component, OnInit } from '@angular/core';
import { SideMenuService } from '../side-menu/side-menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private sideMenuSrvc : SideMenuService) { }

  ngOnInit() {
  }

  toggleMenu(){
    this.sideMenuSrvc.toggleMenu();
  }

}
