import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClient, HttpClientModule} from "@angular/common/http"
import {FormsModule} from "@angular/forms"
import { QuestionService } from './question.service';
import { AnswerService } from './answer.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserService } from './user.service';
import { QuestionComponent } from './question/question.component';
import { AnswerComponent } from './answer/answer.component';
import { ViewComponent } from './view/view.component';
import { ShowComponent } from './show/show.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    QuestionComponent,
    AnswerComponent,
    ViewComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    QuestionService,
    AnswerService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
