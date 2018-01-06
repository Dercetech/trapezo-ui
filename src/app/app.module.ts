import { NgModule } from '@angular/core';
import {BrowserModule} from "@angular/platform-browser";
import {CommonModule} from "@angular/common";
import {HttpClientModule} from "@angular/common/http";

import {AppRoutingModule} from "./app-routing.module";
import {APP_CONFIG, APP_DI_CONFIG} from "./config/config.constants";

import {AppComponent} from './app.component';
import {TrapezoFrameworkServicesModule} from "../framework/trapezo-framework.module";
import {CommonServicesModule} from '../commons/common-services.module';
import {PagesModule} from "../pages/pages.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    // Angular modules
    BrowserModule,
    CommonModule,
    HttpClientModule,

    // Configured outsourced router module
    AppRoutingModule,

    // Framework
    TrapezoFrameworkServicesModule.forRoot(),

    // Commons Module
    CommonServicesModule.forRoot(),

    // Pages
    PagesModule
  ],
  providers: [

    { provide: APP_CONFIG, useValue: APP_DI_CONFIG },
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
