import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  user: any
  questions: any
  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private _router: Router
  ) { }
  ngOnInit() {
    this.user = Object
    this._userService.getUser(data => {
      if (data.user) {
        this.user = data.user
      }
      else {
        this._router.navigate(["/index"])
      }
    })
    this._questionService.getAll(data => {
      this.questions = data.questions
    })
  }
  search(query) {
    if (query) {
      let questions
      this._questionService.search(query, data => {
        this.questions = data.questions
      })
    }
    else {
      this._questionService.getAll(data => {
        this.questions = data.questions
      })
    }
  }
}