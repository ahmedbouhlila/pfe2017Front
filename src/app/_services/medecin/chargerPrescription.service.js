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
var ChargerPrescriptionService = (function () {
    function ChargerPrescriptionService(http) {
        this.http = http;
    }
    ChargerPrescriptionService.prototype.chargerprescription = function (idOrdonnance) {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var username = currentUser.username;
        var password = currentUser.password;
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Basic ' + btoa(username + ':' + password));
        headers.append("Access-Control-Allow-Origin", "*");
        headers.append("Access-Control-Allow-Headers", "origin, content-type, accept, authorization");
        headers.append("Access-Control-Allow-Credentials", "true");
        headers.append("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
        headers.append('content-type', 'application/x-www-form-urlencoded');
        var options = new http_1.RequestOptions({ headers: headers });
        var body = "idOrdonnance=" + idOrdonnance;
        return this.http.put('http://localhost:8089/chargerordonnancetype', body, options)
            .map(function (response) { return response.json(); });
    };
    return ChargerPrescriptionService;
}());
ChargerPrescriptionService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], ChargerPrescriptionService);
exports.ChargerPrescriptionService = ChargerPrescriptionService;
//# sourceMappingURL=chargerPrescription.service.js.map