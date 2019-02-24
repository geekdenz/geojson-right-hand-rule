"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var helpers_1 = require("@turf/helpers");
var index_1 = require("./index");
var poly = helpers_1.polygon([[[0, 0], [2, 0], [0, 2], [2, 2], [0, 0]]]);
// const poly = polygon([[[0, 0], [2, 0], [2, 2], [0, 0]]]);
// console.log(JSON.stringify(poly, undefined, 2))
var result = index_1.makeValid(poly);
// result.features = result.features.map(f => rightHandRule(f) ? f : rewind(f))
console.log(JSON.stringify(result, undefined, 2));
