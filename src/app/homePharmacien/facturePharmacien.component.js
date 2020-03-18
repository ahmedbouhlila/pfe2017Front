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
var chargerfacture_service_1 = require("../_services/pharmacien/chargerfacture.service");
var validerfacture_service_1 = require("../_services/pharmacien/validerfacture.service");
var FacturePharmacienComponent = (function () {
    function FacturePharmacienComponent(validerfactureservice, chargerfactureservice, userService, activatedRoute, router) {
        var _this = this;
        this.validerfactureservice = validerfactureservice;
        this.chargerfactureservice = chargerfactureservice;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.details = [];
        activatedRoute.queryParams.subscribe(function (data) { _this.id_visite = data['id']; });
        console.log(this.id_visite);
    }
    FacturePharmacienComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.chargerfactureservice.chargerfacture(this.id_visite)
            .subscribe(function (details) {
            _this.details = details;
            console.log("azertyyyyyyyyy");
            console.log(_this.details);
            _this.montant = 0;
            for (var i = 0; i < _this.details.length; i++) {
                _this.montant = _this.montant + details[i].prixTotale;
            }
            console.log(_this.montant);
        });
    };
    FacturePharmacienComponent.prototype.validation = function () {
        var _this = this;
        this.validerfactureservice.validation(this.montant, this.id_visite, this.details)
            .subscribe(function (resultat) {
            if (resultat) {
                _this.router.navigate(['/homePharmacien']);
            }
        });
    };
    return FacturePharmacienComponent;
}());
FacturePharmacienComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'facturePharmacien.component.html'
    }),
    __metadata("design:paramtypes", [validerfacture_service_1.ValiderFactureService, chargerfacture_service_1.ChargerFactureService, index_1.UserService, router_1.ActivatedRoute, router_1.Router])
], FacturePharmacienComponent);
exports.FacturePharmacienComponent = FacturePharmacienComponent;
//# sourceMappingURL=facturePharmacien.component.js.map