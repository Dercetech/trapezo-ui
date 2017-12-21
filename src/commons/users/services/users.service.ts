import {BehaviorSubject} from "rxjs/BehaviorSubject";
import {Inject, Injectable, OnDestroy} from "@angular/core";

import {Subscription} from "rxjs/Subscription";
import {Observable} from "rxjs/Observable";
import {HttpClient} from "@angular/common/http";

import {User} from "../interfaces/user";
import {AuthService} from "../../../framework/authentication/services/auth-service";
import {APP_CONFIG} from "../../../app/config/config.constants";
import {AppConfig} from "../../../app/config/config.interface";



@Injectable()
export class UsersService implements OnDestroy {

  private _users$: BehaviorSubject<User[]> = new BehaviorSubject([]);
  readonly users$: Observable<User[]> = this._users$.asObservable();

  // Subscriptions
  private subscriptions:Subscription[] = [];

  constructor(private httpClient:HttpClient,
              @Inject(APP_CONFIG) private config: AppConfig,
              @Inject(AuthService) private authService: AuthService){

    // Observe auth events
    this.subscriptions.push(this.authService.authChanged$.subscribe( data => this.onAuthenticationChanged(data) ) );
  }

  ngOnDestroy(){
    this.subscriptions.forEach( subscription => subscription.unsubscribe() );
  }

  private onAuthenticationChanged(data){
    switch(data){
      case 'auth'     : this.onUserAuthenticated(); break;
      case 'signout'  : this.onUserLoggedOut(); break;
      default         : {};
    }
  }

  private onUserAuthenticated(){ }

  private onUserLoggedOut(){
    this._users$.next([]);
  }

  reloadUsers():void{
    const url = this.config.API.USERS;
    this.httpClient.get(url).first().subscribe( (data:{ users: User[] }) => this._users$.next(data.users) );

  }

}
