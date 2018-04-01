import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppRootComponent } from './app-root.component';
import { AppGraphicComponent } from './app-graphic.component';
import { DataService } from '../data/data.service';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/observable/of';


describe('AppRootTests', () => {
    let component: AppRootComponent;
    let fixture: ComponentFixture<AppRootComponent>;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppRootComponent, AppGraphicComponent],
            providers: [DataService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppRootComponent);
        fixture.detectChanges();
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it('should create the app-root component', () => {
        expect(component).toBeDefined();
    });

    it(`should have as title 'SurfacePlot2'`, () => {
        expect(element.querySelector('title').textContent).toEqual('SurfacePlot2');
    });

    it('should update averaging', () => {
        component.onChange_averaging(-1);
        expect(component.averaging).toEqual(-1);
    });

    it('should update compression', () => {
        component.onChange_compressn(-1);
        expect(component.compressn).toEqual(-1);
    });

    it('should update smoothing', () => {
        component.onChange_smoothing(-1);
        expect(component.smoothing).toEqual(-1);
    });

    it('should update xangle', () => {
        component.onChange_xangle(-1);
        expect(component.xangle).toEqual(-1);
    });

    it('should update xmax', () => {
        component.onChange_xmax(-1);
        expect(component.xmax).toEqual(-1);
    });

    it('should update xmin', () => {
        component.onChange_xmin(-1);
        expect(component.xmin).toEqual(-1);
    });

    it('should update xnum', () => {
        component.onChange_xnum(1);
        expect(component.xnum).toEqual(1);
    });

    it('should update yangle', () => {
        component.onChange_yangle(-1);
        expect(component.yangle).toEqual(-1);
    });

    it('should update ymax', () => {
        component.onChange_ymax(-1);
        expect(component.ymax).toEqual(-1);
    });

    it('should update ymin', () => {
        component.onChange_ymin(-1);
        expect(component.ymin).toEqual(-1);
    });

    it('should update ynum', () => {
        component.onChange_ynum(1);
        expect(component.ynum).toEqual(1);
    });

    it('should update zangle', () => {
        component.onChange_zangle(-1);
        expect(component.zangle).toEqual(-1);
    });

    it('should update zmax', () => {
        component.onChange_zmax(-1);
        expect(component.zmax).toEqual(-1);
    });

    it('should update zmin', () => {
        component.onChange_zmin(-1);
        expect(component.zmin).toEqual(-1);
    });

    it('must tell what has it got in its pocketses', () => {
        const what = "ring";
        expect(what).toEqual('ring');
    });

});
