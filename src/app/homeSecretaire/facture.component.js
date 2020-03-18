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
var facture_service_1 = require("../_services/secretaire/facture.service");
var payerfacture_service_1 = require("../_services/secretaire/payerfacture.service");
var FactureComponent = (function () {
    function FactureComponent(payerfactureservice, factureservice, userService, activatedRoute, router) {
        var _this = this;
        this.payerfactureservice = payerfactureservice;
        this.factureservice = factureservice;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.router = router;
        //users: User[] = [];
        this.model = {};
        this.patients = [];
        this.factures = [];
        //
        this.facturesmedecin = [];
        this.facturespharmacien = [];
        this.type = [
            { value: 'espèce' },
            { value: 'chèque' }
        ];
        //this.id = params.get('id');
        activatedRoute.queryParams.subscribe(function (data) { return _this.id_patient = data['id']; });
        console.log(this.id_patient);
    }
    FactureComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.factureservice.getfacture(this.id_patient)
            .subscribe(function (factures) {
            _this.factures = factures;
            console.log(_this.factures[0]);
            console.log("aaaaaa");
            console.log(factures);
            console.log("bbbb");
            _this.disabled = true;
            _this.typepayement = "";
            _this.montantGlobale = 0;
            _this.facturemedecin = false;
            _this.facturepharmacien = false;
            _this.nbrfacturemedecin = 0;
            _this.nbrfacturepharmacien = 0;
            for (var i = 0; i < _this.factures.length; i++) {
                _this.montantGlobale = _this.montantGlobale + _this.factures[i].montant;
                if (_this.factures[i].typeFacture == "medecin") {
                    _this.facturemedecin = true;
                    _this.nbrfacturemedecin++;
                    _this.facturesmedecin.push(_this.factures[i]);
                }
                if (_this.factures[i].typeFacture == "pharmacien") {
                    _this.facturepharmacien = true;
                    _this.nbrfacturepharmacien++;
                    _this.facturespharmacien.push(_this.factures[i]);
                }
            }
            //
            _this.etablissement = "CNSS";
            _this.adresseEtab = "36rue mohamed 5";
            _this.numTel = 25654852;
            _this.numFax = 71564266;
            _this.nomPreparateur = "";
            _this.prenomPreparateur = "";
        });
    };
    FactureComponent.prototype.payer = function () {
        var _this = this;
        if ((this.typepayement == "espèce") || (this.typepayement == "chèque")) {
            console.log("bienbien");
            this.factures[0].etablissement = this.etablissement;
            this.factures[0].adresse_etab = this.adresseEtab;
            this.factures[0].num_tel = this.numTel;
            this.factures[0].num_fax = this.numFax;
            this.factures[0].nom_preparateur = this.nomPreparateur;
            this.factures[0].prenom_preparateur = this.prenomPreparateur;
            this.factures[0].typepayement = this.typepayement;
            console.log("factures");
            console.log(this.factures);
            this.payerfactureservice.payerfacture(this.factures)
                .subscribe(function (resultat) {
                if (resultat)
                    _this.router.navigate(['/homeSecretaire']);
            });
        }
        console.log(this.typepayement);
    };
    return FactureComponent;
}());
FactureComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'facture.component.html'
    }),
    __metadata("design:paramtypes", [payerfacture_service_1.PayerFactureService, facture_service_1.FactureService, index_1.UserService, router_1.ActivatedRoute, router_1.Router])
], FactureComponent);
exports.FactureComponent = FactureComponent;
//# sourceMappingURL=facture.component.js.map