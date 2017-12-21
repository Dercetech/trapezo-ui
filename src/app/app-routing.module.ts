import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";

import {AuthAutoRedirectService} from "../framework/authentication/services/auth-auto-redirect.service";
import {AuthGuardService} from "../framework/authentication/services/auth-guard.service";

import {WrapperComponent} from "../commons/wrapper/components/wrapper/wrapper.component";
import {LoginComponent} from "../pages/public/login/login.component";
import {DashboardComponent} from "../pages/secure/dashboard/dashboard.component";
import {AdminUserComponent} from "../pages/secure/admin-user/admin-user.component";
import {AddUserComponent} from "../pages/secure/admin-user/add-user/add-user.component";

const appRoutes: Routes = [

  // Default page: display login component unless an authentication token is present in local storage
  { path: '', component: LoginComponent,
    data: { },
    canActivate: [AuthAutoRedirectService]
  },

  // Secure area, default for pre-authenticated users
  { path: 'secure', component: WrapperComponent,
    data: { },
    canActivate: [AuthGuardService],

    children: [
      { path: '', pathMatch: 'full', redirectTo: 'dashboard'},
      { path: 'dashboard', component: DashboardComponent, data: {}, canActivate: [] },

      { path: 'admin', data: { roles: [] }, canActivate: [AuthGuardService], children: [
        { path: 'users', data: {}, canActivate: [], children: [
          { path: '', component: AdminUserComponent },
          { path: 'add-user', component: AddUserComponent }
        ]},
      ]}
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {useHash: false})
  ],
  exports: [
    RouterModule    // configured router module
  ]
})

export class AppRoutingModule {

}
