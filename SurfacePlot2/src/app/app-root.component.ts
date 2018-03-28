import { Component } from '@angular/core';
import { DataService } from '../data/data.service';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app-root.component.html',
  styleUrls: ['./app-root.component.css'],
})
export class AppComponent {
    xnum: number;
    ynum: number;
    xmin: number;
    xmax: number;
    ymin: number;
    ymax: number;
    zmin: number;
    zmax: number;
    smoothing: number;
    averaging: number;
    compressn: number;
    xangle: number;
    yangle: number;
    zangle: number;

    constructor(private dataService: DataService) {
    }  //ctor

    ngOnInit() {
        this.dataService.Initialize();
        this.dataService.averaging.subscribe((averaging) => this.averaging = averaging);
        this.dataService.compressn.subscribe((compressn) => this.compressn = compressn);
        this.dataService.smoothing.subscribe((smoothing) => this.smoothing = smoothing);
        this.dataService.xnum.subscribe((xnum) => this.xnum = xnum);
        this.dataService.xmin.subscribe((xmin) => this.xmin = xmin);
        this.dataService.xmax.subscribe((xmax) => this.xmax = xmax);
        this.dataService.ynum.subscribe((ynum) => this.ynum = ynum);
        this.dataService.ymin.subscribe((ymin) => this.ymin = ymin);
        this.dataService.ymax.subscribe((ymax) => this.ymax = ymax);
        this.dataService.zmin.subscribe((zmin) => this.zmin = zmin);
        this.dataService.zmax.subscribe((zmax) => this.zmax = zmax);
        this.dataService.xangle.subscribe((xangle) => this.xangle = xangle);
        this.dataService.yangle.subscribe((yangle) => this.yangle = yangle);
        this.dataService.zangle.subscribe((zangle) => this.zangle = zangle);
    }

    onChange_xnum(value: number) {
        this.dataService.Update_xnum(value);
    }

    onChange_ynum(value: number) {
        this.dataService.Update_ynum(value);
    }

    onChange_averaging(value: number) {
        this.dataService.Update_averaging(value);
    }

    onChange_compressn(value: number) {
        this.dataService.Update_compressn(value);
    }

    onChange_smoothing(value: number) {
        this.dataService.Update_smoothing(value);
    }

    onChange_xmin(value: number) {
        this.dataService.Update_xmin(value);
    }

    onChange_xmax(value: number) {
        this.dataService.Update_xmax(value);
    }

    onChange_ymin(value: number) {
        this.dataService.Update_ymin(value);
    }

    onChange_ymax(value: number) {
        this.dataService.Update_ymax(value);
    }

    onChange_zmin(value: number) {
        this.dataService.Update_zmin(value);
    }

    onChange_zmax(value: number) {
        this.dataService.Update_zmax(value);
    }

    onChange_xangle(value: number) {
        this.dataService.Update_xangle(value);
    }

    onChange_yangle(value: number) {
        this.dataService.Update_yangle(value);
    }

    onChange_zangle(value: number) {
        this.dataService.Update_zangle(value);
    }

}  //component
