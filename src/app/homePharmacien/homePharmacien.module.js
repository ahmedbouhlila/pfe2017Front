"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var homePharmacien_component_1 = require("./homePharmacien.component");
var homePharmacien_routing_module_1 = require("./homePharmacien-routing.module");
var forms_1 = require("@angular/forms");
var ajoutMedicaments_service_1 = require("../_services/pharmacien/ajoutMedicaments.service");
var ajoutMedicaments_component_1 = require("./ajoutMedicaments.component");
var primeng_1 = require("primeng/primeng");
var platform_browser_1 = require("@angular/platform-browser");
var http_1 = require("@angular/http");
var user_service_1 = require("../_services/user.service");
var afficherdossier_service_1 = require("../_services/pharmacien/afficherdossier.service");
var afficherdossier_component_1 = require("./afficherdossier.component");
var identifierpatient_service_1 = require("../_services/pharmacien/identifierpatient.service");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var afficherdetails_service_1 = require("../_services/pharmacien/afficherdetails.service");
var afficherdetails_component_1 = require("./afficherdetails.component");
var facturePharmacien_component_1 = require("./facturePharmacien.component");
var chargerfacture_service_1 = require("../_services/pharmacien/chargerfacture.service");
var validerfacture_service_1 = require("../_services/pharmacien/validerfacture.service");
var HomePharmacienModule = (function () {
    function HomePharmacienModule() {
    }
    return HomePharmacienModule;
}());
HomePharmacienModule = __decorate([
    core_1.NgModule({
        imports: [ng_bootstrap_1.NgbModule, forms_1.FormsModule, http_1.HttpModule, platform_browser_1.BrowserModule, common_1.CommonModule, homePharmacien_routing_module_1.HomePharmacienRoutingModule, forms_1.ReactiveFormsModule, primeng_1.InputTextModule, primeng_1.DataTableModule, primeng_1.SharedModule, primeng_1.DialogModule],
        declarations: [facturePharmacien_component_1.FacturePharmacienComponent, afficherdetails_component_1.AfficherDetailsComponent, afficherdossier_component_1.AfficherDossierComponent, homePharmacien_component_1.HomePharmacienComponent, ajoutMedicaments_component_1.AjoutMedicamentsComponent],
        exports: [facturePharmacien_component_1.FacturePharmacienComponent, afficherdetails_component_1.AfficherDetailsComponent, afficherdossier_component_1.AfficherDossierComponent, homePharmacien_component_1.HomePharmacienComponent, ajoutMedicaments_component_1.AjoutMedicamentsComponent],
        providers: [validerfacture_service_1.ValiderFactureService, chargerfacture_service_1.ChargerFactureService, afficherdetails_service_1.AfficherDetailsService, identifierpatient_service_1.IdentifierPatienttService, , ajoutMedicaments_service_1.AjoutMedicamentsService, user_service_1.UserService, afficherdossier_service_1.AfficherDossierService],
    })
], HomePharmacienModule);
exports.HomePharmacienModule = HomePharmacienModule;
//# sourceMappingURL=homePharmacien.module.js.map