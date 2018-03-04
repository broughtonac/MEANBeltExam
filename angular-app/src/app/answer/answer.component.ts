import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-answer',
  templateUrl: './answer.component.html',
  styleUrls: ['./answer.component.css']
})
export class AnswerComponent implements OnInit {
  question: any
  answer: any
  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private _answerService: AnswerService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }
  reset() {
    this.answer = {
      title: "",
      description: "",
      likes: 0,
      poster: this._userService.getUser(data => this.answer.poster = data.user.name)
    }
  }
  ngOnInit() {
    this._userService.getUser(data => {
      if (!data.user) {
        this._router.navigate(["/index"])
      }
    })
    this.reset()
    this.question = Object
    this._route.params.subscribe(params => {
      let qid = params.qid
      this._questionService.getOne(qid, data => {
        this.question = data.question
      })
    })
  }
  create(qid) {
    this._answerService.create(qid, this.answer, data => {
      this._router.navigate(["/dashboard"])
    })
  }
}
