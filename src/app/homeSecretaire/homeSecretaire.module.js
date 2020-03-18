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
var homeSecretaire_component_1 = require("./homeSecretaire.component");
var homeSecretaire_routing_module_1 = require("./homeSecretaire-routing.module");
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var ajoutpatient_service_1 = require("../_services/secretaire/ajoutpatient.service");
var index_1 = require("../_guards/index");
var index_2 = require("../_services/index");
var forms_2 = require("@angular/forms");
var ajoutPatient_component_1 = require("./ajoutPatient.component");
var identifierpatient_service_1 = require("../_services/secretaire/identifierpatient.service");
var index_3 = require("../_services/index");
var rendezVous_component_1 = require("./rendezVous.component");
var ng_bootstrap_1 = require("@ng-bootstrap/ng-bootstrap");
var ajoutrendez_vous_service_1 = require("../_services/secretaire/ajoutrendez_vous.service");
var primeng_1 = require("primeng/primeng");
var charger_rendez_vous_service_1 = require("../_services/secretaire/charger_rendez_vous.service");
var modificationPatient_component_1 = require("./modificationPatient.component");
var facture_service_1 = require("../_services/secretaire/facture.service");
var facture_component_1 = require("./facture.component");
var primeng_2 = require("primeng/primeng");
var payerfacture_service_1 = require("../_services/secretaire/payerfacture.service");
var HomeSecretaireModule = (function () {
    function HomeSecretaireModule() {
    }
    return HomeSecretaireModule;
}());
HomeSecretaireModule = __decorate([
    core_1.NgModule({
        imports: [primeng_2.InputTextModule, primeng_1.DataTableModule, primeng_1.SharedModule, primeng_1.DialogModule, primeng_1.PaginatorModule, primeng_1.DataListModule, common_1.CommonModule, homeSecretaire_routing_module_1.HomeSecretaireRoutingModule, forms_2.ReactiveFormsModule, platform_browser_1.BrowserModule, forms_1.FormsModule, http_1.HttpModule, ng_bootstrap_1.NgbModule],
        declarations: [facture_component_1.FactureComponent, homeSecretaire_component_1.HomeSecretaireComponent, ajoutPatient_component_1.AjoutPatientComponent, rendezVous_component_1.RendezVousComponent, modificationPatient_component_1.ModificationPatientComponent],
        exports: [facture_component_1.FactureComponent, homeSecretaire_component_1.HomeSecretaireComponent, ajoutPatient_component_1.AjoutPatientComponent, rendezVous_component_1.RendezVousComponent, modificationPatient_component_1.ModificationPatientComponent],
        providers: [payerfacture_service_1.PayerFactureService, facture_service_1.FactureService,
            index_1.AuthGuard,
            index_2.AuthenticationService,
            ajoutpatient_service_1.AjoutPatientService,
            identifierpatient_service_1.IdentifierPatienttService,
            index_3.UserService,
            ajoutrendez_vous_service_1.AjoutRendez_VousService,
            charger_rendez_vous_service_1.ChargerRendez_VousService
            // providers used to create fake backend
        ],
    })
], HomeSecretaireModule);
exports.HomeSecretaireModule = HomeSecretaireModule;
//# sourceMappingURL=homeSecretaire.module.js.map