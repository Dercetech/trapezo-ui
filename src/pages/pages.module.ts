import {NgModule} from "@angular/core";
import {CustomMaterialModule} from "../commons/widgets/material/material.module";
import {BrowserModule} from "@angular/platform-browser";
import {HttpClientModule} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {AngularFontAwesomeModule} from "angular-font-awesome";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {CommonComponentsModule} from "../commons/common-components.module";

import {LoginComponent} from "./public/login/login.component";
import {RouterModule} from "@angular/router";
import {DashboardComponent} from "./secure/dashboard/dashboard.component";
import {AdminUserComponent} from "./secure/admin-user/admin-user.component";
import {AddUserComponent} from "./secure/admin-user/add-user/add-user.component";

@NgModule({
  declarations:[
    LoginComponent,

    DashboardComponent,

    AdminUserComponent,
    AddUserComponent
  ],
  imports:[
    BrowserModule,
    RouterModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,

    CustomMaterialModule,

    // Common components
    CommonComponentsModule
  ],
  exports:[
    LoginComponent,

    DashboardComponent,

    AdminUserComponent,
    AddUserComponent
  ]
})

export class PagesModule{}
