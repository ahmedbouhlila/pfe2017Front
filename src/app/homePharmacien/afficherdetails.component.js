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
var afficherdetails_service_1 = require("../_services/pharmacien/afficherdetails.service");
var now = new Date();
var AfficherDetailsComponent = (function () {
    function AfficherDetailsComponent(afficherdetailsservice, userService, activatedRoute, router) {
        var _this = this;
        this.afficherdetailsservice = afficherdetailsservice;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.x = [];
        this.model = {};
        activatedRoute.queryParams.subscribe(function (data) { _this.id_visite = data['id']; });
        console.log(this.id_visite);
    }
    AfficherDetailsComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("eeeeee");
        this.afficherdetailsservice.afficherdetails(this.id_visite)
            .subscribe(function (details) {
            _this.details = details;
            console.log("xxxx");
            console.log(_this.details);
            console.log("init");
            console.log(localStorage.getItem('currentUser'));
            _this.x = _this.details[0].rapport;
        });
    };
    AfficherDetailsComponent.prototype.afficherfacture = function () {
        console.log("xxxxx");
        var navigationExtras = {
            queryParams: { 'id': this.id_visite,
            },
            fragment: 'anchor'
        };
        console.log(localStorage.getItem('currentUser'));
        console.log(this.id_visite);
        // Navigate to the login page with extras
        this.router.navigate(['/facturepharmacien'], navigationExtras);
    };
    return AfficherDetailsComponent;
}());
AfficherDetailsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'afficherdetails.component.html',
    }),
    __metadata("design:paramtypes", [afficherdetails_service_1.AfficherDetailsService, index_1.UserService, router_1.ActivatedRoute, router_1.Router])
], AfficherDetailsComponent);
exports.AfficherDetailsComponent = AfficherDetailsComponent;
//# sourceMappingURL=afficherdetails.component.js.map