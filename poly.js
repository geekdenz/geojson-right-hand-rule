"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var helpers_1 = require("@turf/helpers");
var geojsonhint_1 = require("@mapbox/geojsonhint");
var _1 = require(".");
var json = JSON.parse(fs_1.readFileSync('poly.json', 'utf8'));
var geometry = json.features[0].geometry.coordinates;
var poly = _1.makeValid(helpers_1.polygon(geometry));
// const ks = kinks(poly)
var hints = geojsonhint_1.hint(poly);
hints;
