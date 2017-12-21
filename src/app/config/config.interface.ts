export interface AppConfig {

  API: {
    ROOT: string,
    AUTHENTICATE: string,
    USERS: string,
    [key: string]: string,
  };

  COLLAPSE_MENU_UNDER: number;
  MOBILE_DISPLAY_UNDER: number;
}
