"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_graphic_component_1 = require("./app-graphic.component");
var data_service_1 = require("../data/data.service");
var platform_browser_1 = require("@angular/platform-browser");
describe('AppGraphicTests', function () {
    var component;
    var fixture;
    var element;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_graphic_component_1.AppGraphicComponent],
            providers: [data_service_1.DataService, platform_browser_1.DomSanitizer]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_graphic_component_1.AppGraphicComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });
    it('should create the app-graphic component', function () {
        expect(component).toBeDefined();
    });
    xit('should create a surface with minumum zmin', function () { });
    xit('should create a surface with maximum zmax', function () { });
    xit('should create axes', function () { });
    xit('should rotate a point', function () { });
    xit('should translate and scale a point', function () { });
    it("should colorize a point", function () {
        var fixture = testing_1.TestBed.createComponent(app_graphic_component_1.AppGraphicComponent);
        var component = fixture.debugElement.componentInstance;
        component.zmin = 0;
        component.zmed = 50;
        component.zmax = 100;
        component.zspan = 100;
        expect(component.Color(0)).toEqual('rgb(0, 0, 255)');
        expect(component.Color(50)).toEqual('rgb(63, 255, 63)');
        expect(component.Color(100)).toEqual('rgb(255, 0, 0)');
    });
});
//# sourceMappingURL=app-graphic.component.spec.js.map