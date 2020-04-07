import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 private _userIsAuthenticated = false;

 get userIsAuthenicated() {
    return this._userIsAuthenticated;
  }

  constructor() { }

   logIn() {
    this._userIsAuthenticated = true;
  }

  logOut() {
    this._userIsAuthenticated = false;
  }
}
