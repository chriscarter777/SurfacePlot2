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
var data_service_1 = require("../data/data.service");
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    } //ctor
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.Initialize();
        this.dataService.averaging.subscribe(function (averaging) { return _this.averaging = averaging; });
        this.dataService.compressn.subscribe(function (compressn) { return _this.compressn = compressn; });
        this.dataService.smoothing.subscribe(function (smoothing) { return _this.smoothing = smoothing; });
        this.dataService.xnum.subscribe(function (xnum) { return _this.xnum = xnum; });
        this.dataService.xmin.subscribe(function (xmin) { return _this.xmin = xmin; });
        this.dataService.xmax.subscribe(function (xmax) { return _this.xmax = xmax; });
        this.dataService.ynum.subscribe(function (ynum) { return _this.ynum = ynum; });
        this.dataService.ymin.subscribe(function (ymin) { return _this.ymin = ymin; });
        this.dataService.ymax.subscribe(function (ymax) { return _this.ymax = ymax; });
        this.dataService.zmin.subscribe(function (zmin) { return _this.zmin = zmin; });
        this.dataService.zmax.subscribe(function (zmax) { return _this.zmax = zmax; });
        this.dataService.xangle.subscribe(function (xangle) { return _this.xangle = xangle; });
        this.dataService.yangle.subscribe(function (yangle) { return _this.yangle = yangle; });
        this.dataService.zangle.subscribe(function (zangle) { return _this.zangle = zangle; });
    };
    AppComponent.prototype.onChange_xnum = function (value) {
        this.dataService.Update_xnum(value);
    };
    AppComponent.prototype.onChange_ynum = function (value) {
        this.dataService.Update_ynum(value);
    };
    AppComponent.prototype.onChange_averaging = function (value) {
        this.dataService.Update_averaging(value);
    };
    AppComponent.prototype.onChange_compressn = function (value) {
        this.dataService.Update_compressn(value);
    };
    AppComponent.prototype.onChange_smoothing = function (value) {
        this.dataService.Update_smoothing(value);
    };
    AppComponent.prototype.onChange_xmin = function (value) {
        this.dataService.Update_xmin(value);
    };
    AppComponent.prototype.onChange_xmax = function (value) {
        this.dataService.Update_xmax(value);
    };
    AppComponent.prototype.onChange_ymin = function (value) {
        this.dataService.Update_ymin(value);
    };
    AppComponent.prototype.onChange_ymax = function (value) {
        this.dataService.Update_ymax(value);
    };
    AppComponent.prototype.onChange_zmin = function (value) {
        this.dataService.Update_zmin(value);
    };
    AppComponent.prototype.onChange_zmax = function (value) {
        this.dataService.Update_zmax(value);
    };
    AppComponent.prototype.onChange_xangle = function (value) {
        this.dataService.Update_xangle(value);
    };
    AppComponent.prototype.onChange_yangle = function (value) {
        this.dataService.Update_yangle(value);
    };
    AppComponent.prototype.onChange_zangle = function (value) {
        this.dataService.Update_zangle(value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            templateUrl: './app-root.component.html',
            styleUrls: ['./app-root.component.css'],
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}()); //component
exports.AppComponent = AppComponent;
//# sourceMappingURL=app-root.component.js.map