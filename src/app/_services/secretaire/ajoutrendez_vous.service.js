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
var AjoutRendez_VousService = (function () {
    function AjoutRendez_VousService(http) {
        // set token if saved in local storage
        // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //   this.token = currentUser && currentUser.token;
        this.http = http;
    }
    AjoutRendez_VousService.prototype.ajoutrendez_vous = function (id_creneaux, id_patient, jour) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var username = currentUser.username;
        var password = currentUser.password;
        var id_user = currentUser.id_user;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        //console.log(role);
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        //
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new http_1.RequestOptions({ headers: headers });
        //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 
        var body = "id_creneaux=" + id_creneaux + "&id_patient=" + id_patient + "&jour=" + jour + "&id_user=" + id_user;
        console.log(body);
        return this.http.put('http://localhost:8089/ajoutrendez_vous', body, options)
            .map(function (response) {
            console.log('cccc');
            var id_rendez_vous = response.json().id_rendez_vous;
            console.log(id_rendez_vous);
            if (id_rendez_vous) {
                // return true to indicate successful login
                return true;
            }
            else {
                // return false to indicate failed login
                return false;
            }
        });
    };
    return AjoutRendez_VousService;
}());
AjoutRendez_VousService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AjoutRendez_VousService);
exports.AjoutRendez_VousService = AjoutRendez_VousService;
//# sourceMappingURL=ajoutrendez_vous.service.js.map