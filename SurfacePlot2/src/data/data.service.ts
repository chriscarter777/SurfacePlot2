import { Inject, Injectable, EventEmitter, Output } from '@angular/core';
import { Point, Rotation } from './interfaces';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {
    private _xnum: number;
    private xnumSource = new BehaviorSubject<number>(this._xnum);
    public xnum = this.xnumSource.asObservable();

    private _xmin: number;
    private xminSource = new BehaviorSubject<number>(this._xmin);
    public xmin = this.xminSource.asObservable();

    private _xmax: number;
    private xmaxSource = new BehaviorSubject<number>(this._xmax);
    public xmax = this.xmaxSource.asObservable();

    private _ynum: number;
    private ynumSource = new BehaviorSubject<number>(this._ynum);
    public ynum = this.ynumSource.asObservable();

    private _ymin: number;
    private yminSource = new BehaviorSubject<number>(this._ymin);
    public ymin = this.yminSource.asObservable();

    private _ymax: number;
    private ymaxSource = new BehaviorSubject<number>(this._ymax);
    public ymax = this.ymaxSource.asObservable();

    private _zmin: number;
    private zminSource = new BehaviorSubject<number>(this._zmin);
    public zmin = this.zminSource.asObservable();

    private _zmax: number;
    private zmaxSource = new BehaviorSubject<number>(this._zmax);
    public zmax = this.zmaxSource.asObservable();

    private _smoothing: number;
    private smoothingSource = new BehaviorSubject<number>(this._smoothing);
    public smoothing = this.smoothingSource.asObservable();

    private _averaging: number;
    private averagingSource = new BehaviorSubject<number>(this._averaging);
    public averaging = this.averagingSource.asObservable();

    private _compressn: number;
    private compressnSource = new BehaviorSubject<number>(this._compressn);
    public compressn = this.compressnSource.asObservable();

    private _xangle: number;
    private xangleSource = new BehaviorSubject<number>(this._xangle);
    public xangle = this.xangleSource.asObservable();

    private _yangle: number;
    private yangleSource = new BehaviorSubject<number>(this._yangle);
    public yangle = this.yangleSource.asObservable();

    private _zangle: number;
    private zangleSource = new BehaviorSubject<number>(this._zangle);
    public zangle = this.zangleSource.asObservable();

    constructor() {
        console.log('----data.service initializing');
    }  //ctor

    public Initialize() {
        this._averaging = 0.9;
        this.averagingSource.next(this._averaging);
        this._compressn = 0.09;
        this.compressnSource.next(this._compressn);
        this._smoothing = 35;
        this.smoothingSource.next(this._smoothing);

        this._xangle = -0.35;
        this.xangleSource.next(this._xangle);
        this._xmax = 500;
        this.xmaxSource.next(this._xmax);
        this._xmin = 0;
        this.xminSource.next(this._xmin);
        this._xnum = 70;
        this.xnumSource.next(this._xnum);

        this._yangle = 0;
        this.yangleSource.next(this._yangle);
        this._ymax = 500;
        this.ymaxSource.next(this._ymax);
        this._ymin = 0;
        this.yminSource.next(this._ymin);
        this._ynum = 70;
        this.ynumSource.next(this._xnum);

        this._zangle = 0.25;
        this.zangleSource.next(this._zangle);
        this._zmax = 500;
        this.zmaxSource.next(this._zmax);
        this._zmin = 0;
        this.zminSource.next(this._zmin);
    }

    public Update_xnum(value: number) {
        this._xnum = value;
        this.xnumSource.next(this._xnum);
    }

    public Update_xmin(value: number) {
        this._xmin = value;
        this.xminSource.next(this._xmin);
    }

    public Update_xmax(value: number) {
        this._xmax = value;
        this.xmaxSource.next(this._xmax);
    }

    public Update_ynum(value: number) {
        this._ynum = value;
        this.ynumSource.next(this._ynum);
    }

    public Update_ymin(value: number) {
        this._ymin = value;
        this.yminSource.next(this._ymin);
    }

    public Update_ymax(value: number) {
        this._ymax = value;
        this.ymaxSource.next(this._ymax);
    }

    public Update_zmin(value: number) {
        this._zmin = value;
        this.zminSource.next(this._zmin);
    }

    public Update_zmax(value: number) {
        this._zmax = value;
        this.zmaxSource.next(this._zmax);
    }

   public Update_averaging(value: number) {
       this._averaging = value;
        this.averagingSource.next(this._averaging);
    }

    public Update_compressn(value: number) {
        this._compressn = value;
        this.compressnSource.next(this._compressn);
  }

    public Update_smoothing(value: number) {
        this._smoothing = value;
        this.smoothingSource.next(this._smoothing);
    }

     public Update_xangle(value: number) {
        this._xangle = value;
        this.xangleSource.next(this._xangle);
    }

    public Update_yangle(value: number) {
        this._yangle = value;
        this.yangleSource.next(this._yangle);
   }

    public Update_zangle(value: number) {
        this._zangle = value;
        this.zangleSource.next(this._zangle);
    }

}  //service
