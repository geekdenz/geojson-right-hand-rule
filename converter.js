"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var _1 = require(".");
var json = JSON.parse(fs_1.readFileSync('onefeature_geo.json', 'utf8'));
var geojsonString = json.planBoundaryText;
var geojson = JSON.parse(geojsonString);
var rhrGeoJson = _1.makeValid(geojson);
fs_1.writeFileSync('rp/valid.json', JSON.stringify(rhrGeoJson, undefined, 2), 'utf8');
