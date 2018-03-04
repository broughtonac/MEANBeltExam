import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class UserService {
  constructor(private _http: HttpClient) { }
  setUser(user, callback) {
    return this._http.post("/usersdb", user)
    .subscribe(data => callback(data))
  }
  getUser(callback) {
    return this._http.get("/usersdb")
    .subscribe(data => callback(data))
  }
  logout() {
    return this._http.get("/logoutdb")
    .subscribe()
  }
}
