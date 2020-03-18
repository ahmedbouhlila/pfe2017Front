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
var AjoutCreneauxService = (function () {
    function AjoutCreneauxService(http) {
        this.http = http;
    }
    AjoutCreneauxService.prototype.ajoutcreneaux = function (hdebut, hfin, mdebut, mfin, periode) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var username = currentUser.username;
        var password = currentUser.password;
        var headers = new http_1.Headers();
        var id_medecin = currentUser.id_user;
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        //console.log(role);
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        //
        headers.append('content-type', 'application/x-www-form-urlencoded');
        var options = new http_1.RequestOptions({ headers: headers });
        //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 
        var a = 1;
        var body = "id_medecin=" + id_medecin + "&Hdebut=" + hdebut + "&Hfin=" + hfin + "&Mdebut=" + mdebut + "&Mfin=" + mfin + "&periode=" + periode;
        console.log("aaa");
        console.log(body);
        console.log("eee");
        return this.http.put('http://localhost:8089/ajoutcreneaux', body, options)
            .map(function (response) {
            console.log('cccc');
            return true;
        });
    };
    //
    AjoutCreneauxService.prototype.ajoutconger = function (dateDebut, dateFin) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var username = currentUser.username;
        var password = currentUser.password;
        var headers = new http_1.Headers();
        var id_medecin = currentUser.id_user;
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        //console.log(role);
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        //
        headers.append('content-type', 'application/x-www-form-urlencoded');
        var options = new http_1.RequestOptions({ headers: headers });
        //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 
        var a = 1;
        var body = "id_medecin=" + id_medecin + "&dateDebut=" + dateDebut + "&dateFin=" + dateFin;
        console.log("aaa");
        console.log(body);
        console.log("eee");
        return this.http.put('http://localhost:8089/ajoutconger', body, options)
            .map(function (response) { return response.json(); });
    };
    AjoutCreneauxService.prototype.validerconger = function (dateDebut, dateFin, list) {
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
        headers.append("contentType", "application/json");
        var options = new http_1.RequestOptions({ headers: headers });
        //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 
        var body = list;
        console.log("aaa");
        console.log(body);
        console.log("eee");
        return this.http.post('http://localhost:8089/validerconger/' + dateDebut + '/' + dateFin + '/' + id_user, body, options)
            .map(function (response) {
            console.log('cccc');
            return true;
        });
    };
    return AjoutCreneauxService;
}());
AjoutCreneauxService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AjoutCreneauxService);
exports.AjoutCreneauxService = AjoutCreneauxService;
//# sourceMappingURL=ajoutcreneaux.service.js.map