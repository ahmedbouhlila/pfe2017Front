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
var AjoutPatientService = (function () {
    function AjoutPatientService(http) {
        // set token if saved in local storage
        // var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        //   this.token = currentUser && currentUser.token;
        this.http = http;
    }
    AjoutPatientService.prototype.ajoutpatient = function (nom_patient, prenom_patient, sex, age, email_patient, situation_fam, profession_patient, cin, GRP_SANGIN, date_naiss) {
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
        //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 
        var a = 1;
        var body = { "nom_patient": nom_patient, "prenom_patient": prenom_patient, "sex": sex, "age": age, "email_patient": email_patient, "situation_fam": situation_fam, "profession_patient": profession_patient, "cin": cin, "grp_SANGIN": GRP_SANGIN, "date_naiss": date_naiss };
        console.log("aaa");
        console.log(body);
        console.log("eee");
        return this.http.post('http://localhost:8089/patients', body, options)
            .map(function (response) {
            console.log('cccc');
            return true;
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
    AjoutPatientService.prototype.modifierpatient = function (id_patient, nom_patient, prenom_patient, sex, age, email_patient, situation_fam, profession_patient, cin, GRP_SANGIN, date_naiss) {
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
        //return this.http.get('http://localhost:8089/login',options)
        //    .map((response: Response) 
        var a = 1;
        var body = { "id_patient": id_patient, "nom_patient": nom_patient, "prenom_patient": prenom_patient, "sex": sex, "age": age, "email_patient": email_patient, "situation_fam": situation_fam, "profession_patient": profession_patient, "cin": cin, "grp_SANGIN": GRP_SANGIN, "date_naiss": date_naiss };
        console.log("aaa");
        console.log(body);
        console.log("eee");
        return this.http.post('http://localhost:8089/modifierpatient', body, options)
            .map(function (response) {
            console.log('cccc');
            return true;
        });
    };
    AjoutPatientService.prototype.effacerPatient = function (id_patient) {
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
        return this.http.delete('http://localhost:8089/effacerpatient/' + id_patient, options)
            .map(function (response) {
            return true;
        });
    };
    return AjoutPatientService;
}());
AjoutPatientService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], AjoutPatientService);
exports.AjoutPatientService = AjoutPatientService;
//# sourceMappingURL=ajoutpatient.service.js.map