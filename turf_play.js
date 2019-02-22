"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unkink_polygon_1 = require("@turf/unkink-polygon");
// import kinks from '@turf/kinks'
var rewind_1 = require("@turf/rewind");
var fs_1 = require("fs");
var json = JSON.parse(fs_1.readFileSync('rp/invalid.json', 'utf8'));
// console.log(kinks(json))
var valid = rewind_1.default(unkink_polygon_1.default(json));
fs_1.writeFileSync('rp/turf_unkinked.json', JSON.stringify(valid, undefined, 2), 'utf8');
