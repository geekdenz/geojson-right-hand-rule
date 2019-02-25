"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var geojsonhint_1 = require("@mapbox/geojsonhint");
var _1 = require(".");
var json = JSON.parse(fs_1.readFileSync('rp/test.json', 'utf8'));
var poly = _1.makeValid(JSON.parse(json.planBoundaryText));
// const ks = kinks(poly)
var hints = geojsonhint_1.hint(poly);
hints;
