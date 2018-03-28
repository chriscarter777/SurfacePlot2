webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-graphic.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h4{\r\n    display:block;\r\n    width:100%;\r\n    text-align:center;\r\n    margin-top:50px;\r\n}\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-graphic.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!dataSvg\">\r\n    <h4>GRAPHIC HERE</h4>\r\n</div>\r\n<div *ngIf=\"dataSvg\" [innerHTML]=\"dataSvg\">\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app-graphic.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/data/data.service.ts");
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var AppGraphicComponent = /** @class */ (function () {
    function AppGraphicComponent(dataService, sanitizer) {
        this.dataService = dataService;
        this.sanitizer = sanitizer;
    } //ctor
    AppGraphicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.averaging.subscribe(function (averaging) { _this.averaging = averaging; _this.CreateNew(); _this.Render(); });
        this.dataService.compressn.subscribe(function (compressn) { _this.compressn = compressn; _this.CreateNew(); _this.Render(); });
        this.dataService.smoothing.subscribe(function (smoothing) { _this.smoothing = smoothing; _this.CreateNew(); _this.Render(); });
        this.dataService.smoothing.subscribe(function (smoothing) { _this.smoothing = smoothing; _this.CreateNew(); _this.Render(); });
        this.dataService.xnum.subscribe(function (xnum) { _this.xnum = xnum; _this.CreateNew(); _this.Render(); });
        this.dataService.xmin.subscribe(function (xmin) { _this.xmin = xmin; _this.CreateNew(); _this.Render(); });
        this.dataService.xmax.subscribe(function (xmax) { _this.xmax = xmax; _this.CreateNew(); _this.Render(); });
        this.dataService.ynum.subscribe(function (ynum) { _this.ynum = ynum; _this.CreateNew(); _this.Render(); });
        this.dataService.ymin.subscribe(function (ymin) { _this.ymin = ymin; _this.CreateNew(); _this.Render(); });
        this.dataService.ymax.subscribe(function (ymax) { _this.ymax = ymax; _this.CreateNew(); _this.Render(); });
        this.dataService.zmin.subscribe(function (zmin) { _this.zmin = zmin; _this.CreateNew(); _this.Render(); });
        this.dataService.zmax.subscribe(function (zmax) { _this.zmax = zmax; _this.CreateNew(); _this.Render(); });
        this.dataService.xangle.subscribe(function (xangle) { _this.xangle = xangle; _this.Render(); });
        this.dataService.yangle.subscribe(function (yangle) { _this.yangle = yangle; _this.Render(); });
        this.dataService.zangle.subscribe(function (zangle) { _this.zangle = zangle; _this.Render(); });
        this.windowHeight = window.screen.height;
        this.windowWidth = window.screen.width;
        this.CreateNew();
        this.Render();
    }; //ngOnInit
    //-------------------------------- CREATE NEW SURFACE --------------------------------
    AppGraphicComponent.prototype.CreateNew = function () {
        if (typeof this.xnum !== 'undefined' && typeof this.ynum !== 'undefined' && typeof this.averaging !== 'undefined' && typeof this.compressn !== 'undefined' && typeof this.smoothing !== 'undefined' && typeof this.xmin !== 'undefined' && typeof this.xmax !== 'undefined' && typeof this.ymin !== 'undefined' && typeof this.ymax !== 'undefined' && typeof this.zmin !== 'undefined' && typeof this.zmax !== 'undefined' && typeof this.xangle !== 'undefined' && typeof this.yangle !== 'undefined' && typeof this.zangle !== 'undefined') {
            this.ready2Render = false;
            this.box_raw = this.GenerateBox(this.xmin, this.xmax, this.ymin, this.ymax, this.zmin, this.zmax);
            this.data_raw = this.GenerateData(this.xnum, this.xmin, this.xmax, this.ynum, this.ymin, this.ymax, this.zmin, this.zmax);
            //console.log("***GENERATE***");
            //for (var i = 0; i < this.xnum; i++) {
            //    for (var j = 0; j < this.ynum; j++) {
            //        {
            //console.log("i=" + i + " j=" + j + " x=" + Math.floor(this.data_raw[i][j].x) + " y=" + Math.floor(this.data_raw[i][j].y) + " z=" + Math.floor(this.data_raw[i][j].z) + " color=" + this.data_raw[i][j].color);
            //        }
            //    }
            //}
            this.data_smooth = this.SmoothData(this.xnum, this.ynum, this.zmin, this.zmax, this.averaging, this.compressn, this.smoothing, this.data_raw);
            //console.log("***SMOOTH***");
            //for (var i = 0; i < this.xnum; i++) {
            //    for (var j = 0; j < this.ynum; j++) {
            //        {
            //console.log("i=" + i + " j=" + j + " x=" + Math.floor(this.data_smooth[i][j].x) + " y=" + Math.floor(this.data_smooth[i][j].y) + " z=" + Math.floor(this.data_smooth[i][j].z) + " color=" + this.data_smooth[i][j].color);
            //        }
            //    }
            //}
            this.data_colored = this.ColorizeData(this.xnum, this.xmin, this.xmax, this.ynum, this.xmin, this.ymax, this.zmin, this.zmax, this.data_smooth);
            //console.log("***COLORIZE***");
            //for (var i = 0; i < this.xnum; i++){
            //    for (var j = 0; j < this.ynum; j++) {
            //        {
            //            console.log("i=" + i + " j=" + j + " x=" + Math.floor(this.data_colored[i][j].x) + " y=" + Math.floor(this.data_colored[i][j].y) + " z=" + Math.floor(this.data_colored[i][j].z) + " color=" + this.data_colored[i][j].color);
            //        }
            //    }
            //}
            this.ready2Render = true;
        }
    }; //CreateSurface
    AppGraphicComponent.prototype.GenerateBox = function (xmin, xmax, ymin, ymax, zmin, zmax) {
        return [
            { x: xmin, y: ymin, z: zmin, color: 'black' },
            { x: xmin, y: ymin, z: zmax, color: 'black' },
            { x: xmax, y: ymin, z: zmax, color: 'black' },
            { x: xmax, y: ymin, z: zmin, color: 'black' },
            { x: xmin, y: ymax, z: zmin, color: 'black' },
            { x: xmin, y: ymax, z: zmax, color: 'black' },
            { x: xmax, y: ymax, z: zmax, color: 'black' },
            { x: xmax, y: ymax, z: zmin, color: 'black' }
        ];
    };
    AppGraphicComponent.prototype.GenerateData = function (xnum, xmin, xmax, ynum, ymin, ymax, zmin, zmax) {
        var resultarray = new Array(xnum);
        for (var i = 0; i < xnum; i++) {
            resultarray[i] = new Array(ynum);
        }
        var xstep = Math.floor((xmax - xmin) / xnum);
        var ystep = Math.floor((ymax - ymin) / ynum);
        for (var i = 0; i < xnum; i++) {
            for (var j = 0; j < ynum; j++) {
                var z = zmin + (Math.random() * (zmax - zmin));
                resultarray[i][j] = { x: xmin + (i * xstep), y: ymin + (j * ystep), z: z, color: null };
            }
        }
        return resultarray;
    }; //GenerateData
    AppGraphicComponent.prototype.SmoothData = function (xnum, ynum, zmin, zmax, averaging, compressn, smoothing, data) {
        var zspan = zmax - zmin;
        var resultarray = new Array(xnum);
        for (var i = 0; i < xnum; i++) {
            resultarray[i] = new Array(ynum);
            for (var j = 0; j < ynum; j++) {
                resultarray[i][j] = { x: data[i][j].x, y: data[i][j].y, z: data[i][j].z, color: null };
            }
        }
        for (var t = 0; t < smoothing; t++) {
            for (var i = 0; i < xnum; i++) {
                for (var j = 0; j < ynum; j++) {
                    var difference = 0;
                    var denominator = 0;
                    if (i > 0) {
                        difference += resultarray[i - 1][j].z - resultarray[i][j].z;
                        denominator++;
                    }
                    if (j > 0) {
                        difference += resultarray[i][j - 1].z - resultarray[i][j].z;
                        denominator++;
                    }
                    if (i > 0 && j > 0) {
                        difference += resultarray[i - 1][j - 1].z - resultarray[i][j].z;
                        denominator++;
                    }
                    if (i < (xnum - 1)) {
                        difference += resultarray[i + 1][j].z - resultarray[i][j].z;
                        denominator++;
                    }
                    if (j < (ynum - 1)) {
                        difference += resultarray[i][j + 1].z - resultarray[i][j].z;
                        denominator++;
                    }
                    if (i < (xnum - 1) && j < (ynum - 1)) {
                        difference += resultarray[i + 1][j + 1].z - resultarray[i][j].z;
                        denominator++;
                    }
                    if (denominator > 0) {
                        resultarray[i][j].z = resultarray[i][j].z + (difference / denominator * averaging);
                    }
                    //compress to reverse the flattening which accompanies averaging
                    var positionRelativeToMax = (resultarray[i][j].z - zmin) / zspan;
                    var distanceToMax = zmax - resultarray[i][j].z;
                    var positionRelativeToMin = (zmax - resultarray[i][j].z) / zspan;
                    var distanceToMin = resultarray[i][j].z - zmin;
                    if (positionRelativeToMax > 0.5) {
                        resultarray[i][j].z += (Math.pow(positionRelativeToMax, 4) * distanceToMax * compressn);
                    }
                    if (positionRelativeToMin > 0.5) {
                        resultarray[i][j].z -= (Math.pow(positionRelativeToMin, 4) * distanceToMin * compressn);
                    }
                } //j
            } //i
        } //t
        return resultarray;
    }; //SmoothData
    AppGraphicComponent.prototype.ColorizeData = function (xnum, xmin, xmax, ynum, ymin, ymax, zmin, zmax, data) {
        var resultarray = new Array(xnum);
        for (var i = 0; i < xnum; i++) {
            resultarray[i] = new Array(ynum);
        }
        for (var i = 0; i < xnum; i++) {
            for (var j = 0; j < ynum; j++) {
                resultarray[i][j] = { x: data[i][j].x, y: data[i][j].y, z: data[i][j].z, color: this.Color(data[i][j].z, zmin, zmax) };
            }
        }
        return resultarray;
    }; //ColorizeData
    AppGraphicComponent.prototype.Color = function (z, zmin, zmax) {
        var zspan = zmax - zmin;
        var zmean = (zmax + zmin) / 2;
        var positionRelativeToMax = (z - zmin) / zspan;
        var positionRelativeToMid = 1 - (Math.abs(z - zmean) / (zspan / 2));
        var positionRelativeToMin = (zmax - z) / zspan;
        var red = Math.floor(Math.pow(positionRelativeToMax, 2) * 255);
        var grn = Math.floor(Math.pow(positionRelativeToMid, 3) * 255);
        var blu = Math.floor(Math.pow(positionRelativeToMin, 2) * 255);
        return "rgb(" + red + ", " + grn + ", " + blu + ")";
    }; //Color
    //-------------------------------- ROTATE, SCALE AND DRAW (RENDER) SURFACE AND BOX --------------------------------
    AppGraphicComponent.prototype.Render = function () {
        if (this.ready2Render === true && typeof this.yangle !== 'undefined' && typeof this.zangle !== 'undefined') {
            this.xRotationMatrix = this.PopulateXRotationMatrix(this.xangle);
            this.yRotationMatrix = this.PopulateYRotationMatrix(this.yangle);
            this.zRotationMatrix = this.PopulateZRotationMatrix(this.zangle);
            this.box_rotated = this.RotateBox(this.xRotationMatrix, this.yRotationMatrix, this.zRotationMatrix, this.box_raw);
            this.data_rotated = this.RotateData(this.xnum, this.ynum, this.xRotationMatrix, this.yRotationMatrix, this.zRotationMatrix, this.data_colored);
            var volumeMinX = 9999;
            var volumeMaxX = 0;
            var volumeMinZ = 9999;
            var volumeMaxZ = 0;
            for (var i = 0; i < 8; i++) {
                if (this.box_rotated[i].x < volumeMinX) {
                    volumeMinX = this.box_rotated[i].x;
                }
                if (this.box_rotated[i].x > volumeMaxX) {
                    volumeMaxX = this.box_rotated[i].x;
                }
                if (this.box_rotated[i].z < volumeMinZ) {
                    volumeMinZ = this.box_rotated[i].z;
                }
                if (this.box_rotated[i].z > volumeMaxZ) {
                    volumeMaxZ = this.box_rotated[i].z;
                }
            }
            var volumeXSpan = volumeMaxX - volumeMinX;
            var volumeZSpan = volumeMaxZ - volumeMinZ;
            if (volumeXSpan != 0) {
                this.xscale = 1000 / volumeXSpan;
            }
            else {
                this.xscale = 1;
            }
            if (volumeZSpan != 0) {
                this.zscale = 550 / volumeZSpan;
            }
            else {
                this.zscale = 1;
            }
            this.box_scaled = this.ScaleBox(this.xscale, this.zscale, this.box_rotated);
            this.data_scaled = this.ScaleData(this.xnum, this.ynum, this.xscale, this.zscale, this.data_rotated);
            var volumeMinX = 9999;
            var volumeMinZ = 9999;
            for (var i = 0; i < 8; i++) {
                if (this.box_scaled[i].x < volumeMinX) {
                    volumeMinX = this.box_scaled[i].x;
                }
                if (this.box_scaled[i].z < volumeMinZ) {
                    volumeMinZ = this.box_scaled[i].z;
                }
            }
            this.xoffset = 400 - volumeMinX;
            this.zoffset = 50 - volumeMinZ;
            this.box_translated = this.TranslateBox(this.xoffset, this.zoffset, this.box_scaled);
            this.data_translated = this.TranslateData(this.xnum, this.ynum, this.xoffset, this.zoffset, this.data_scaled);
            this.CreateSVG(this.xnum, this.ynum, this.box_translated, this.data_translated);
        }
    }; //RenderSurface
    AppGraphicComponent.prototype.PopulateXRotationMatrix = function (xangle) {
        var rotationMatrix = [
            [1, 0, 0],
            [0, Math.cos(xangle), (-1) * Math.sin(xangle)],
            [0, Math.sin(xangle), Math.cos(xangle)]
        ];
        return rotationMatrix;
    }; //PopulateXRotationMatrix
    AppGraphicComponent.prototype.PopulateYRotationMatrix = function (yangle) {
        var rotationMatrix = [
            [Math.cos(yangle), 0, Math.sin(yangle)],
            [0, 1, 0],
            [(-1) * Math.sin(yangle), 0, Math.cos(yangle)]
        ];
        return rotationMatrix;
    }; //PopulateYRotationMatrix
    AppGraphicComponent.prototype.PopulateZRotationMatrix = function (zangle) {
        var rotationMatrix = [
            [Math.cos(zangle), (-1) * Math.sin(zangle), 0],
            [Math.sin(zangle), Math.cos(zangle), 0],
            [0, 0, 1]
        ];
        return rotationMatrix;
    }; //PopulateZRotationMatrix
    AppGraphicComponent.prototype.RotateBox = function (xRotateMatrix, yRotateMatrix, zRotateMatrix, data) {
        var resultarray = new Array(8);
        for (var i = 0; i < 8; i++) {
            resultarray[i] = this.RotatePoint(xRotateMatrix, yRotateMatrix, zRotateMatrix, data[i]);
        }
        return resultarray;
    }; //RotateData
    AppGraphicComponent.prototype.RotateData = function (xnum, ynum, xRotateMatrix, yRotateMatrix, zRotateMatrix, data) {
        var resultarray = new Array(xnum);
        for (var i = 0; i < xnum; i++) {
            resultarray[i] = new Array(ynum);
        }
        for (var i = 0; i < xnum; i++) {
            for (var j = 0; j < ynum; j++) {
                resultarray[i][j] = this.RotatePoint(xRotateMatrix, yRotateMatrix, zRotateMatrix, data[i][j]);
            }
        }
        return resultarray;
    }; //RotateData
    AppGraphicComponent.prototype.RotatePoint = function (xRotateMatrix, yRotateMatrix, zRotateMatrix, p) {
        var pointMatrix_0 = [
            [p.x],
            [p.y],
            [p.z]
        ];
        var pointMatrix_rotated_x = this.MultiplyMatrices(xRotateMatrix, pointMatrix_0);
        var pointMatrix_rotated_xy = this.MultiplyMatrices(yRotateMatrix, pointMatrix_rotated_x);
        var pointMatrix_rotated_xyz = this.MultiplyMatrices(zRotateMatrix, pointMatrix_rotated_xy);
        return { x: pointMatrix_rotated_xyz[0][0], y: pointMatrix_rotated_xyz[1][0], z: pointMatrix_rotated_xyz[2][0], color: p.color };
    }; //RotatePoint
    AppGraphicComponent.prototype.MultiplyMatrices = function (first, second) {
        //          m
        //  AB_ij = E  (A_ik)(B_kj)
        //          k=1
        // where
        //i over rows in first matrix,
        //j over columns in second matrix
        // k over m = columns(length[n]) in first matrix = rows(length) of second matrix
        var rotationResultMatrix = [
            [0],
            [0],
            [0]
        ];
        for (var i = 0; i < first.length; i++) {
            for (var j = 0; j < second[0].length; j++) {
                for (var k = 0; k < second.length; k++) {
                    rotationResultMatrix[i][j] += first[i][k] * second[k][j];
                }
            }
        }
        return rotationResultMatrix;
    }; //MultiplyMatrices
    AppGraphicComponent.prototype.ScaleBox = function (xscale, zscale, data) {
        var resultarray = new Array(8);
        for (var i = 0; i < 8; i++) {
            resultarray[i] = this.Scale(xscale, zscale, data[i]);
        }
        return resultarray;
    }; //ScaleAxes
    AppGraphicComponent.prototype.ScaleData = function (xnum, ynum, xscale, zscale, data) {
        var resultarray = new Array(xnum);
        for (var i = 0; i < xnum; i++) {
            resultarray[i] = new Array(ynum);
        }
        for (var i = 0; i < this.xnum; i++) {
            for (var j = 0; j < this.ynum; j++) {
                resultarray[i][j] = this.Scale(xscale, zscale, data[i][j]);
            }
        }
        return resultarray;
    }; //ScaleData
    AppGraphicComponent.prototype.Scale = function (xscale, zscale, p) {
        return { x: p.x * xscale, y: p.y * 1, z: p.z * zscale * (-1), color: p.color };
    };
    AppGraphicComponent.prototype.TranslateBox = function (xoffset, zoffset, data) {
        var resultarray = new Array(8);
        for (var i = 0; i < 8; i++) {
            resultarray[i] = this.Translate(xoffset, zoffset, data[i]);
        }
        return resultarray;
    }; //TranslateAxes
    AppGraphicComponent.prototype.TranslateData = function (xnum, ynum, xoffset, zoffset, data) {
        var resultarray = new Array(xnum);
        for (var i = 0; i < xnum; i++) {
            resultarray[i] = new Array(ynum);
        }
        for (var i = 0; i < this.xnum; i++) {
            for (var j = 0; j < this.ynum; j++) {
                resultarray[i][j] = this.Translate(xoffset, zoffset, data[i][j]);
            }
        }
        return resultarray;
    }; //TranslateData
    AppGraphicComponent.prototype.Translate = function (xoffset, zoffset, p) {
        return { x: p.x + xoffset, y: p.y, z: p.z + zoffset, color: p.color };
    };
    AppGraphicComponent.prototype.CreateSVG = function (xnum, ynum, box, data) {
        var s = "";
        s = s + "<svg width=\"" + this.windowWidth * 0.8 + "\" height=\"" + this.windowHeight * 0.6 + "\" >";
        s = s + "<line x1 = \"" + box[0].x + "\" y1 = \"" + box[0].z + "\" x2 = \"" + box[1].x + "\" y2 = \"" + box[1].z + "\" style = \"stroke: rgb(0, 0, 0); stroke-width: 1\" />";
        s = s + "<line x1 = \"" + box[1].x + "\" y1 = \"" + box[1].z + "\" x2 = \"" + box[2].x + "\" y2 = \"" + box[2].z + "\" style = \"stroke: rgb(200, 200, 200); stroke-width: 1\" />";
        s = s + "<line x1 = \"" + box[2].x + "\" y1 = \"" + box[2].z + "\" x2 = \"" + box[3].x + "\" y2 = \"" + box[3].z + "\" style = \"stroke: rgb(200, 200, 200); stroke-width: 1\" />";
        s = s + "<line x1 = \"" + box[3].x + "\" y1 = \"" + box[3].z + "\" x2 = \"" + box[0].x + "\" y2 = \"" + box[0].z + "\" style = \"stroke: rgb(0, 0, 0); stroke-width: 1\" />";
        s = s + "<line x1 = \"" + box[0].x + "\" y1 = \"" + box[0].z + "\" x2 = \"" + box[4].x + "\" y2 = \"" + box[4].z + "\" style = \"stroke: rgb(0, 0, 0); stroke-width: 1\" />";
        s = s + "<line x1 = \"" + box[1].x + "\" y1 = \"" + box[1].z + "\" x2 = \"" + box[5].x + "\" y2 = \"" + box[5].z + "\" style = \"stroke: rgb(200, 200, 200); stroke-width: 1\" />";
        s = s + "<line x1 = \"" + box[2].x + "\" y1 = \"" + box[2].z + "\" x2 = \"" + box[6].x + "\" y2 = \"" + box[6].z + "\" style = \"stroke: rgb(200, 200, 200); stroke-width: 1\" />";
        s = s + "<line x1 = \"" + box[3].x + "\" y1 = \"" + box[3].z + "\" x2 = \"" + box[7].x + "\" y2 = \"" + box[7].z + "\" style = \"stroke: rgb(200, 200, 200); stroke-width: 1\" />";
        for (var i = 0; i < this.xnum; i++) {
            for (var j = 0; j < this.ynum; j++) {
                if (i > 0 && j > 0) {
                    s = s + "<polygon points=\"" + data[i][j].x + ", " + data[i][j].z + " " + data[i - 1][j].x + ", " + data[i - 1][j].z + " " + data[i - 1][j - 1].x + ", " + data[i - 1][j - 1].z + " " + data[i][j - 1].x + ", " + data[i][j - 1].z + "\" style=\"fill:" + data[i][j].color + "; stroke: black; stroke-width: 1 \" />";
                }
                if (i > 0) {
                    s = s + "<line x1 = \"" + data[i][j].x + "\" y1 = \"" + data[i][j].z + "\" x2 = \"" + data[i - 1][j].x + "\" y2 = \"" + data[i - 1][j].z + "\" style=\"stroke:" + data[i][j].color + "; stroke-width: 1\" />";
                }
                if (j > 0) {
                    s = s + "<line x1 = \"" + data[i][j].x + "\" y1 = \"" + data[i][j].z + "\" x2 = \"" + data[i][j - 1].x + "\" y2 = \"" + data[i][j - 1].z + "\" style=\"stroke:" + data[i][j].color + "; stroke-width: 1\" />";
                }
            }
        }
        s = s + "<line x1 = \"" + box[4].x + "\" y1 = \"" + box[4].z + "\" x2 = \"" + box[5].x + "\" y2 = \"" + box[5].z + "\" style = \"stroke: rgb(200, 200, 200); stroke-width: 1\" />";
        s = s + "<line x1 = \"" + box[5].x + "\" y1 = \"" + box[5].z + "\" x2 = \"" + box[6].x + "\" y2 = \"" + box[6].z + "\" style = \"stroke: rgb(200, 200, 200); stroke-width: 1\" />";
        s = s + "<line x1 = \"" + box[6].x + "\" y1 = \"" + box[6].z + "\" x2 = \"" + box[7].x + "\" y2 = \"" + box[7].z + "\" style = \"stroke: rgb(200, 200, 200); stroke-width: 1\" />";
        s = s + "<line x1 = \"" + box[7].x + "\" y1 = \"" + box[7].z + "\" x2 = \"" + box[4].x + "\" y2 = \"" + box[4].z + "\" style = \"stroke: rgb(200, 200, 200); stroke-width: 1\" />";
        s = s + "<text x = \"" + box[3].x + "\" y = \"" + box[3].z + "\" font-size = \"12\">x</text>";
        s = s + "<text x = \"" + box[4].x + "\" y = \"" + box[4].z + "\" font-size = \"12\">y</text>";
        s = s + "<text x = \"" + box[1].x + "\" y = \"" + box[1].z + "\" font-size = \"12\">z</text>";
        s = s + "</svg>";
        this.dataSvg = this.sanitizer.bypassSecurityTrustHtml(s);
    }; //CreateSVG
    AppGraphicComponent = __decorate([
        core_1.Component({
            selector: 'app-graphic',
            template: __webpack_require__("../../../../../src/app/app-graphic.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-graphic.component.css")]
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, platform_browser_1.DomSanitizer])
    ], AppGraphicComponent);
    return AppGraphicComponent;
}()); //component
exports.AppGraphicComponent = AppGraphicComponent;


/***/ }),

/***/ "../../../../../src/app/app-root.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".slidergroup {\r\n    display: -webkit-box;\r\n    display: -ms-flexbox;\r\n    display: flex;\r\n    -webkit-box-orient: horizontal;\r\n    -webkit-box-direction: normal;\r\n        -ms-flex-flow: row nowrap;\r\n            flex-flow: row nowrap;\r\n    -webkit-box-pack: start;\r\n        -ms-flex-pack: start;\r\n            justify-content: flex-start;\r\n}\r\n\r\n\r\n.sliderlabel {\r\n    margin: 8px 0 0 0;\r\n    width: 100px;\r\n    color: green;\r\n}\r\n\r\n\r\n.anglelabel {\r\n    color: blue;\r\n}\r\n\r\n\r\ninput {\r\n    width: 60%;\r\n    margin:10px 10px 0 10px;\r\n}\r\n\r\n\r\n.slidervalue {\r\n    border: 1px solid gray;\r\n    padding: 0 3px 0 3px;\r\n    color: maroon;\r\n    width: 50px;\r\n}\r\n\r\n\r\n.surfaceSelectors {\r\n    background: mintcream;\r\n    padding: 5px;\r\n    border-bottom: 1px solid #cdc;\r\n}\r\n\r\n\r\n.angleSelectors {\r\n    background: aliceblue;\r\n    padding:0 0 7px 5px;\r\n    border-bottom: 5px solid black;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-root.component.html":
/***/ (function(module, exports) {

module.exports = "<title>SurfacePlot2</title>\r\n<div class=\"row surfaceSelectors\">\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">min(z)</label>\r\n        <input type=\"range\" name=\"ZMin\" min=\"-500\" max=\"0\" value=\"{{zmin}}\" (change)=\"onChange_zmin($event.target.value)\" />\r\n        <label id=\"lbl_ZMin\" class=\"slidervalue\">{{zmin}}</label>\r\n    </div>\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">max(z)</label>\r\n        <input type=\"range\" name=\"ZMax\" min=\"0\" max=\"1000\" value=\"{{zmax}}\" (change)=\"onChange_zmax($event.target.value)\" />\r\n        <label id=\"lbl_ZMax\" class=\"slidervalue\">{{zmax}}</label>\r\n    </div>\r\n</div>\r\n<div class=\"row surfaceSelectors\">\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">min(x)</label>\r\n        <input type=\"range\" name=\"XMin\" min=\"-500\" max=\"500\" value=\"{{xmin}}\" (change)=\"onChange_xmin($event.target.value)\" />\r\n        <label id=\"lbl_XMin\" class=\"slidervalue\">{{xmin}}</label>\r\n    </div>\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">max(x)</label>\r\n        <input type=\"range\" name=\"XMax\" min=\"-500\" max=\"500\" value=\"{{xmax}}\" (change)=\"onChange_xmax($event.target.value)\" />\r\n        <label id=\"lbl_XMax\" class=\"slidervalue\">{{xmax}}</label>\r\n    </div>\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">n(x)</label>\r\n        <input type=\"range\" name=\"Xnum\" min=\"0\" max=\"100\" value={{xnum}} (change)=\"onChange_xnum($event.target.value)\" />\r\n        <label id=\"lbl_Xnum\" class=\"slidervalue\">{{xnum}}</label>\r\n    </div>\r\n</div>\r\n<div class=\"row surfaceSelectors\">\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">min(y)</label>\r\n        <input type=\"range\" name=\"YMin\" min=\"-500\" max=\"500\" value=\"{{ymin}}\" (change)=\"onChange_ymin($event.target.value)\" />\r\n        <label id=\"lbl_YMin\" class=\"slidervalue\">{{ymin}}</label>\r\n    </div>\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">max(y)</label>\r\n        <input type=\"range\" name=\"YMax\" min=\"-500\" max=\"500\" value=\"{{ymax}}\" (change)=\"onChange_ymax($event.target.value)\" />\r\n        <label id=\"lbl_YMax\" class=\"slidervalue\">{{ymax}}</label>\r\n    </div>\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">n(y)</label>\r\n        <input type=\"range\" name=\"Ynum\" min=\"0\" max=\"100\" value=\"{{ynum}}\" (change)=\"onChange_ynum($event.target.value)\" />\r\n        <label id=\"lbl_Ynum\" class=\"slidervalue\">{{ynum}}</label>\r\n    </div>\r\n</div>\r\n<div class=\"row surfaceSelectors\">\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">Smoothing</label>\r\n        <input type=\"range\" name=\"Smoothing\" min=\"0\" max=\"100\" value=\"{{smoothing}}\" (change)=\"onChange_smoothing($event.target.value)\" />\r\n        <label id=\"lbl_Smoothing\" class=\"slidervalue\">{{smoothing}}</label>\r\n    </div>\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">Averaging</label>\r\n        <input type=\"range\" name=\"Averaging\" min=\"0\" max=\"1\" step=\"0.01\" value=\"{{averaging}}\" (change)=\"onChange_averaging($event.target.value);\" />\r\n        <label id=\"lbl_Averaging\" class=\"slidervalue\">{{averaging}}</label>\r\n    </div>\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"sliderlabel\">Compression</label>\r\n        <input type=\"range\" name=\"Compression\" min=\"0\" max=\"0.2\" step=\"0.005\" value=\"{{compressn}}\" (change)=\"onChange_compressn($event.target.value)\" />\r\n        <label id=\"lbl_Compression\" class=\"slidervalue\">{{compressn}}</label>\r\n    </div>\r\n</div>\r\n<div class=\"row angleSelectors\">\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"anglelabel sliderlabel\">x Angle</label>\r\n        <input type=\"range\" name=\"AngleX\" min=\"-1.57\" max=\"0\" step=\"0.01\" value=\"{{xangle}}\" (change)=\"onChange_xangle($event.target.value)\" />\r\n        <label id=\"lbl_AngleX\" class=\"slidervalue\">{{xangle}}</label>\r\n    </div>\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"anglelabel sliderlabel\">y Angle</label>\r\n        <input type=\"range\" name=\"AngleY\" min=\"0\" max=\"1.57\" step=\"0.01\" value=\"{{yangle}}\" (change)=\"onChange_yangle($event.target.value)\" />\r\n        <label id=\"lbl_AngleY\" class=\"slidervalue\">{{yangle}}</label>\r\n    </div>\r\n    <div class=\"col-md-4 slidergroup\">\r\n        <label class=\"anglelabel sliderlabel\">z Angle</label>\r\n        <input type=\"range\" name=\"AngleZ\" min=\"0\" max=\"1.57\" step=\"0.01\" value=\"{{zangle}}\" (change)=\"onChange_zangle($event.target.value)\" />\r\n        <label id=\"lbl_AngleZ\" class=\"slidervalue\">{{zangle}}</label>\r\n    </div>\r\n    <!--<div class=\"col-md-1 col-md-offset-2\">\r\n        <button class=\"btn btn-success\" (click)=\"onDraw()\">Draw</button>\r\n    </div>-->\r\n</div>\r\n<div>\r\n    <app-graphic></app-graphic>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "../../../../../src/app/app-root.component.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var data_service_1 = __webpack_require__("../../../../../src/data/data.service.ts");
var AppComponent = /** @class */ (function () {
    function AppComponent(dataService) {
        this.dataService = dataService;
    } //ctor
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dataService.Initialize();
        this.dataService.averaging.subscribe(function (averaging) { return _this.averaging = averaging; });
        this.dataService.compressn.subscribe(function (compressn) { return _this.compressn = compressn; });
        this.dataService.smoothing.subscribe(function (smoothing) { return _this.smoothing = smoothing; });
        this.dataService.xnum.subscribe(function (xnum) { return _this.xnum = xnum; });
        this.dataService.xmin.subscribe(function (xmin) { return _this.xmin = xmin; });
        this.dataService.xmax.subscribe(function (xmax) { return _this.xmax = xmax; });
        this.dataService.ynum.subscribe(function (ynum) { return _this.ynum = ynum; });
        this.dataService.ymin.subscribe(function (ymin) { return _this.ymin = ymin; });
        this.dataService.ymax.subscribe(function (ymax) { return _this.ymax = ymax; });
        this.dataService.zmin.subscribe(function (zmin) { return _this.zmin = zmin; });
        this.dataService.zmax.subscribe(function (zmax) { return _this.zmax = zmax; });
        this.dataService.xangle.subscribe(function (xangle) { return _this.xangle = xangle; });
        this.dataService.yangle.subscribe(function (yangle) { return _this.yangle = yangle; });
        this.dataService.zangle.subscribe(function (zangle) { return _this.zangle = zangle; });
    };
    AppComponent.prototype.onChange_xnum = function (value) {
        this.dataService.Update_xnum(value);
    };
    AppComponent.prototype.onChange_ynum = function (value) {
        this.dataService.Update_ynum(value);
    };
    AppComponent.prototype.onChange_averaging = function (value) {
        this.dataService.Update_averaging(value);
    };
    AppComponent.prototype.onChange_compressn = function (value) {
        this.dataService.Update_compressn(value);
    };
    AppComponent.prototype.onChange_smoothing = function (value) {
        this.dataService.Update_smoothing(value);
    };
    AppComponent.prototype.onChange_xmin = function (value) {
        this.dataService.Update_xmin(value);
    };
    AppComponent.prototype.onChange_xmax = function (value) {
        this.dataService.Update_xmax(value);
    };
    AppComponent.prototype.onChange_ymin = function (value) {
        this.dataService.Update_ymin(value);
    };
    AppComponent.prototype.onChange_ymax = function (value) {
        this.dataService.Update_ymax(value);
    };
    AppComponent.prototype.onChange_zmin = function (value) {
        this.dataService.Update_zmin(value);
    };
    AppComponent.prototype.onChange_zmax = function (value) {
        this.dataService.Update_zmax(value);
    };
    AppComponent.prototype.onChange_xangle = function (value) {
        this.dataService.Update_xangle(value);
    };
    AppComponent.prototype.onChange_yangle = function (value) {
        this.dataService.Update_yangle(value);
    };
    AppComponent.prototype.onChange_zangle = function (value) {
        this.dataService.Update_zangle(value);
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app-root.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app-root.component.css")],
        }),
        __metadata("design:paramtypes", [data_service_1.DataService])
    ], AppComponent);
    return AppComponent;
}()); //component
exports.AppComponent = AppComponent;


/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var platform_browser_1 = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var common_1 = __webpack_require__("../../../common/esm5/common.js");
var app_root_component_1 = __webpack_require__("../../../../../src/app/app-root.component.ts");
var app_graphic_component_1 = __webpack_require__("../../../../../src/app/app-graphic.component.ts");
var data_service_1 = __webpack_require__("../../../../../src/data/data.service.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_root_component_1.AppComponent,
                app_graphic_component_1.AppGraphicComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                common_1.CommonModule
            ],
            providers: [data_service_1.DataService, platform_browser_1.Title],
            bootstrap: [app_root_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "../../../../../src/data/data.service.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var BehaviorSubject_1 = __webpack_require__("../../../../rxjs/_esm5/BehaviorSubject.js");
var DataService = /** @class */ (function () {
    function DataService() {
        this.xnumSource = new BehaviorSubject_1.BehaviorSubject(this._xnum);
        this.xnum = this.xnumSource.asObservable();
        this.xminSource = new BehaviorSubject_1.BehaviorSubject(this._xmin);
        this.xmin = this.xminSource.asObservable();
        this.xmaxSource = new BehaviorSubject_1.BehaviorSubject(this._xmax);
        this.xmax = this.xmaxSource.asObservable();
        this.ynumSource = new BehaviorSubject_1.BehaviorSubject(this._ynum);
        this.ynum = this.ynumSource.asObservable();
        this.yminSource = new BehaviorSubject_1.BehaviorSubject(this._ymin);
        this.ymin = this.yminSource.asObservable();
        this.ymaxSource = new BehaviorSubject_1.BehaviorSubject(this._ymax);
        this.ymax = this.ymaxSource.asObservable();
        this.zminSource = new BehaviorSubject_1.BehaviorSubject(this._zmin);
        this.zmin = this.zminSource.asObservable();
        this.zmaxSource = new BehaviorSubject_1.BehaviorSubject(this._zmax);
        this.zmax = this.zmaxSource.asObservable();
        this.smoothingSource = new BehaviorSubject_1.BehaviorSubject(this._smoothing);
        this.smoothing = this.smoothingSource.asObservable();
        this.averagingSource = new BehaviorSubject_1.BehaviorSubject(this._averaging);
        this.averaging = this.averagingSource.asObservable();
        this.compressnSource = new BehaviorSubject_1.BehaviorSubject(this._compressn);
        this.compressn = this.compressnSource.asObservable();
        this.xangleSource = new BehaviorSubject_1.BehaviorSubject(this._xangle);
        this.xangle = this.xangleSource.asObservable();
        this.yangleSource = new BehaviorSubject_1.BehaviorSubject(this._yangle);
        this.yangle = this.yangleSource.asObservable();
        this.zangleSource = new BehaviorSubject_1.BehaviorSubject(this._zangle);
        this.zangle = this.zangleSource.asObservable();
        console.log('----data.service initializing');
    } //ctor
    DataService.prototype.Initialize = function () {
        this._xnum = 70;
        this.xnumSource.next(this._xnum);
        this._xmin = 0;
        this.xminSource.next(this._xmin);
        this._xmax = 500;
        this.xmaxSource.next(this._xmax);
        this._ynum = 70;
        this.ynumSource.next(this._xnum);
        this._ymin = 0;
        this.yminSource.next(this._ymin);
        this._ymax = 500;
        this.ymaxSource.next(this._ymax);
        this._zmin = 0;
        this.zminSource.next(this._zmin);
        this._zmax = 500;
        this.zmaxSource.next(this._zmax);
        this._averaging = 0.9;
        this.averagingSource.next(this._averaging);
        this._compressn = 0.09;
        this.compressnSource.next(this._compressn);
        this._smoothing = 35;
        this.smoothingSource.next(this._smoothing);
        this._xangle = -0.35;
        this.xangleSource.next(this._xangle);
        this._yangle = 0;
        this.yangleSource.next(this._yangle);
        this._zangle = 0.25;
        this.zangleSource.next(this._zangle);
    };
    DataService.prototype.Update_xnum = function (value) {
        this._xnum = value;
        this.xnumSource.next(this._xnum);
    };
    DataService.prototype.Update_xmin = function (value) {
        this._xmin = value;
        this.xminSource.next(this._xmin);
    };
    DataService.prototype.Update_xmax = function (value) {
        this._xmax = value;
        this.xmaxSource.next(this._xmax);
    };
    DataService.prototype.Update_ynum = function (value) {
        this._ynum = value;
        this.ynumSource.next(this._ynum);
    };
    DataService.prototype.Update_ymin = function (value) {
        this._ymin = value;
        this.yminSource.next(this._ymin);
    };
    DataService.prototype.Update_ymax = function (value) {
        this._ymax = value;
        this.ymaxSource.next(this._ymax);
    };
    DataService.prototype.Update_zmin = function (value) {
        this._zmin = value;
        this.zminSource.next(this._zmin);
    };
    DataService.prototype.Update_zmax = function (value) {
        this._zmax = value;
        this.zmaxSource.next(this._zmax);
    };
    DataService.prototype.Update_averaging = function (value) {
        this._averaging = value;
        this.averagingSource.next(this._averaging);
    };
    DataService.prototype.Update_compressn = function (value) {
        this._compressn = value;
        this.compressnSource.next(this._compressn);
    };
    DataService.prototype.Update_smoothing = function (value) {
        this._smoothing = value;
        this.smoothingSource.next(this._smoothing);
    };
    DataService.prototype.Update_xangle = function (value) {
        this._xangle = value;
        this.xangleSource.next(this._xangle);
    };
    DataService.prototype.Update_yangle = function (value) {
        this._yangle = value;
        this.yangleSource.next(this._yangle);
    };
    DataService.prototype.Update_zangle = function (value) {
        this._zangle = value;
        this.zangleSource.next(this._zangle);
    };
    DataService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}()); //service
exports.DataService = DataService;


/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__("../../../core/esm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__("../../../../../src/app/app.module.ts");
var environment_1 = __webpack_require__("../../../../../src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map