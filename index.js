"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var unkink_polygon_1 = require("@turf/unkink-polygon");
var rewinder_1 = require("./lib/rewinder");
function makeValid(geojson) {
    // console.log('qwe', geojson.geometry)
    if (geojson.type === 'Feature') {
        if (geojson.geometry.type === 'LineString') {
            // return geojson;
            return {
                type: 'FeatureCollection',
                features: [
                    geojson,
                ]
            };
        }
    }
    else {
        // FeatureCollection
    }
    return rewinder_1.rewind(unkink_polygon_1.default(geojson), true);
}
exports.makeValid = makeValid;
