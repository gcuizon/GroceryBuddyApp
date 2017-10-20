import { Component, OnInit, AfterContentInit, DoCheck, AfterViewInit, OnChanges } from '@angular/core';
import { SideMenuService } from '../side-menu/side-menu.service';
import { UserService } from "app/user-account/user.service";
import {UserClass} from 'app/user-account/user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor(private sideMenuSrvc : SideMenuService,
              private userService : UserService,
              private activeUser : UserClass) { 

  }

  ngOnInit() {
        //this.printThisUser(this.userService.user);
        
  }


  printThisUser(usser:UserClass){
    console.log("noh? " + usser.id);
    console.log("noh? " + usser.name);
    console.log("noh? " + usser.password);
    console.log("noh? " + usser.role);
  }

  toggleMenu(){
    this.sideMenuSrvc.toggleMenu();
  }

}
