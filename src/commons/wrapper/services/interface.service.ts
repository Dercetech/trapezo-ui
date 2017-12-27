import {Inject, OnDestroy} from '@angular/core';
import {Subscription} from 'rxjs/Subscription';

import {AuthService} from '../../../framework/authentication/services/auth-service';
import {TokenService} from '../../../framework/authentication/services/token-service';

export class InterfaceService implements OnDestroy{

  private adminControlsAvailable: boolean = false;

  private subscriptions: Subscription[] = [];

  constructor(@Inject(AuthService) private authService: AuthService,
              @Inject(TokenService) private tokenService: TokenService) {

    // Observe auth events
    this.subscriptions.push(this.authService.authChanged$.subscribe( data => this.onAuthenticationChanged(data) ) );
  }

  ngOnDestroy() {
    this.subscriptions.forEach( subscription => subscription.unsubscribe() );
  }

  private onAuthenticationChanged(data) {
    switch (data) {
      case 'auth'     : this.onUserAuthenticated(); break;
      case 'signout'  : this.onUserLoggedOut(); break;
      default         : {}
    }
  }

  private onUserAuthenticated() {
    console.log('checking roles')
    if(this.tokenService.checkRoles(['admin'])){
      this.adminControlsAvailable = true;
    }
  }

  private onUserLoggedOut() {
    this.adminControlsAvailable = false;
  }

  isAdminControlsAvailable(): boolean{
    return this.adminControlsAvailable;
  }

  iOS():boolean {
    const iDevices = [
      'iPad Simulator',
      'iPhone Simulator',
      'iPod Simulator',
      'iPad',
      'iPhone',
      'iPod'
    ];

    if (!!navigator.platform) {
      while (iDevices.length) {
        if (navigator.platform === iDevices.pop()){ return true; }
      }
    }

    return false;
  }

}
