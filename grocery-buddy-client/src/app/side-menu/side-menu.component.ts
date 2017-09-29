import { Component, OnInit, trigger,state, style, transition, animate } from '@angular/core';
import { SideMenuService } from './side-menu.service';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css'],
  animations:[
    trigger('sideMenuState', [
      state('hidden', style({
        'width': '0px' 
      })),
      state('shown', style({
        'width': '250px' 
      })),
      transition('shown => hidden', animate(100)),
      transition('hidden => shown', animate(100))
    ])
  ]
})
export class SideMenuComponent implements OnInit {
  menuState = 'hidden';
  
  
  constructor(private sideMenuSrvc : SideMenuService) { }

  ngOnInit() {
    
    this.sideMenuSrvc.isToggled.subscribe(
      (showMenu:boolean) => {
        // toggle the side menu bar
        this.menuState = (showMenu == true? 'shown' : 'hidden');
      }
    );
  }

  toggleMenu(){
    this.sideMenuSrvc.toggleMenu();
  }


}
