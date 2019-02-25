"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unkink_polygon_1 = require("@turf/unkink-polygon");
var rewinder_1 = require("./lib/rewinder");
function makeValid(geojson) {
    return rewinder_1.rewind(unkink_polygon_1.default(geojson), true);
}
exports.makeValid = makeValid;
