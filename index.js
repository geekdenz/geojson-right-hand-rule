"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function makeValid(geojson) {
    if (geojson.type === 'Feature') {
        if (geojson.geometry.type === 'LineString') {
            return geojson;
        }
    }
    else {
        // FeatureCollection
        geojson.features.map(makeValid);
    }
}
exports.makeValid = makeValid;
// if (geojson.type === 'Feature') {
//     if (geojson.geometry.type === 'LineString') {
//         return {
//             type: 'FeatureCollection',
//             features: [
//                 geojson,
//             ]
//         }
//     }
// } else {
//     // FeatureCollection
//     geojson.features.forEach(feature => {
//     })
// }
// const unkinked = unkink(geojson)
// let unkinked;
// const kinksObj = kinks(geojson)
// console.log('kinksObj', kinksObj)
// if (kinksObj.features.length) {
//     unkinked = unkink(geojson)
// } else {
//     unkinked = geojson;
// }
// console.log('unkinked', unkinked)
// return rewind(geojson, true)
// return unkink(rewind(geojson, true))
