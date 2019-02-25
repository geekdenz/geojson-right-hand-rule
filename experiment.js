"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var json = JSON.parse(fs_1.readFileSync('rp/test_this.json', 'utf8'));
var geojsonString = json.planBoundaryText;
var geojson = JSON.parse(geojsonString);
// geojson
console.log(JSON.stringify(geojson, undefined, 2));
