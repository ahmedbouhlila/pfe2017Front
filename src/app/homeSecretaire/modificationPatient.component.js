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
var identifierpatient_service_1 = require("../_services/secretaire/identifierpatient.service");
var router_1 = require("@angular/router");
var ajoutpatient_service_1 = require("../_services/secretaire/ajoutpatient.service");
var ModificationPatientComponent = (function () {
    function ModificationPatientComponent(ajoutpatientservice, identifierpatienttservice, activatedRoute, router) {
        var _this = this;
        this.ajoutpatientservice = ajoutpatientservice;
        this.identifierpatienttservice = identifierpatienttservice;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.patients = [];
        this.model = {};
        this.title = "enter your role";
        this.value = 'admin';
        this.nomPatient = "nom";
        this.prenomPatient = "";
        this.sex = "";
        this.age = 0;
        this.emailPatient = "";
        this.situationFam = "";
        this.professionPatient = "";
        this.cin1 = 0;
        this.groupe = '';
        this.date_naiss = "";
        this.id_patient = 0;
        this.groupes = [
            { value: 'A+' },
            { value: 'A-' },
            { value: 'O+' },
            { value: 'O-' },
            { value: 'AB+' },
            { value: 'AB-' },
            { value: 'B+' },
            { value: 'B-' },
            { value: '' },
        ];
        this.sexs = [
            { value: 'Masculin' },
            { value: 'Feminin' }
        ];
        //this.id = params.get('id');
        activatedRoute.queryParams.subscribe(function (data) { return _this.cin = data['cin']; });
        console.log("gogo");
        console.log(this.cin);
    }
    ModificationPatientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.patients = [];
        this.identifierpatienttservice.identifierpatient(this.cin)
            .subscribe(function (patients) {
            _this.patients = patients;
            console.log("aaaaabbbbbb");
            console.log(patients);
            console.log("bbbbb");
            console.log(_this.patients);
            _this.id_patient = _this.patients[0].id_patient;
            console.log(_this.patients[0].nom_patient);
            _this.nomPatient = _this.patients[0].nom_patient;
            console.log("eeeeeee");
            _this.value = _this.patients[0].nom_patient;
            _this.prenomPatient = _this.patients[0].prenom_patient;
            _this.sex = _this.patients[0].sex;
            _this.age = _this.patients[0].age;
            console.log("age");
            console.log(_this.age);
            _this.emailPatient = _this.patients[0].email_patient;
            _this.situationFam = _this.patients[0].situation_fam;
            _this.professionPatient = _this.patients[0].profession_patient;
            _this.cin1 = _this.patients[0].cin;
            _this.groupe = _this.patients[0].grp_SANGIN;
            _this.date_naiss = _this.patients[0].date_naiss;
            console.log(_this.cin1);
            console.log(_this.date_naiss);
            console.log("eeee");
        });
    };
    ModificationPatientComponent.prototype.modifier = function () {
        var _this = this;
        console.log("ahmed");
        if (!this.model.nom_patient) {
            this.model.nom_patient = this.nomPatient;
        }
        if (!this.model.prenom_patient) {
            this.model.prenom_patient = this.prenomPatient;
        }
        if (!this.model.cin) {
            this.model.cin = this.cin1;
        }
        if (!this.model.date_naiss) {
            this.model.date_naiss = this.date_naiss;
        }
        if (!this.model.groupe) {
            this.model.groupe = this.groupe;
        }
        if (!this.model.sex) {
            this.model.sex = this.sex;
        }
        if (!this.model.situation_fam) {
            this.model.situation_fam = this.situationFam;
        }
        if (!this.model.email_patient) {
            this.model.email_patient = this.emailPatient;
        }
        if (!this.model.profession_patient) {
            this.model.profession_patient = this.professionPatient;
        }
        if (!this.model.age) {
            this.model.age = this.age;
        }
        this.model.id_patient = this.id_patient;
        this.ajoutpatientservice.modifierpatient(this.model.id_patient, this.model.nom_patient, this.model.prenom_patient, this.model.sex, this.model.age, this.model.email_patient, this.model.situation_fam, this.model.profession_patient, this.model.cin, this.model.groupe, this.model.date_naiss)
            .subscribe(function (result) {
            if (result === true) {
                console.log("gggggggggggggggggggg");
                _this.router.navigate(['/homeSecretaire']);
            }
        });
        console.log(this.model);
    };
    return ModificationPatientComponent;
}());
ModificationPatientComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'modificationPatient.component.html',
    }),
    __metadata("design:paramtypes", [ajoutpatient_service_1.AjoutPatientService, identifierpatient_service_1.IdentifierPatienttService, router_1.ActivatedRoute, router_1.Router])
], ModificationPatientComponent);
exports.ModificationPatientComponent = ModificationPatientComponent;
//# sourceMappingURL=modificationPatient.component.js.map