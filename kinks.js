"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("@turf/helpers");
var unkink_polygon_1 = require("@turf/unkink-polygon");
var validate_1 = require("./lib/validate");
var rewind_1 = require("@turf/rewind");
var poly = helpers_1.polygon([[[0, 0], [2, 0], [0, 2], [2, 2], [0, 0]]]);
// const poly = polygon([[[0, 0], [2, 0], [2, 2], [0, 0]]]);
// console.log(JSON.stringify(poly, undefined, 2))
var result = unkink_polygon_1.default(poly);
result.features = result.features.map(function (f) { return validate_1.rightHandRule(f) ? f : rewind_1.default(f); });
console.log(JSON.stringify(result, undefined, 2));
