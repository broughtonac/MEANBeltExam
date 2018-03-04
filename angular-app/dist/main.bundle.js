webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/answer.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var AnswerService = /** @class */ (function () {
    function AnswerService(_http) {
        this._http = _http;
    }
    AnswerService.prototype.create = function (qid, answer, callback) {
        return this._http.post("/answersdb/" + qid, answer)
            .subscribe(function (data) { return callback(data); });
    };
    AnswerService.prototype.getOne = function (aid, callback) {
        return this._http.get("/answersdb/" + aid)
            .subscribe(function (data) { return callback(data); });
    };
    AnswerService.prototype.like = function (aid, oldAnswer, callback) {
        return this._http.put("/answersdb/" + aid, oldAnswer)
            .subscribe(function (data) { return callback(data); });
    };
    AnswerService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], AnswerService);
    return AnswerService;
}());
exports.AnswerService = AnswerService;


/***/ }),

/***/ "./src/app/answer/answer.component.css":
/***/ (function(module, exports) {

module.exports = "p {\n    color: red;\n}"

/***/ }),

/***/ "./src/app/answer/answer.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"\" [routerLink]=\"['/dashboard']\">home</a>\n|\n<a href=\"\" [routerLink]=\"['/questions', question._id]\">go to question</a>\n|\n<a href=\"\" [routerLink]=\"['/index']\">logout</a>\n<h1>{{question.title}}</h1>\n<h4>{{question.description}}</h4>\n<fieldset>\n  <legend>answer</legend>\n  <form method=\"POST\" (submit)=\"create(question._id)\">\n  answer:\n  <input\n    type=\"text\"\n    name=\"title\"\n    required\n    minlength=\"5\"\n    [(ngModel)]=\"answer.title\"\n    #title=\"ngModel\"\n  >\n  <p *ngIf=\"title.errors\">\n    answer must be at least 5 chars\n  </p>\n  details:\n  <input\n    type=\"text\"\n    name=\"description\"\n    [(ngModel)]=\"answer.description\"\n  >\n  <br>\n  <input *ngIf=\"!title.errors\" type=\"submit\" value=\"add\">\n  </form>\n</fieldset>"

/***/ }),

/***/ "./src/app/answer/answer.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var question_service_1 = __webpack_require__("./src/app/question.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var answer_service_1 = __webpack_require__("./src/app/answer.service.ts");
var AnswerComponent = /** @class */ (function () {
    function AnswerComponent(_userService, _questionService, _answerService, _router, _route) {
        this._userService = _userService;
        this._questionService = _questionService;
        this._answerService = _answerService;
        this._router = _router;
        this._route = _route;
    }
    AnswerComponent.prototype.reset = function () {
        var _this = this;
        this.answer = {
            title: "",
            description: "",
            likes: 0,
            poster: this._userService.getUser(function (data) { return _this.answer.poster = data.user.name; })
        };
    };
    AnswerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser(function (data) {
            if (!data.user) {
                _this._router.navigate(["/index"]);
            }
        });
        this.reset();
        this.question = Object;
        this._route.params.subscribe(function (params) {
            var qid = params.qid;
            _this._questionService.getOne(qid, function (data) {
                _this.question = data.question;
            });
        });
    };
    AnswerComponent.prototype.create = function (qid) {
        var _this = this;
        this._answerService.create(qid, this.answer, function (data) {
            _this._router.navigate(["/dashboard"]);
        });
    };
    AnswerComponent = __decorate([
        core_1.Component({
            selector: 'app-answer',
            template: __webpack_require__("./src/app/answer/answer.component.html"),
            styles: [__webpack_require__("./src/app/answer/answer.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            question_service_1.QuestionService,
            answer_service_1.AnswerService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], AnswerComponent);
    return AnswerComponent;
}());
exports.AnswerComponent = AnswerComponent;


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var question_component_1 = __webpack_require__("./src/app/question/question.component.ts");
var answer_component_1 = __webpack_require__("./src/app/answer/answer.component.ts");
var show_component_1 = __webpack_require__("./src/app/show/show.component.ts");
var routes = [
    { path: "index", component: login_component_1.LoginComponent },
    { path: "dashboard", component: dashboard_component_1.DashboardComponent },
    { path: "new_question", component: question_component_1.QuestionComponent },
    { path: "questions/:qid/new_answer", component: answer_component_1.AnswerComponent },
    { path: "questions/:qid", component: show_component_1.ShowComponent },
    { path: "", pathMatch: "full", redirectTo: "/index" },
    { path: "**", redirectTo: "/index" } // set catch route
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.RouterModule.forRoot(routes)],
            exports: [router_1.RouterModule]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());
exports.AppRoutingModule = AppRoutingModule;


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var app_routing_module_1 = __webpack_require__("./src/app/app-routing.module.ts");
var app_component_1 = __webpack_require__("./src/app/app.component.ts");
var login_component_1 = __webpack_require__("./src/app/login/login.component.ts");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var forms_1 = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
var question_service_1 = __webpack_require__("./src/app/question.service.ts");
var answer_service_1 = __webpack_require__("./src/app/answer.service.ts");
var dashboard_component_1 = __webpack_require__("./src/app/dashboard/dashboard.component.ts");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var question_component_1 = __webpack_require__("./src/app/question/question.component.ts");
var answer_component_1 = __webpack_require__("./src/app/answer/answer.component.ts");
var view_component_1 = __webpack_require__("./src/app/view/view.component.ts");
var show_component_1 = __webpack_require__("./src/app/show/show.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
                dashboard_component_1.DashboardComponent,
                question_component_1.QuestionComponent,
                answer_component_1.AnswerComponent,
                view_component_1.ViewComponent,
                show_component_1.ShowComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_module_1.AppRoutingModule,
                http_1.HttpClientModule,
                forms_1.FormsModule
            ],
            providers: [
                question_service_1.QuestionService,
                answer_service_1.AnswerService,
                user_service_1.UserService
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/***/ (function(module, exports) {

module.exports = "<h1>welcome {{user.name}}</h1>\n<a href=\"\" [routerLink]=\"['/new_question']\">add a question</a>\n|\n<a href=\"\" [routerLink]=\"['/index']\">logout</a>\n<fieldset>\n  <legend>search</legend>\n  <input #box (keyup)=\"search(box.value)\">\n</fieldset>\n<fieldset>\n  <legend>questions</legend>\n  <table>\n    <tr>\n      <th>question</th>\n      <th>num answers</th>\n      <th>actions</th>\n    </tr>\n    <tr *ngFor=\"let q of questions\">\n      <td>{{q.title}}</td>\n      <td>{{q.answers.length}}</td>\n      <td>\n        <a href=\"\" [routerLink]=\"['/questions', q._id]\">show</a>\n        |\n        <a href=\"\" [routerLink]=\"['/questions', q._id, 'new_answer']\">answer</a></td>\n    </tr>\n  </table>\n</fieldset>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var question_service_1 = __webpack_require__("./src/app/question.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var DashboardComponent = /** @class */ (function () {
    function DashboardComponent(_userService, _questionService, _router) {
        this._userService = _userService;
        this._questionService = _questionService;
        this._router = _router;
    }
    DashboardComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.user = Object;
        this._userService.getUser(function (data) {
            if (data.user) {
                _this.user = data.user;
            }
            else {
                _this._router.navigate(["/index"]);
            }
        });
        this._questionService.getAll(function (data) {
            _this.questions = data.questions;
        });
    };
    DashboardComponent.prototype.search = function (query) {
        var _this = this;
        if (query) {
            var questions = void 0;
            this._questionService.search(query, function (data) {
                _this.questions = data.questions;
            });
        }
        else {
            this._questionService.getAll(function (data) {
                _this.questions = data.questions;
            });
        }
    };
    DashboardComponent = __decorate([
        core_1.Component({
            selector: 'app-dashboard',
            template: __webpack_require__("./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__("./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            question_service_1.QuestionService,
            router_1.Router])
    ], DashboardComponent);
    return DashboardComponent;
}());
exports.DashboardComponent = DashboardComponent;


/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = "p {\n    color: red;\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<fieldset>\n  <legend>login</legend>\n  <form method=\"POST\" (submit)=\"login()\">\n    name: <input\n      type=\"text\"\n      name=\"name\"\n      required\n      [(ngModel)]=\"user.name\"\n      #name=\"ngModel\">\n      <p *ngIf=\"name.errors\">name required</p>\n    <input *ngIf=\"!name.errors\" type=\"submit\" value=\"login\">\n  </form>\n</fieldset>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var LoginComponent = /** @class */ (function () {
    function LoginComponent(_userService, _router) {
        this._userService = _userService;
        this._router = _router;
    }
    LoginComponent.prototype.reset = function () {
        this.user = {
            name: ""
        };
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.reset();
        this._userService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this._userService.setUser(this.user, function (data) {
            _this.reset();
            _this._router.navigate(["/dashboard"]);
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService, router_1.Router])
    ], LoginComponent);
    return LoginComponent;
}());
exports.LoginComponent = LoginComponent;


/***/ }),

/***/ "./src/app/question.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var QuestionService = /** @class */ (function () {
    function QuestionService(_http) {
        this._http = _http;
    }
    QuestionService.prototype.create = function (question, callback) {
        return this._http.post("/questionsdb", question)
            .subscribe(function (data) { return callback(data); });
    };
    QuestionService.prototype.getAll = function (callback) {
        return this._http.get("/questionsdb")
            .subscribe(function (data) { return callback(data); });
    };
    QuestionService.prototype.getOne = function (qid, callback) {
        return this._http.get("/questionsdb/" + qid)
            .subscribe(function (data) { return callback(data); });
    };
    QuestionService.prototype.search = function (query, callback) {
        return this._http.get("/questionsdb/search/" + query)
            .subscribe(function (data) { return callback(data); });
    };
    QuestionService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], QuestionService);
    return QuestionService;
}());
exports.QuestionService = QuestionService;


/***/ }),

/***/ "./src/app/question/question.component.css":
/***/ (function(module, exports) {

module.exports = "p {\n    color: red;\n}"

/***/ }),

/***/ "./src/app/question/question.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"\" [routerLink]=\"['/dashboard']\">home</a>\n|\n<a href=\"\" [routerLink]=\"['/index']\">logout</a>\n<h1>new question</h1>\n<form method=\"POST\" (submit)=\"create()\">\n  question:\n  <input\n    type=\"text\"\n    name=\"title\"\n    required\n    minlength=\"10\"\n    [(ngModel)]=\"question.title\"\n    #title=\"ngModel\"\n  >\n  <p *ngIf=\"title.errors\">\n    question must be at least 10 chars\n  </p>\n  description:\n  <input\n    type=\"text\"\n    name=\"description\"\n    [(ngModel)]=\"question.description\"\n  >\n  <br>\n  <input *ngIf=\"!title.errors\" type=\"submit\" value=\"add\">\n</form>"

/***/ }),

/***/ "./src/app/question/question.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var question_service_1 = __webpack_require__("./src/app/question.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var QuestionComponent = /** @class */ (function () {
    function QuestionComponent(_userService, _questionService, _router, _route) {
        this._userService = _userService;
        this._questionService = _questionService;
        this._router = _router;
        this._route = _route;
    }
    QuestionComponent.prototype.reset = function () {
        this.question = {
            title: "",
            description: "",
            poster: ""
        };
    };
    QuestionComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.reset();
        this._userService.getUser(function (data) {
            if (!data.user) {
                _this._router.navigate(["/index"]);
            }
            else {
                _this.question.poster = data.user.name;
            }
        });
    };
    QuestionComponent.prototype.create = function () {
        var _this = this;
        this._questionService.create(this.question, function (data) {
            _this._router.navigate(["/dashboard"]);
        });
    };
    QuestionComponent = __decorate([
        core_1.Component({
            selector: 'app-question',
            template: __webpack_require__("./src/app/question/question.component.html"),
            styles: [__webpack_require__("./src/app/question/question.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            question_service_1.QuestionService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], QuestionComponent);
    return QuestionComponent;
}());
exports.QuestionComponent = QuestionComponent;


/***/ }),

/***/ "./src/app/show/show.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/show/show.component.html":
/***/ (function(module, exports) {

module.exports = "<a href=\"\" [routerLink]=\"['/dashboard']\">home</a>\n|\n<a href=\"\" [routerLink]=\"['/questions', question._id, 'new_answer']\">answer this question</a>\n|\n<a href=\"\" [routerLink]=\"['/index']\">logout</a>\n<h1>{{question.title}}</h1>\n<h4>{{question.description}}</h4>\n<fieldset>\n  <legend>answers</legend>\n  <ul>\n    <li *ngFor=\"let a of question.answers\">\n      <p>{{a.poster}}:</p>\n      <p>{{a.title}}</p>\n      <p>{{a.description}}</p>\n      <p>likes: {{a.likes}}</p>\n      <button (click)=\"like(a._id)\">like</button>\n    </li>\n  </ul>\n</fieldset>\n"

/***/ }),

/***/ "./src/app/show/show.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var user_service_1 = __webpack_require__("./src/app/user.service.ts");
var question_service_1 = __webpack_require__("./src/app/question.service.ts");
var router_1 = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var answer_service_1 = __webpack_require__("./src/app/answer.service.ts");
var ShowComponent = /** @class */ (function () {
    function ShowComponent(_userService, _questionService, _answerService, _router, _route) {
        this._userService = _userService;
        this._questionService = _questionService;
        this._answerService = _answerService;
        this._router = _router;
        this._route = _route;
    }
    ShowComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._userService.getUser(function (data) {
            if (!data.user) {
                _this._router.navigate(["/index"]);
            }
        });
        this.question = Object;
        this.oldAnswer = Object;
        this._route.params.subscribe(function (params) {
            _this.qid = params.qid;
            _this._questionService.getOne(_this.qid, function (data) {
                _this.question = data.question;
            });
        });
    };
    ShowComponent.prototype.like = function (aid) {
        var _this = this;
        this._answerService.getOne(aid, function (data) {
            _this.oldAnswer = data.answer;
            _this.oldAnswer.likes += 1;
            _this._answerService.like(aid, _this.oldAnswer, function (data) {
                _this._questionService.getOne(_this.qid, function (data) {
                    _this.question = data.question;
                });
            });
        });
    };
    ShowComponent = __decorate([
        core_1.Component({
            selector: 'app-show',
            template: __webpack_require__("./src/app/show/show.component.html"),
            styles: [__webpack_require__("./src/app/show/show.component.css")]
        }),
        __metadata("design:paramtypes", [user_service_1.UserService,
            question_service_1.QuestionService,
            answer_service_1.AnswerService,
            router_1.Router,
            router_1.ActivatedRoute])
    ], ShowComponent);
    return ShowComponent;
}());
exports.ShowComponent = ShowComponent;


/***/ }),

/***/ "./src/app/user.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var http_1 = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.setUser = function (user, callback) {
        return this._http.post("/usersdb", user)
            .subscribe(function (data) { return callback(data); });
    };
    UserService.prototype.getUser = function (callback) {
        return this._http.get("/usersdb")
            .subscribe(function (data) { return callback(data); });
    };
    UserService.prototype.logout = function () {
        return this._http.get("/logoutdb")
            .subscribe();
    };
    UserService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], UserService);
    return UserService;
}());
exports.UserService = UserService;


/***/ }),

/***/ "./src/app/view/view.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/view/view.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  view works!\n</p>\n"

/***/ }),

/***/ "./src/app/view/view.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var ViewComponent = /** @class */ (function () {
    function ViewComponent() {
    }
    ViewComponent.prototype.ngOnInit = function () {
    };
    ViewComponent = __decorate([
        core_1.Component({
            selector: 'app-view',
            template: __webpack_require__("./src/app/view/view.component.html"),
            styles: [__webpack_require__("./src/app/view/view.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ViewComponent);
    return ViewComponent;
}());
exports.ViewComponent = ViewComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("./src/app/app.module.ts");
var environment_1 = __webpack_require__("./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map