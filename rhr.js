"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var GeoJSON_js_1 = require("ol/format/GeoJSON.js");
// import {default as ol} from 'ol'
// import ol from 'ol'
// import {readFileSync, writeFileSync} from 'fs'
// ol.format.G
function ensure(maybeInvalidGeoJson) {
    var olGeoJson = GeoJSON_js_1.default();
    var parsed = olGeoJson.readFeatures(maybeInvalidGeoJson);
    var rhrGeoJson = olGeoJson.writeFeaturesObject(parsed, {
        rightHanded: true,
        dataProjection: 'EPSG:2193'
    });
    return rhrGeoJson;
}
exports.ensure = ensure;
