"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var app_root_component_1 = require("./app-root.component");
var app_graphic_component_1 = require("./app-graphic.component");
var data_service_1 = require("../data/data.service");
describe('AppComponent', function () {
    var component;
    var fixture;
    var element;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [app_root_component_1.AppComponent, app_graphic_component_1.AppGraphicComponent],
            providers: [data_service_1.DataService]
        }).compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(app_root_component_1.AppComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });
    it('should create the app-root component', function () {
        expect(component).toBeDefined();
    });
    it("should have as title 'SurfacePlot2'", function () {
        expect(element.querySelector('title').textContent).toEqual('SurfacePlot2');
    });
    xit('should update averaging', function () {
    });
    xit('should update compression', function () {
    });
    xit('should update smoothing', function () {
    });
    xit('should update xnum', function () {
    });
    xit('should update xmin', function () {
    });
    xit('should update xmax', function () {
    });
    xit('should update ynum', function () {
    });
    xit('should update ymin', function () {
    });
    xit('should update ymax', function () {
    });
    xit('should update zmin', function () {
    });
    xit('should update zmax', function () {
    });
    xit('should update xangle', function () {
    });
    xit('should update yangle', function () {
    });
    xit('should update zangle', function () {
    });
    it('must tell what has it got in its pocketses', function () {
        var what = "ring";
        expect(what).toEqual('ring');
    });
});
//# sourceMappingURL=app-root.component.spec.js.map