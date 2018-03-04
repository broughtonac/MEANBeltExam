import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: any
  constructor(private _userService: UserService, private _router: Router) { }
  reset() {
    this.user = {
      name: ""
    }
  }
  ngOnInit() {
    this.reset()
    this._userService.logout()
  }
  login() {
    this._userService.setUser(this.user, data => {
      this.reset()
      this._router.navigate(["/dashboard"])
    })
  }
}
