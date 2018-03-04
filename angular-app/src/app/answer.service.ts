import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class AnswerService {
  constructor(private _http: HttpClient) { }
  create(qid, answer, callback) {
    return this._http.post("/answersdb/" + qid, answer)
    .subscribe(data => callback(data))
  }
  getOne(aid, callback) {
    return this._http.get("/answersdb/" + aid)
    .subscribe(data => callback(data))
  }
  like(aid, oldAnswer, callback) {
    return this._http.put("/answersdb/" + aid, oldAnswer)
    .subscribe(data => callback(data))
  }
}
