import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class QuestionService {
  constructor(private _http: HttpClient) { }
  create(question, callback) {
    return this._http.post("/questionsdb", question)
    .subscribe(data => callback(data))
  }
  getAll(callback) {
    return this._http.get("/questionsdb")
    .subscribe(data => callback(data))
  }
  getOne(qid, callback) {
    return this._http.get("/questionsdb/" + qid)
    .subscribe(data => callback(data))
  }
  search(query, callback) {
    return this._http.get("/questionsdb/search/" + query)
    .subscribe(data => callback(data))
  }
}
