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
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
require("rxjs/add/operator/map");
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
        // set token if saved in local storage
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this.token = currentUser && currentUser.token;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var _this = this;
        var headers = new http_1.Headers();
        console.log('aaa');
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        console.log(headers);
        console.log('role');
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        //
        headers.append("contentType", "application/json");
        var options = new http_1.RequestOptions({ headers: headers });
        //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 
        var a = 1;
        var body = { "login": username, "cin": 555, "pass": password };
        console.log("aaa");
        console.log(body);
        console.log("eee");
        return this.http.post('http://localhost:8089/login', body, options)
            .map(function (response) {
            console.log('cccc');
            // login successful if there's a jwt token in the response
            //    if (1)
            //  return true;   
            console.log("hhaaaaaaaaaaaaa");
            var role = 0;
            var token = response.json().login;
            var id_user = response.json().id_user;
            role = response.json().role.id_role;
            console.log("hhaaaaaaaaaaaaa");
            console.log(response.json());
            console.log(role);
            console.log(token);
            if (token) {
                // set token property
                _this.token = "logged";
                console.log(_this.token);
                // store username and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify({ username: username, password: password, token: token, id_user: id_user, role: role }));
                console.log(localStorage);
                // return true to indicate successful login
                return role;
            }
            else {
                // return false to indicate failed login
                return role;
            }
        });
    };
    /*
    
        login(username: string, password: string): Observable<boolean> {
            return this.http.post('/api/authenticate', JSON.stringify({ username: username, password: password }))
                .map((response: Response) => {
                    // login successful if there's a jwt token in the response
                    let token = response.json() && response.json().token;
                    if (token) {
                        // set token property
                        this.token = token;
    
                        // store username and jwt token in local storage to keep user logged in between page refreshes
                        localStorage.setItem('currentUser', JSON.stringify({ username: username, token: token }));
    
                        // return true to indicate successful login
                        return true;
                    } else {
                        // return false to indicate failed login
                        return false;
                    }
                });
        }
    
    */
    AuthenticationService.prototype.logout = function () {
        // clear token remove user from local storage to log user out
        this.token = null;
        localStorage.removeItem('currentUser');
    };
    return AuthenticationService;
}());
AuthenticationService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AuthenticationService);
exports.AuthenticationService = AuthenticationService;
//# sourceMappingURL=authentication.service.js.map