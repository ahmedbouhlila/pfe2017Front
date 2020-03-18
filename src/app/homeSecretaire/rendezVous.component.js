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
var ajoutrendez_vous_service_1 = require("../_services/secretaire/ajoutrendez_vous.service");
var charger_rendez_vous_service_1 = require("../_services/secretaire/charger_rendez_vous.service");
var now = new Date();
var RendezVousComponent = (function () {
    function RendezVousComponent(chargerrendez_vousservice, userService, activatedRoute, ajoutrendez_vous, router) {
        var _this = this;
        this.chargerrendez_vousservice = chargerrendez_vousservice;
        this.userService = userService;
        this.activatedRoute = activatedRoute;
        this.ajoutrendez_vous = ajoutrendez_vous;
        this.router = router;
        //users: User[] = [];
        this.modelmedecin = {};
        this.medecins = [];
        this.creneaux = [];
        this.modelcreneaux = {};
        this.rendez_vous = [];
        //this.id = params.get('id');
        activatedRoute.queryParams.subscribe(function (data) { return _this.id_patient = data['id']; });
        console.log(this.id_patient);
    }
    RendezVousComponent.prototype.ngOnInit = function () {
        var _this = this;
        // get medecins from secure api end point
        this.userService.getMedecins()
            .subscribe(function (medecins) {
            _this.medecins = medecins;
            console.log(_this.medecins);
            console.log(medecins);
            console.log("zzzzzzzzzzzzzzzzzzz");
            console.log(_this.id_patient);
        });
        this.chargerRendezVous();
    };
    RendezVousComponent.prototype.chargerRendezVous = function () {
        var _this = this;
        console.log("eeeeee");
        this.chargerrendez_vousservice.chargerrendez_vous(this.id_patient)
            .subscribe(function (rendezvous1) {
            _this.rendez_vous = rendezvous1;
            console.log(_this.rendez_vous);
        });
    };
    RendezVousComponent.prototype.selectToday = function () {
        this.model = { year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate() };
        //
        /*
        let x = this.model.year+"-"+this.model.month+"-" +this.model.day;
        //x=JSON.stringify(x);
        console.log(x);
         this.userService.getcreneaux(this.modelmedecin.id_medecin,x)
                   .subscribe(creneaux => {
                       this.creneaux = creneaux;
              }
                  
                   );
         console.log("aaaa");
        console.log(this.modelmedecin.id_medecin);
        console.log(this.creneaux);
         console.log(this.model);
         console.log(this.date);
        console.log("aaaa");
        */
    };
    RendezVousComponent.prototype.GetCreneaux = function () {
        var _this = this;
        var x;
        this.creneaux = [];
        if (this.model.day < 10) {
            x = this.model.year + "-" + this.model.month + "-0" + this.model.day;
            //x=JSON.stringify(x);}
        }
        else {
            x = this.model.year + "-" + this.model.month + "-" + this.model.day;
        }
        console.log("aaaaaaaaaaaa");
        console.log(x);
        this.userService.getcreneaux(this.modelmedecin.id_medecin, x)
            .subscribe(function (creneaux) {
            _this.creneaux = creneaux;
        });
        console.log("aaaa");
        console.log(this.modelmedecin.id_medecin);
        console.log(this.creneaux);
        console.log(this.model);
        console.log(this.date);
        console.log("aaaa");
    };
    RendezVousComponent.prototype.prendreRendezvous = function () {
        var _this = this;
        console.log("rrrrrrr");
        //console.log(this.modelcreneaux);
        var navigationExtras = {
            queryParams: { 'id': this.id_patient },
            fragment: 'anchor'
        };
        var x = this.model.year + "-" + this.model.month + "-" + this.model.day;
        console.log(x);
        this.ajoutrendez_vous.ajoutrendez_vous(this.id_creneaux, this.id_patient, x)
            .subscribe(function (result) {
            if (result === true) {
                console.log("rendez_vous pris");
                //     this.router.navigate(['/rendezvous'], navigationExtras);
                //     this.router.navigateByUrl('/rendezvous', navigationExtras);
                _this.ngOnInit();
                _this.GetCreneaux();
                //this.router.navigate(['/homeAdmin']);
            }
            else {
            }
        });
    };
    RendezVousComponent.prototype.effacerRendezVous = function () {
        var _this = this;
        this.chargerrendez_vousservice.effacerrendez_vous(this.id_rendez_vous)
            .subscribe(function (resultat) {
            console.log("bien");
            console.log(resultat);
            if (resultat) {
                _this.ngOnInit();
                _this.GetCreneaux();
                console.log("ert");
            }
        });
    };
    return RendezVousComponent;
}());
RendezVousComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'rendezVous.component.html',
    }),
    __metadata("design:paramtypes", [charger_rendez_vous_service_1.ChargerRendez_VousService, index_1.UserService, router_1.ActivatedRoute, ajoutrendez_vous_service_1.AjoutRendez_VousService, router_1.Router])
], RendezVousComponent);
exports.RendezVousComponent = RendezVousComponent;
//# sourceMappingURL=rendezVous.component.js.map