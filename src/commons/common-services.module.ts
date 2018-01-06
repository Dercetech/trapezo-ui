import {ModuleWithProviders, NgModule} from "@angular/core";

import {InterfaceService} from "./wrapper/services/interface.service";
import {SideMenuService} from "./wrapper/services/side-menu.service";
import {ToolbarService} from "./wrapper/services/toolbar.service";
import {UsersService} from "./users/services/users.service";

import {CustomValidators} from './validators/custom-validators';

@NgModule({
  declarations: [],
  imports: [],
  exports: []
})

export class CommonServicesModule {

  static forRoot(): ModuleWithProviders{
    return{
      ngModule: CommonServicesModule,
      providers: [
        InterfaceService,
        SideMenuService,
        ToolbarService,

        CustomValidators,

        UsersService
      ]
    };
  }
}
