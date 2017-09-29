import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

export class SideMenuService implements OnInit{
    showSideMenu: boolean;
    isToggled = new EventEmitter<boolean>();

    constructor(){}

    ngOnInit(){
    }

    closeSideMenuAction() {
        this.showSideMenu = false;
    }

    showSideMenuAction() {
        this.showSideMenu = true;
    }

    toggleMenu() {
       this.showSideMenu = this.showSideMenu == true ? false : true;
       this.isToggled.emit(this.showSideMenu);
    }

}