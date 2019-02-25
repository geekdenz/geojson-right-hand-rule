"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var _1 = require(".");
var fs_1 = require("fs");
var json = JSON.parse(fs_1.readFileSync('./rp/test_this.json', 'utf8'));
var geojson = JSON.parse(json.planBoundaryText);
var valid = _1.makeValid(geojson);
console.log(JSON.stringify(valid, undefined, 2));
