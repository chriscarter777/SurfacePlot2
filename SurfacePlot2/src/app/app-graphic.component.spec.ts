import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppGraphicComponent } from './app-graphic.component';
import { DataService } from '../data/data.service';
import { Point, Rotation } from '../data/interfaces';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

describe('AppGraphicComponent', () => {
    let component: AppGraphicComponent;
    let fixture: ComponentFixture<AppGraphicComponent>;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppGraphicComponent],
            providers: [DataService, DomSanitizer]
          }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppGraphicComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it('should create the app-graphic component', () => {
        expect(component).toBeDefined();
    });

    xit('should create a surface with minumum zmin', () => { });

    xit('should create a surface with maximum zmax', () => { });

    xit('should create axes', () => { });

    xit('should rotate a point', () => { });

    xit('should translate and scale a point', () => { });

    it(`should colorize a point`, () => {
        const fixture = TestBed.createComponent(AppGraphicComponent);
        const component = fixture.debugElement.componentInstance;
        component.zmin = 0;
        component.zmed = 50;
        component.zmax = 100;
        component.zspan = 100;
        expect(component.Color(0)).toEqual('rgb(0, 0, 255)');
        expect(component.Color(50)).toEqual('rgb(63, 255, 63)');
        expect(component.Color(100)).toEqual('rgb(255, 0, 0)');
    });

});
