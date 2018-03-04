import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { QuestionService } from '../question.service';
import { Router, ActivatedRoute } from '@angular/router';
import { AnswerService } from '../answer.service';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {
  question: any
  oldAnswer: any
  qid: any
  constructor(
    private _userService: UserService,
    private _questionService: QuestionService,
    private _answerService: AnswerService,
    private _router: Router,
    private _route: ActivatedRoute
  ) { }

  ngOnInit() {
    this._userService.getUser(data => {
      if (!data.user) {
        this._router.navigate(["/index"])
      }
    })
    this.question = Object
    this.oldAnswer = Object
    this._route.params.subscribe(params => {
      this.qid = params.qid
      this._questionService.getOne(this.qid, data => {
        this.question = data.question
      })
    })
  }
  like(aid) {
    this._answerService.getOne(aid, data => {
      this.oldAnswer = data.answer
      this.oldAnswer.likes += 1
      this._answerService.like(aid, this.oldAnswer, data => {
        this._questionService.getOne(this.qid, data => {
          this.question = data.question
        })
      })
    })
  }
}
