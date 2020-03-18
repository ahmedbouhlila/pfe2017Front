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
var afficherdossier_service_1 = require("../_services/pharmacien/afficherdossier.service");
var now = new Date();
var AfficherDossierComponent = (function () {
    function AfficherDossierComponent(afficherdossierservice, userService, activatedRoute, router) {
        var _this = this;
        this.afficherdossierservice = afficherdossierservice;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.model = {};
        activatedRoute.queryParams.subscribe(function (data) { _this.id_patient = data['id']; });
        console.log(this.id_patient);
    }
    AfficherDossierComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("eeeeee");
        this.afficherdossierservice.afficherdossier(this.id_patient)
            .subscribe(function (dossier) {
            _this.dossier_patient = dossier;
            console.log("xxxx");
            console.log(_this.dossier_patient);
            console.log("init");
            console.log(localStorage.getItem('currentUser'));
        });
    };
    AfficherDossierComponent.prototype.afficherdetails = function () {
        console.log("xxxxx");
        console.log(this.selected);
        var id_visite = this.selected.id_visite;
        var navigationExtras = {
            queryParams: { 'id': id_visite,
            },
            fragment: 'anchor'
        };
        console.log(localStorage.getItem('currentUser'));
        // Navigate to the login page with extras
        this.router.navigate(['/afficherdetails'], navigationExtras);
    };
    return AfficherDossierComponent;
}());
AfficherDossierComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'afficherdossier.component.html',
    }),
    __metadata("design:paramtypes", [afficherdossier_service_1.AfficherDossierService, index_1.UserService, router_1.ActivatedRoute, router_1.Router])
], AfficherDossierComponent);
exports.AfficherDossierComponent = AfficherDossierComponent;
//# sourceMappingURL=afficherdossier.component.js.map