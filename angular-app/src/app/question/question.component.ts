import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {
  private question: any
  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private _router: Router,
    private _route: ActivatedRoute  
  ) { }
  reset() {
    this.question = {
      title: "",
      description: "",
      poster: ""
    }
  }
  ngOnInit() {
    this.reset()
    this._userService.getUser(data => {
      if (!data.user) {
        this._router.navigate(["/index"])
      }
      else {
        this.question.poster = data.user.name
      }
    })
  }
  create() {
    this._questionService.create(this.question, data => {
      this._router.navigate(["/dashboard"])
    })
  }
}
