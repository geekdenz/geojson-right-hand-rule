"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import  from 'ol'
var GeoJSON_1 = require("ol/format/GeoJSON");
// import hint from 'geojsonhint'
var fs_1 = require("fs");
var json = JSON.parse(fs_1.readFileSync('onefeature_geo.json', 'utf8'));
// const json = JSON.parse(readFileSync('geo.json', 'utf8'))
// json
var geojsonString = json.planBoundaryText;
var geojson = JSON.parse(geojsonString);
// geojson.features[0] //?
// console.log(JSON.stringify(geojson, undefined, 2))
var olGeoJson = new GeoJSON_1.default();
var parsed = olGeoJson.readFeatures(geojson);
var rhrGeoJson = olGeoJson.writeFeaturesObject(parsed, {
    rightHanded: true
}); //
// rhrGeoJson.features //?
// rhrGeoJson.features.length //?
// console.log(JSON.stringify(rhrGeoJson, undefined, 2))
fs_1.writeFileSync('rp/valid.json', JSON.stringify(rhrGeoJson, undefined, 2), 'utf8');
// console.log(JSON.stringify(rhrGeoJson, undefined, 2))
