"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var data_service_1 = require("../data/data.service");
describe('DataService', function () {
    var ds;
    beforeEach(function () {
        ds = new data_service_1.DataService();
    });
    it('xnum updates and is observable', function (done) {
        ds.Update_xnum(99);
        ds.xnum.subscribe(function (value) {
            expect(value).toBe(99);
            done();
        });
    });
    it('xmin updates and is observable', function (done) {
        ds.Update_xmin(99);
        ds.xmin.subscribe(function (value) {
            expect(value).toBe(99);
            done();
        });
    });
    it('xmax updates and is observable', function (done) {
        ds.Update_xmax(98);
        ds.xmax.subscribe(function (value) {
            expect(value).toBe(98);
            done();
        });
    });
    it('ynum updates and is observable', function (done) {
        ds.Update_ynum(97);
        ds.ynum.subscribe(function (value) {
            expect(value).toBe(97);
            done();
        });
    });
    it('ymin updates and is observable', function (done) {
        ds.Update_ymin(96);
        ds.ymin.subscribe(function (value) {
            expect(value).toBe(96);
            done();
        });
    });
    it('ymax updates and is observable', function (done) {
        ds.Update_ymax(95);
        ds.ymax.subscribe(function (value) {
            expect(value).toBe(95);
            done();
        });
    });
    it('zmin updates and is observable', function (done) {
        ds.Update_zmin(94);
        ds.zmin.subscribe(function (value) {
            expect(value).toBe(94);
            done();
        });
    });
    it('zmax updates and is observable', function (done) {
        ds.Update_zmax(93);
        ds.zmax.subscribe(function (value) {
            expect(value).toBe(93);
            done();
        });
    });
    it('smoothing updates and is observable', function (done) {
        ds.Update_smoothing(92);
        ds.smoothing.subscribe(function (value) {
            expect(value).toBe(92);
            done();
        });
    });
    it('averaging updates and is observable', function (done) {
        ds.Update_averaging(91);
        ds.averaging.subscribe(function (value) {
            expect(value).toBe(91);
            done();
        });
    });
    it('compressn updates and is observable', function (done) {
        ds.Update_compressn(90);
        ds.compressn.subscribe(function (value) {
            expect(value).toBe(90);
            done();
        });
    });
    it('xangle updates and is observable', function (done) {
        ds.Update_xangle(89);
        ds.xangle.subscribe(function (value) {
            expect(value).toBe(89);
            done();
        });
    });
    it('yangle updates and is observable', function (done) {
        ds.Update_yangle(88);
        ds.yangle.subscribe(function (value) {
            expect(value).toBe(88);
            done();
        });
    });
    it('zangle updates and is observable', function (done) {
        ds.Update_zangle(87);
        ds.zangle.subscribe(function (value) {
            expect(value).toBe(87);
            done();
        });
    });
    it('must tell what has it got in its pocketses', testing_1.async(function () {
        var what = "ring";
        expect(what).toEqual('ring');
    }));
});
//# sourceMappingURL=data.service.spec.js.map