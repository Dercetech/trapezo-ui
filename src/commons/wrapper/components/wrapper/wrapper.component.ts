import {AfterViewInit, Component, HostListener, Inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {MatSidenav} from "@angular/material";

import {Subscription} from "rxjs/Subscription";

import {APP_CONFIG} from "../../../../app/config/config.constants";
import {AppConfig} from "../../../../app/config/config.interface";

import {AuthService} from "../../../../framework/authentication/services/auth-service";
import {InterfaceService} from "../../services/interface.service";
import {SideMenuService} from "../../services/side-menu.service";
import {ToolbarService} from "../../services/toolbar.service";

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.scss']
})
export class WrapperComponent implements OnInit, OnDestroy, AfterViewInit {

  // Interface
  isMobileMode:boolean = false;

  // Navigation bar
  navMode:string = 'over';
  shouldStartOpened:boolean = false;

  // Toolbar
  toolbarTitle:string;
  showMenuButton:boolean = true;
  showNotifications:boolean = true;
  showMessages:boolean = true;

  @ViewChild('sidenav') sidenav:MatSidenav;

  private subscriptions:Subscription[] = [];

  constructor(private router: Router,
              @Inject(APP_CONFIG) private config: AppConfig,
              @Inject(AuthService) private authService: AuthService,
              @Inject(InterfaceService) private interfaceService: InterfaceService,
              @Inject(SideMenuService) private sideMenuService: SideMenuService,
              @Inject(ToolbarService) private toolbarService: ToolbarService) {

    // Reactive title setting
    this.subscriptions.push(this.toolbarService.title$.subscribe( (title:string) => this.toolbarTitle = title));
  }

  ngOnInit() {
    this.sideMenuService.setSideMenu(this.sidenav);     // rem: @ViewChild only makes sidenav available onInit, not at construct time
    this.initLayoutForWindowSize();
  }

  ngAfterViewInit() {

    // Adjust height for mobile ios devices
    const wrapper: any = document.getElementsByClassName('hack-to-fix-ios-height')[0];
    if (wrapper && this.interfaceService.iOS()) {
      let height = wrapper.offsetHeight;
      height -= 74;

      // Mobile Safari fix for footer nav
    }
  }

  ngOnDestroy(){
    this.subscriptions.forEach( subscription => subscription.unsubscribe() );
  }

  onOutletActivated(component){
    if(component && component.broadcastTitle){
      component.broadcastTitle();
    }
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.refreshLayoutForNewsize(event.target.innerWidth);
  }



  initLayoutForWindowSize(){
    // this.sidenav.onOpen.subscribe(() => {});
    this.refreshLayoutForNewsize(window.innerWidth);
    this.shouldStartOpened = (window.innerWidth >= this.config.COLLAPSE_MENU_UNDER) ? true : false;
  }

  private refreshLayoutForNewsize(newSize:number){
    if (newSize >= this.config.COLLAPSE_MENU_UNDER) {
      this.navMode = 'side';
      this.showMenuButton = false;
      this.isMobileMode = false;
      this.sideMenuService.openMenu()
    }

    else if (newSize >= this.config.MOBILE_DISPLAY_UNDER) {
      this.navMode = 'over';
      this.showMenuButton = true;
      this.isMobileMode = false;
      this.sideMenuService.closeMenu();
    }

    else{
      this.navMode = 'over';
      this.showMenuButton = true;
      this.isMobileMode = true;
      this.sideMenuService.closeMenu();
    }
  }

  menuItemClicked(){
    if(this.navMode === 'over'){
      this.sideMenuService.closeMenu();
    }
  }

  toggleMenu(){
    this.sideMenuService.toggleMenu();
  }

  onLogoClicked(){
    this.router.navigate(['/', 'secure', 'dashboard']);
  }

  onLoggout(){
    this.authService.logout();
    this.router.navigate(['/']);
  }
}
