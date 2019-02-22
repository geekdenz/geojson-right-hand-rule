// import  from 'ol'
import GeoJSON from 'ol/format/GeoJSON';
// import hint from 'geojsonhint'
import { readFileSync, writeFileSync } from 'fs';
const json = JSON.parse(readFileSync('rp/plan.json', 'utf8'));
// const json = JSON.parse(readFileSync('geo.json', 'utf8'))
// json
const geojsonString = json.planBoundaryText;
const geojson = JSON.parse(geojsonString);
// geojson.features[0] //?
// console.log(JSON.stringify(geojson, undefined, 2))
const olGeoJson = new GeoJSON();
const parsed = olGeoJson.readFeatures(geojson);
const rhrGeoJson = olGeoJson.writeFeaturesObject(parsed, {
    rightHanded: true
}); //
// rhrGeoJson.features //?
// rhrGeoJson.features.length //?
// console.log(JSON.stringify(rhrGeoJson, undefined, 2))
// writeFileSync('testMe.json', JSON.stringify(rhrGeoJson, undefined, 2), 'utf8');
writeFileSync('rp/invalid.json', JSON.stringify(rhrGeoJson, undefined, 2), 'utf8')
// console.log(JSON.stringify(rhrGeoJson, undefined, 2))
