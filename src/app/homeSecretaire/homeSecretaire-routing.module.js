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
var homeSecretaire_component_1 = require("./homeSecretaire.component");
var ajoutPatient_component_1 = require("./ajoutPatient.component");
var index_1 = require("../_guards/index");
var rendezVous_component_1 = require("./rendezVous.component");
var modificationPatient_component_1 = require("./modificationPatient.component");
var facture_component_1 = require("./facture.component");
var HomeSecretaireRoutingModule = (function () {
    function HomeSecretaireRoutingModule() {
    }
    return HomeSecretaireRoutingModule;
}());
HomeSecretaireRoutingModule = __decorate([
    core_1.NgModule({
        imports: [
            router_1.RouterModule.forChild([
                { path: 'homeSecretaire', component: homeSecretaire_component_1.HomeSecretaireComponent, canActivate: [index_1.AuthGuard] },
                { path: 'ajoutpatient', component: ajoutPatient_component_1.AjoutPatientComponent, canActivate: [index_1.AuthGuard] },
                { path: 'rendezvous', component: rendezVous_component_1.RendezVousComponent, canActivate: [index_1.AuthGuard] },
                { path: 'modifierpatient', component: modificationPatient_component_1.ModificationPatientComponent, canActivate: [index_1.AuthGuard] },
                { path: 'facturepatient', component: facture_component_1.FactureComponent, canActivate: [index_1.AuthGuard] },
            ])
        ],
        exports: [router_1.RouterModule]
    })
], HomeSecretaireRoutingModule);
exports.HomeSecretaireRoutingModule = HomeSecretaireRoutingModule;
//# sourceMappingURL=homeSecretaire-routing.module.js.map