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
var core_1 = require("@angular/core");
var data_service_1 = require("../data/data.service");
var platform_browser_1 = require("@angular/platform-browser");
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
            templateUrl: './app-graphic.component.html',
            styleUrls: ['./app-graphic.component.css']
        }),
        __metadata("design:paramtypes", [data_service_1.DataService, platform_browser_1.DomSanitizer])
    ], AppGraphicComponent);
    return AppGraphicComponent;
}()); //component
exports.AppGraphicComponent = AppGraphicComponent;
//# sourceMappingURL=app-graphic.component.js.map