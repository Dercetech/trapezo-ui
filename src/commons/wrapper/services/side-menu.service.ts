import {MatSidenav} from "@angular/material";

export class SideMenuService {

  sideMenu: MatSidenav;

  setSideMenu(sideMenu:MatSidenav){
    this.sideMenu = sideMenu;
  }

  openMenu(){
    if(this.sideMenu){
      this.sideMenu.open();
    }
  }

  closeMenu(){
    if(this.sideMenu){
      this.sideMenu.close();
    }
  }

  toggleMenu(){
    if(this.sideMenu){
      this.sideMenu.opened ? this.sideMenu.close() : this.sideMenu.open();
    }
  }
}
