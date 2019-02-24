"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unkink_polygon_1 = require("@turf/unkink-polygon");
var validate_1 = require("./lib/validate");
var rewind_1 = require("@turf/rewind");
function makeValid(geojson) {
    var result = unkink_polygon_1.default(geojson);
    result.features = result.features.map(function (f) { return validate_1.rightHandRule(f) ? f : rewind_1.default(f); });
    return result;
}
exports.makeValid = makeValid;
