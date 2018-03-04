import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { ShowComponent } from './show/show.component';

const routes: Routes = [
  {path: "index", component: LoginComponent},
  {path: "dashboard", component: DashboardComponent},
  {path: "new_question", component: QuestionComponent},
  {path: "questions/:qid/new_answer", component: AnswerComponent},
  {path: "questions/:qid", component: ShowComponent},
  {path: "", pathMatch: "full", redirectTo: "/index"}, // set landing route (it's set to default here)
  {path: "**", redirectTo: "/index"} // set catch route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
