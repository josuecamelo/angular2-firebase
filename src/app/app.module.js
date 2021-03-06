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
var platform_browser_1 = require('@angular/platform-browser');
var app_component_1 = require('./app.component');
var angularfire2_1 = require('angularfire2');
var firebaseConfig = {
    apiKey: "AIzaSyC6vTKvJfWbYFPWFsF-5cN0UNDzQqxlV7E",
    authDomain: "angular-crud1.firebaseapp.com",
    databaseURL: "https://angular-crud1.firebaseio.com",
    projectId: "angular-crud1",
    storageBucket: "angular-crud1.appspot.com",
    messagingSenderId: "953415941333"
};
var myFirebaseAuthConfig = {
    provider: angularfire2_1.AuthProviders.Github,
    method: angularfire2_1.AuthMethods.Popup
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                angularfire2_1.AngularFireModule.initializeApp(firebaseConfig, myFirebaseAuthConfig)
            ],
            declarations: [
                app_component_1.AppComponent
            ],
            bootstrap: [app_component_1.AppComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map