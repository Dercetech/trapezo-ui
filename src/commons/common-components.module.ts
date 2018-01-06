import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {RouterModule} from "@angular/router";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FlexLayoutModule} from "@angular/flex-layout";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import {AngularFontAwesomeModule} from "angular-font-awesome";

import {CustomMaterialModule} from "./widgets/material/material.module";
import {LoadingOverlayComponent} from "./widgets/loading-overlay/loading-overlay.component";

import {WrapperComponent} from "./wrapper/components/wrapper/wrapper.component";
import {SecondaryToolbarComponent} from "./wrapper/components/secondary-toolbar/secondary-toolbar.component";

@NgModule({
  declarations: [
    WrapperComponent,
    SecondaryToolbarComponent,
    LoadingOverlayComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    FlexLayoutModule,
    AngularFontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    WrapperComponent,
    SecondaryToolbarComponent,
    LoadingOverlayComponent
  ]
})

export class CommonComponentsModule {}
