import { Component } from '@angular/core';
import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { AppComponent } from './app-root.component';
import { AppGraphicComponent } from './app-graphic.component';
import { DataService } from '../data/data.service';
import { Title } from '@angular/platform-browser';



describe('AppComponent', () => {
    let component: AppComponent;
    let fixture: ComponentFixture<AppComponent>;
    let element: HTMLElement;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [AppComponent, AppGraphicComponent],
            providers: [DataService]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AppComponent);
        component = fixture.componentInstance;
        element = fixture.nativeElement;
    });

    it('should create the app-root component', () => {
        expect(component).toBeDefined();
    });

    it(`should have as title 'SurfacePlot2'`, () => {
        expect(element.querySelector('title').textContent).toEqual('SurfacePlot2');
    });

    xit('should update averaging', () => {
    });

    xit('should update compression', () => {

    });

    xit('should update smoothing', () => {

    });

    xit('should update xnum', () => {

    });

    xit('should update xmin', () => {

    });

    xit('should update xmax', () => {

    });

    xit('should update ynum', () => {

    });

    xit('should update ymin', () => {

    });

    xit('should update ymax', () => {

    });

    xit('should update zmin', () => {

    });

    xit('should update zmax', () => {

    });

    xit('should update xangle', () => {

    });

    xit('should update yangle', () => {

    });

    xit('should update zangle', () => {

    });

    it('must tell what has it got in its pocketses', () => {
        const what = "ring";
        expect(what).toEqual('ring');
    });

});
