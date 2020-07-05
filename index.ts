import unkink from '@turf/unkink-polygon'
// import { rewind } from './lib/rewinder';
import kinks from '@turf/kinks'
import { GeoJSON, Feature } from 'geojson'
import { polygon } from '@turf/helpers'

function area(ps: number[][]) { // ps = the coordinates (points) with the last one being the first one
  const coords = ps.slice(0, -1);
  let j = coords.length - 1;
  let sum = 0;
  for (let i = 0; i < coords.length; ++i) {
    let a = (coords[j][0] + coords[i][0]);
    let b = (coords[j][1] - coords[i][1]);
    sum += a * b;
    j = i;
  }
  return sum / 2;
}

function makeValidFeature(geojson: Feature) {
    switch (geojson.geometry.type) {
        default:
        case 'LineString':
        case 'MultiLineString':
        case 'MultiPoint':
        case 'Point':
            break
        case 'Polygon':
            const coords = geojson.geometry.coordinates;
            coords.forEach(coords => area(coords) > 0 ? coords.reverse() : null)
            break
        // case ''
    }
}

export function makeValid(geojson: GeoJSON): any {
    if (geojson.type === 'FeatureCollection') {
        geojson.features.forEach(makeValidFeature)
    } else if (geojson.type === 'Feature') {
        makeValidFeature(geojson)
    }
    return geojson
}
const coords = [[0, 0], [1, 0], [1, -1], [0, -1], [0, 0]];
const json = {
    'type': 'FeatureCollection',
    features: [
        polygon([coords])
    ],
} as GeoJSON
makeValid(json)
const s = JSON.stringify(json, null, 2) //?
console.log(s)
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
