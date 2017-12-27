import { InjectionToken } from "@angular/core";
import {AppConfig} from "./config.interface";
import {environment} from "../../environments/environment";

const apiEndpoint = environment.api;

export const APP_DI_CONFIG: AppConfig = {

  API: {
    ROOT: apiEndpoint,
    AUTHENTICATE: apiEndpoint + '/authenticate',
    USERS: apiEndpoint + '/users',
  },


  // Configurable texts
  CONTENTS: {

    APP_TITLE: 'trapezo',

    // Copyright
    COPYRIGHT: null,
    COPYRIGHT_BRAND: 'Dercetech',
    COPYRIGHT_YEAR: '2016 - 2018',

    // Footer links
    FOOTER_BRAND_LINK: 'http://www.dercetech.com',
    FOOTER_TWITTER: 'https://twitter.com/dercetech',
    FOOTER_FACEBOOK: 'https://www.facebook.com/dercetech/',
    FOOTER_YOUTUBE: 'https://www.youtube.com/channel/UC3ZxAsW2xtaP6IYS5IEeLuw?view_as=subscriber',
    FOOTER_GITHUB: 'https://github.com/Dercetech',
    FOOTER_LINKEDIN: null,

    // Generic key/values
  },

  // Configurable widgets
  INTERFACE: {

    TOOLBAR_NOTIFICATIONS : false,
    TOOLBAR_MESSAGES      : false,
    MENU_BOTTOM_OPTIONS   : false,
  },

  COLLAPSE_MENU_UNDER: 960,
  MOBILE_DISPLAY_UNDER: 600     // Make sure to also update styles.variables.scss "$MOBILE_DISPLAY_UNDER" constant
};

export let APP_CONFIG = new InjectionToken< AppConfig >( 'app.config' );
