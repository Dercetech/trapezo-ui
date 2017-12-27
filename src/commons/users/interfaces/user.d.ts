export interface User {
  user: string;
  displayName: string;
  email: string;
  roles: string[];
  password ?: string;
}
