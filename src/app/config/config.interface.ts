export interface AppConfig {

  API: {
    ROOT: string,
    AUTHENTICATE: string,
    USERS: string,
    [key: string]: string,
  };

  CONTENTS: {

    // Configurable texts
    APP_TITLE: string,

    // Copyright
    COPYRIGHT: string,
    COPYRIGHT_BRAND: string,
    COPYRIGHT_YEAR: string,

    // Footer links
    FOOTER_BRAND_LINK: string,
    FOOTER_TWITTER: string,
    FOOTER_FACEBOOK: string,
    FOOTER_YOUTUBE: string,
    FOOTER_GITHUB: string,
    FOOTER_LINKEDIN: string,

    // Generic key/values
    [key: string]: string,
  };

  INTERFACE: {

    TOOLBAR_NOTIFICATIONS: boolean,
    TOOLBAR_MESSAGES: boolean,
    MENU_BOTTOM_OPTIONS: boolean,

    // Generic key/values
    [key: string]: boolean,
  };

  COLLAPSE_MENU_UNDER: number;
  MOBILE_DISPLAY_UNDER: number;
}
