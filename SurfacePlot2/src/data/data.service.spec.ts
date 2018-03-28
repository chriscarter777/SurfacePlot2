import { TestBed, async } from '@angular/core/testing';
import { DataService } from '../data/data.service';
import { Point, Rotation } from './interfaces';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

describe('DataService', () => {
    let ds: DataService;
    beforeEach(() => {
        ds = new DataService();
    });

    it('xnum updates and is observable',
        (done: DoneFn) => {
            ds.Update_xnum(99);
            ds.xnum.subscribe(value => {
                expect(value).toBe(99);
                done();
            });
        });

    it('xmin updates and is observable',
        (done: DoneFn) => {
            ds.Update_xmin(99);
            ds.xmin.subscribe(value => {
                expect(value).toBe(99);
                done();
            });
        });

    it('xmax updates and is observable',
        (done: DoneFn) => {
            ds.Update_xmax(98);
            ds.xmax.subscribe(value => {
                expect(value).toBe(98);
                done();
            });
        });

    it('ynum updates and is observable',
        (done: DoneFn) => {
            ds.Update_ynum(97);
            ds.ynum.subscribe(value => {
                expect(value).toBe(97);
                done();
            });
        });

    it('ymin updates and is observable',
        (done: DoneFn) => {
            ds.Update_ymin(96);
            ds.ymin.subscribe(value => {
                expect(value).toBe(96);
                done();
            });
        });

    it('ymax updates and is observable',
        (done: DoneFn) => {
            ds.Update_ymax(95);
            ds.ymax.subscribe(value => {
                expect(value).toBe(95);
                done();
            });
        });

    it('zmin updates and is observable',
        (done: DoneFn) => {
            ds.Update_zmin(94);
            ds.zmin.subscribe(value => {
                expect(value).toBe(94);
                done();
            });
        });

    it('zmax updates and is observable',
        (done: DoneFn) => {
            ds.Update_zmax(93);
            ds.zmax.subscribe(value => {
                expect(value).toBe(93);
                done();
            });
        });

    it('smoothing updates and is observable',
        (done: DoneFn) => {
            ds.Update_smoothing(92);
            ds.smoothing.subscribe(value => {
                expect(value).toBe(92);
                done();
            });
        });

    it('averaging updates and is observable',
        (done: DoneFn) => {
            ds.Update_averaging(91);
            ds.averaging.subscribe(value => {
                expect(value).toBe(91);
                done();
            });
        });

    it('compressn updates and is observable',
        (done: DoneFn) => {
            ds.Update_compressn(90);
            ds.compressn.subscribe(value => {
                expect(value).toBe(90);
                done();
            });
        });

    it('xangle updates and is observable',
        (done: DoneFn) => {
            ds.Update_xangle(89);
            ds.xangle.subscribe(value => {
                expect(value).toBe(89);
                done();
            });
        });

    it('yangle updates and is observable',
        (done: DoneFn) => {
            ds.Update_yangle(88);
            ds.yangle.subscribe(value => {
                expect(value).toBe(88);
                done();
            });
        });

    it('zangle updates and is observable',
        (done: DoneFn) => {
            ds.Update_zangle(87);
            ds.zangle.subscribe(value => {
                expect(value).toBe(87);
                done();
            });
        });

    it('must tell what has it got in its pocketses', async(() => {
        const what = "ring";
        expect(what).toEqual('ring');
    }));
});
