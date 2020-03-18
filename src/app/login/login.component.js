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
var router_1 = require("@angular/router");
var index_1 = require("../_services/index");
var LoginComponent = (function () {
    function LoginComponent(router, authenticationService) {
        this.router = router;
        this.authenticationService = authenticationService;
        this.model = {};
        this.loading = false;
        this.error = '';
    }
    LoginComponent.prototype.ngOnInit = function () {
        // reset login status
        this.authenticationService.logout();
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(function (result1) {
            if (result1 > 0) {
                console.log("gggggggggggggggggggg");
                switch (result1) {
                    case 1:
                        _this.router.navigate(['/homeSecretaire']);
                        break;
                    case 2:
                        _this.router.navigate(['/homeAdmin']);
                        break;
                    case 3:
                        _this.router.navigate(['/homeMedecin']);
                        break;
                    case 4:
                        _this.router.navigate(['/homePharmacien']);
                        break;
                    default:
                        _this.router.navigate(['']);
                        ;
                }
                //this.router.navigate(['/homeAdmin']);
            }
            else {
                _this.error = 'Username or password is incorrect';
                _this.loading = false;
            }
        }, function (error) {
            _this.error = 'Username or password is incorrect';
            //    console.log(error); //gives an object at this point
            console.log("errorrrr");
            _this.loading = false;
            _this.model.username = '';
            _this.model.password = '';
            _this.router.navigate(['']);
        });
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        templateUrl: 'login.component.html',
        styleUrls: ['login.component.scss'],
    }),
    __metadata("design:paramtypes", [router_1.Router,
        index_1.AuthenticationService])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=login.component.js.map