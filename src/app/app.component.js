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
var core_1 = require('@angular/core');
var angularfire2_1 = require('angularfire2');
require('material-design-lite/material.min');
require('../../public/css/styles.css');
require('../../public/css/material.green-amber.min.css');
var AppComponent = (function () {
    function AppComponent(af) {
        this.af = af;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.items = this.af.database.list('/courses', {
            query: {
                orderByChild: 'votes'
            }
        }).map(function (items) {
            items.sort(function (a, b) {
                return a.votes > b.votes;
            });
            return items.reverse();
        });
        this.af.auth.subscribe(function (user) {
            _this.user = user;
        });
    };
    AppComponent.prototype.update = function (key) {
        console.log(key);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
        }), 
        __metadata('design:paramtypes', [angularfire2_1.AngularFire])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map