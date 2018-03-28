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
var BehaviorSubject_1 = require("rxjs/BehaviorSubject");
var DataService = /** @class */ (function () {
    function DataService() {
        this.xnumSource = new BehaviorSubject_1.BehaviorSubject(this._xnum);
        this.xnum = this.xnumSource.asObservable();
        this.xminSource = new BehaviorSubject_1.BehaviorSubject(this._xmin);
        this.xmin = this.xminSource.asObservable();
        this.xmaxSource = new BehaviorSubject_1.BehaviorSubject(this._xmax);
        this.xmax = this.xmaxSource.asObservable();
        this.ynumSource = new BehaviorSubject_1.BehaviorSubject(this._ynum);
        this.ynum = this.ynumSource.asObservable();
        this.yminSource = new BehaviorSubject_1.BehaviorSubject(this._ymin);
        this.ymin = this.yminSource.asObservable();
        this.ymaxSource = new BehaviorSubject_1.BehaviorSubject(this._ymax);
        this.ymax = this.ymaxSource.asObservable();
        this.zminSource = new BehaviorSubject_1.BehaviorSubject(this._zmin);
        this.zmin = this.zminSource.asObservable();
        this.zmaxSource = new BehaviorSubject_1.BehaviorSubject(this._zmax);
        this.zmax = this.zmaxSource.asObservable();
        this.smoothingSource = new BehaviorSubject_1.BehaviorSubject(this._smoothing);
        this.smoothing = this.smoothingSource.asObservable();
        this.averagingSource = new BehaviorSubject_1.BehaviorSubject(this._averaging);
        this.averaging = this.averagingSource.asObservable();
        this.compressnSource = new BehaviorSubject_1.BehaviorSubject(this._compressn);
        this.compressn = this.compressnSource.asObservable();
        this.xangleSource = new BehaviorSubject_1.BehaviorSubject(this._xangle);
        this.xangle = this.xangleSource.asObservable();
        this.yangleSource = new BehaviorSubject_1.BehaviorSubject(this._yangle);
        this.yangle = this.yangleSource.asObservable();
        this.zangleSource = new BehaviorSubject_1.BehaviorSubject(this._zangle);
        this.zangle = this.zangleSource.asObservable();
        console.log('----data.service initializing');
    } //ctor
    DataService.prototype.Initialize = function () {
        this._xnum = 70;
        this.xnumSource.next(this._xnum);
        this._xmin = 0;
        this.xminSource.next(this._xmin);
        this._xmax = 500;
        this.xmaxSource.next(this._xmax);
        this._ynum = 70;
        this.ynumSource.next(this._xnum);
        this._ymin = 0;
        this.yminSource.next(this._ymin);
        this._ymax = 500;
        this.ymaxSource.next(this._ymax);
        this._zmin = 0;
        this.zminSource.next(this._zmin);
        this._zmax = 500;
        this.zmaxSource.next(this._zmax);
        this._averaging = 0.9;
        this.averagingSource.next(this._averaging);
        this._compressn = 0.09;
        this.compressnSource.next(this._compressn);
        this._smoothing = 35;
        this.smoothingSource.next(this._smoothing);
        this._xangle = -0.35;
        this.xangleSource.next(this._xangle);
        this._yangle = 0;
        this.yangleSource.next(this._yangle);
        this._zangle = 0.25;
        this.zangleSource.next(this._zangle);
    };
    DataService.prototype.Update_xnum = function (value) {
        this._xnum = value;
        this.xnumSource.next(this._xnum);
    };
    DataService.prototype.Update_xmin = function (value) {
        this._xmin = value;
        this.xminSource.next(this._xmin);
    };
    DataService.prototype.Update_xmax = function (value) {
        this._xmax = value;
        this.xmaxSource.next(this._xmax);
    };
    DataService.prototype.Update_ynum = function (value) {
        this._ynum = value;
        this.ynumSource.next(this._ynum);
    };
    DataService.prototype.Update_ymin = function (value) {
        this._ymin = value;
        this.yminSource.next(this._ymin);
    };
    DataService.prototype.Update_ymax = function (value) {
        this._ymax = value;
        this.ymaxSource.next(this._ymax);
    };
    DataService.prototype.Update_zmin = function (value) {
        this._zmin = value;
        this.zminSource.next(this._zmin);
    };
    DataService.prototype.Update_zmax = function (value) {
        this._zmax = value;
        this.zmaxSource.next(this._zmax);
    };
    DataService.prototype.Update_averaging = function (value) {
        this._averaging = value;
        this.averagingSource.next(this._averaging);
    };
    DataService.prototype.Update_compressn = function (value) {
        this._compressn = value;
        this.compressnSource.next(this._compressn);
    };
    DataService.prototype.Update_smoothing = function (value) {
        this._smoothing = value;
        this.smoothingSource.next(this._smoothing);
    };
    DataService.prototype.Update_xangle = function (value) {
        this._xangle = value;
        this.xangleSource.next(this._xangle);
    };
    DataService.prototype.Update_yangle = function (value) {
        this._yangle = value;
        this.yangleSource.next(this._yangle);
    };
    DataService.prototype.Update_zangle = function (value) {
        this._zangle = value;
        this.zangleSource.next(this._zangle);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}()); //service
exports.DataService = DataService;
//# sourceMappingURL=data.service.js.map