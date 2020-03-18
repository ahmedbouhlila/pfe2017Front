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
var medicament_1 = require("../_models/medicament");
var ajoutMedicaments_service_1 = require("../_services/pharmacien/ajoutMedicaments.service");
var AjoutMedicamentsComponent = (function () {
    function AjoutMedicamentsComponent(userservice, ajoutmedicamentsservice, router) {
        this.userservice = userservice;
        this.ajoutmedicamentsservice = ajoutmedicamentsservice;
        this.router = router;
        this.medicaments = [];
        this.medicament = new medicament_1.Medicament();
        this.disabled = true;
    }
    AjoutMedicamentsComponent.prototype.ngOnInit = function () {
        this.getmed();
        //this.acteur.type_medecin="";
    };
    AjoutMedicamentsComponent.prototype.getmed = function () {
        var _this = this;
        this.userservice.getmedicament()
            .subscribe(function (medicaments) {
            _this.medicaments = medicaments;
        });
    };
    AjoutMedicamentsComponent.prototype.ajoutmedicaments = function () {
        var _this = this;
        console.log("eeeee");
        console.log(this.medicament);
        this.ajoutmedicamentsservice.ajoutMedicaments(this.medicament.nom, this.medicament.prix, this.medicament.nbr)
            .subscribe(function (result) {
            console.log("aaaaaa");
            console.log(_this.medicament);
            _this.medicaments = [];
            _this.getmed();
            console.log("aaaaaa");
            console.log(_this.medicament);
        });
    };
    AjoutMedicamentsComponent.prototype.modifier = function () {
        var _this = this;
        this.ajoutmedicamentsservice.modifierMedicaments(this.medicament.id_medicaments, this.medicament.nom, this.medicament.nbr, this.medicament.prix)
            .subscribe(function (result) {
            _this.medicaments = [];
            _this.getmed();
        });
    };
    AjoutMedicamentsComponent.prototype.showDialogToAdd = function () {
        this.newMedicament = true;
        this.medicament = new medicament_1.Medicament();
        this.displayDialog = true;
    };
    AjoutMedicamentsComponent.prototype.save = function () {
        console.log("aaaaaaa");
        console.log(this.medicament);
        if (this.newMedicament)
            this.ajoutmedicaments();
        else
            this.modifier();
        this.medicament = null;
        this.displayDialog = false;
    };
    AjoutMedicamentsComponent.prototype.effacermedicaments = function (id_medicaments) {
        var _this = this;
        this.ajoutmedicamentsservice.effacerMedicaments(id_medicaments)
            .subscribe(function (result) {
            _this.medicaments = [];
            _this.getmed();
        });
    };
    AjoutMedicamentsComponent.prototype.delete = function () {
        // console.log(this.findSelectedActeurIndex());
        this.effacermedicaments(this.medicaments[this.findSelectedMedicamentIndex()].id_medicaments);
        //  this.acteurs.splice(this.findSelectedActeurIndex(), 1);
        this.medicament = null;
        this.displayDialog = false;
    };
    AjoutMedicamentsComponent.prototype.onRowSelect = function (event) {
        this.newMedicament = false;
        this.medicament = this.cloneMedicament(event.data);
        this.displayDialog = true;
    };
    AjoutMedicamentsComponent.prototype.cloneMedicament = function (c) {
        var medicament = new medicament_1.Medicament();
        for (var prop in c) {
            medicament[prop] = c[prop];
        }
        return medicament;
    };
    AjoutMedicamentsComponent.prototype.findSelectedMedicamentIndex = function () {
        return this.medicaments.indexOf(this.selectedMedicament);
    };
    return AjoutMedicamentsComponent;
}());
AjoutMedicamentsComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'ajoutMedicaments.component.html'
    }),
    __metadata("design:paramtypes", [index_1.UserService, ajoutMedicaments_service_1.AjoutMedicamentsService, router_1.Router])
], AjoutMedicamentsComponent);
exports.AjoutMedicamentsComponent = AjoutMedicamentsComponent;
//# sourceMappingURL=ajoutMedicaments.component.js.map