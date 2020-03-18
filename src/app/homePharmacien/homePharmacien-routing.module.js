"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var homePharmacien_component_1 = require("./homePharmacien.component");
var index_1 = require("../_guards/index");
var ajoutMedicaments_component_1 = require("./ajoutMedicaments.component");
var afficherdossier_component_1 = require("./afficherdossier.component");
var afficherdetails_component_1 = require("./afficherdetails.component");
var facturePharmacien_component_1 = require("./facturePharmacien.component");
var HomePharmacienRoutingModule = (function () {
    function HomePharmacienRoutingModule() {
    }
    return HomePharmacienRoutingModule;
}());
HomePharmacienRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'homePharmacien', component: homePharmacien_component_1.HomePharmacienComponent, canActivate: [index_1.AuthGuard] },
                { path: 'ajoutMedicaments', component: ajoutMedicaments_component_1.AjoutMedicamentsComponent, canActivate: [index_1.AuthGuard] },
                { path: 'afficherdossier', component: afficherdossier_component_1.AfficherDossierComponent, canActivate: [index_1.AuthGuard] },
                { path: 'afficherdetails', component: afficherdetails_component_1.AfficherDetailsComponent, canActivate: [index_1.AuthGuard] },
                { path: 'facturepharmacien', component: facturePharmacien_component_1.FacturePharmacienComponent, canActivate: [index_1.AuthGuard] },
            ])
        ],
        exports: [router_1.RouterModule]
    })
], HomePharmacienRoutingModule);
exports.HomePharmacienRoutingModule = HomePharmacienRoutingModule;
//# sourceMappingURL=homePharmacien-routing.module.js.map