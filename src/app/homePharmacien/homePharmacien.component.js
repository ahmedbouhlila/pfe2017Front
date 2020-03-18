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
var index_1 = require("../_services/index");
var router_1 = require("@angular/router");
var identifierpatient_service_1 = require("../_services/pharmacien/identifierpatient.service");
var HomePharmacienComponent = (function () {
    function HomePharmacienComponent(identifierpatienttservice, userService, router) {
        this.identifierpatienttservice = identifierpatienttservice;
        this.userService = userService;
        this.router = router;
        this.model = {};
        this.patients = [];
    }
    HomePharmacienComponent.prototype.ngOnInit = function () {
        // get users from secure api end point
        //    this.userService.getUsers()
        //      .subscribe(users => {
        //        this.users = users;
        // }
        //  );
    };
    HomePharmacienComponent.prototype.gestionmedicaments = function () {
        console.log("xxxxx");
        var navigationExtras = {
            queryParams: {},
            fragment: 'anchor'
        };
        this.router.navigate(['/ajoutMedicaments'], navigationExtras);
    };
    HomePharmacienComponent.prototype.getpatient = function () {
        var _this = this;
        this.patients = [];
        this.identifierpatienttservice.identifierpatient(this.model.cin)
            .subscribe(function (patients) {
            console.log(_this.model.cin);
            _this.patients = patients;
            console.log("aaaaa");
            console.log(patients);
            console.log(_this.patients);
        });
    };
    HomePharmacienComponent.prototype.gestionordonnances = function () {
        this.id = this.patients[0].id_patient;
        console.log("xxxxx");
        var navigationExtras = {
            queryParams: { 'id': this.id
            },
            fragment: 'anchor'
        };
        this.router.navigate(['/afficherdossier'], navigationExtras);
    };
    return HomePharmacienComponent;
}());
HomePharmacienComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'homePharmacien.component.html'
    }),
    __metadata("design:paramtypes", [identifierpatient_service_1.IdentifierPatienttService, index_1.UserService, router_1.Router])
], HomePharmacienComponent);
exports.HomePharmacienComponent = HomePharmacienComponent;
//# sourceMappingURL=homePharmacien.component.js.map