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
var AjoutUserService = (function () {
    function AjoutUserService(http) {
        // set token if saved in local storage
        // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //   this.token = currentUser && currentUser.token;
        this.http = http;
    }
    AjoutUserService.prototype.ajoutUser = function (nom, prenom, cin, age, date_naiss, sex, tel, profession, email, etat_fam, login, pass, type_medecin) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var username = currentUser.username;
        var password = currentUser.password;
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
        var role = 0;
        switch (profession) {
            case 'Secretaire':
                role = 1;
                break;
            case 'Medecin':
                role = 3;
                break;
            case 'Pharmacien':
                role = 4;
                break;
            case 'Administrateur':
                role = 2;
                break;
            default:
                role = 0;
                ;
        }
        var body = { "nom": nom, "prenom": prenom, "sex": sex, "age": age, "email": email, "etat_fam": etat_fam, "profession": profession, "cin": cin, "date_naiss": date_naiss, "login": login, "pass": pass, "type_medecin": type_medecin, "tel": tel, "role": { "id_role": role } };
        return this.http.post('http://localhost:8089/users', body, options)
            .map(function (response) {
            console.log('cccc');
            console.log(response.json());
            return response.json();
        });
    };
    AjoutUserService.prototype.modifierUser = function (acteur) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var username = currentUser.username;
        var password = currentUser.password;
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
        var role = 0;
        switch (acteur.profession) {
            case 'Secretaire':
                role = 1;
                break;
            case 'Medecin':
                role = 3;
                break;
            case 'Pharmacien':
                role = 4;
                break;
            case 'Administrateur':
                role = 2;
                break;
            default:
                role = 0;
                ;
        }
        var body = { "id_user": acteur.id_user, "nom": acteur.nom, "prenom": acteur.prenom, "sex": acteur.sex, "age": acteur.age, "email": acteur.email, "etat_fam": acteur.etat_fam, "profession": acteur.profession, "cin": acteur.cin, "date_naiss": acteur.date_naiss, "login": acteur.login, "pass": acteur.pass, "type_medecin": acteur.type_medecin, "tel": acteur.tel, "role": { "id_role": role } };
        return this.http.post('http://localhost:8089/modifierusers', body, options)
            .map(function (response) {
            console.log('cccc');
            console.log(response.json());
            return response.json();
        });
    };
    AjoutUserService.prototype.effacerUser = function (id_user) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var username = currentUser.username;
        var password = currentUser.password;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        //
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.delete('http://localhost:8089/effaceruser/' + id_user, options)
            .map(function (response) {
            return true;
        });
    };
    return AjoutUserService;
}());
AjoutUserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AjoutUserService);
exports.AjoutUserService = AjoutUserService;
//# sourceMappingURL=ajoutUser.service.js.map