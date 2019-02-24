"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unkink_polygon_1 = require("@turf/unkink-polygon");
var geojsonhint_1 = require("@mapbox/geojsonhint");
var rhr_1 = require("./rhr");
var fs_1 = require("fs");
var json = JSON.parse(fs_1.readFileSync('rp/invalid.json', 'utf8'));
// console.log(kinks(json))
// const valid = rewind(unkinkPolygon(json))
// const hasKinks = kinks(json)
// const polygons = polygonize(json)
// const hasKinks = kinks(polygons.features.map(f => f.geometry.coordinates))
var valid = rhr_1.ensure(unkink_polygon_1.default(json));
var result = geojsonhint_1.hint(valid);
// console.log(hasKinks)
console.log(result);
fs_1.writeFileSync('rp/turf_unkinked.json', JSON.stringify(valid, undefined, 2), 'utf8');
