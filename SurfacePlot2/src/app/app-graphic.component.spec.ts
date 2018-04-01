import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppGraphicComponent } from './app-graphic.component';
import { DataService } from '../data/data.service';
import { Point, Rotation } from '../data/interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

describe('AppGraphicTests', () => {
    let component: AppGraphicComponent;
    let fixture: ComponentFixture<AppGraphicComponent>;
    let element: HTMLElement;
    let surface: Point[][] = [
        [{ x: 0, y: 0, z: 0, color: 'black' }, { x: 0, y: 0, z: 0, color: 'black' }, { x: 0, y: 0, z: 0, color: 'black' }],
        [{ x: 100, y: 0, z: 0, color: 'black' }, { x: 100, y: 100, z: 0, color: 'black' }, { x: 100, y:0, z: 100, color: 'black' }],
        [{ x: 0, y: 100, z: 0, color: 'black' }, { x: 100, y: 100, z: 0, color: 'black' }, { x: 0, y: 100, z: 100, color: 'black' }],
        [{ x: 0, y: 0, z: 100, color: 'black' }, { x: 100, y: 0, z: 100, color: 'black' }, { x: 0, y: 100, z: 100, color: 'black' }],
        [{ x: 100, y: 100, z: 100, color: 'black' }, { x: 100, y: 100, z: 100, color: 'black' }, { x:100, y: 100, z: 100, color: 'black' }]
    ];
    let box: Point[] = [
        { x: 0, y: 0, z: 0, color: 'black' },
        { x: 0, y: 0, z: 100, color: 'black' },
        { x: 100, y: 0, z: 100, color: 'black' },
        { x: 100, y: 0, z: 0, color: 'black' },
        { x: 0, y: 100, z: 0, color: 'black' },
        { x: 0, y: 100, z: 100, color: 'black' },
        { x: 100, y: 100, z: 100, color: 'black' },
        { x: 100, y: 100, z: 0, color: 'black' }
    ];

    let point: Point = { x: 50, y: 50, z: 50, color: 'black' };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppGraphicComponent],
            providers: [DataService, DomSanitizer]
          }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppGraphicComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
        component.averaging = 0.9;
        component.compressn = 0.09;
        component.smoothing = 10;
        component.xangle = 0;
        component.xmax = 100;
        component.xmin = 0;
        component.xnum = 4;
        component.yangle = 0;
        component.ymax = 100;
        component.ymin = 0;
        component.ynum = 3;
        component.zangle = 0;
        component.zmax = 100;
        component.zmin = 0;
        element = fixture.nativeElement;
    });

    it('should create the app-graphic component', () => {
        expect(component).toBeDefined();
    });

    it('should complete the create chain', () => {
        component.ready2Render = false;
        component.CreateNew();
        expect(component.ready2Render).toEqual(true);
    });

    it('should create a box', () => {
        var box: Point[] = component.GenerateBox(component.xmin, component.xmax, component.ymin, component.ymax, component.zmin, component.zmax);
        expect(box).toEqual(box)
    });

    it('should create a raw surface', () => {
        var rawsurface: Point[][] = component.GenerateData(component.xnum, component.xmin, component.xmax, component.ynum, component.ymin, component.ymax, component.zmin, component.zmax);
        expect(rawsurface.length).toEqual(4);
        expect(rawsurface[0].length).toEqual(3);
        expect(rawsurface[0].every(() => this.z >= 0));
        expect(rawsurface[0].every(() => this.z <= 100));
        expect(rawsurface[3].every(() => this.z >= 0));
        expect(rawsurface[3].every(() => this.z <= 100));
    });

    it('should smooth a surface', () => {
        var smoothsurface: Point[][] = component.SmoothData(component.xnum, component.ynum, component.zmin, component.zmax, component.averaging, component.compressn, component.smoothing, surface);
        expect(smoothsurface.length).toEqual(4);
        expect(smoothsurface[0].length).toEqual(3);
        expect(smoothsurface[0].every(() => this.z >= 0));
        expect(smoothsurface[0].every(() => this.z <= 100));
        expect(smoothsurface[3].every(() => this.z >= 0));
        expect(smoothsurface[3].every(() => this.z <= 100));
    });

    it(`should colorize a point`, () => {
        const fixture = TestBed.createComponent(AppGraphicComponent);
        const component = fixture.debugElement.componentInstance;
        expect(component.Color(0, 0, 100)).toEqual('rgb(0, 0, 255)');
        expect(component.Color(50, 0, 100)).toEqual('rgb(63, 255, 63)');
        expect(component.Color(100, 0, 100)).toEqual('rgb(255, 0, 0)');
    });

    it('should colorize a surface', () => {
        var colorsurface: Point[][] = component.ColorizeData(component.xnum, component.xmin, component.xmax, component.ynum, component.ymin, component.ymax, component.zmin, component.zmax, surface);
        expect(colorsurface.length).toEqual(4);
        expect(colorsurface[0].length).toEqual(3);
        expect(colorsurface[0].every(() => this.z >= 0));
        expect(colorsurface[0].every(() => this.z <= 100));
        expect(colorsurface[0].every(() => this.color !== 'black'));
        expect(colorsurface[3].every(() => this.z >= 0));
        expect(colorsurface[3].every(() => this.z <= 100));
        expect(colorsurface[3].every(() => this.color !== 'black'));
    });

    it('should rotate a point', () => {
        var xrt: number[][] = component.PopulateXRotationMatrix(component.xangle);
        var yrt: number[][] = component.PopulateYRotationMatrix(component.yangle);
        var zrt: number[][] = component.PopulateZRotationMatrix(component.zangle);
        var rotpt: Point = component.RotatePoint(xrt, yrt, zrt, point);
        expect(rotpt.x).toEqual(50);
        expect(rotpt.y).toEqual(50);
        expect(rotpt.z).toEqual(50);
    });

    it('should scale a point', () => {
        var p: Point = component.Scale(0.5, 0.5, point);
        expect(p.x).toEqual(25);
        expect(p.z).toEqual(-25);
    });

    it('should translate a point', () => {
        var p: Point = component.Translate(3,5, point);
        expect(p.x).toEqual(53);
        expect(p.z).toEqual(55);
    });

    //the following test is skipped because jasmine does not recognize sanitizer.bypassSecurityTrustHtml
    xit('should render', () => {
        component.CreateSVG(component.xnum, component.ynum, box, surface);
        expect(component.dataSvg).not.toBeNull();
    });

});
