import unkink from '@turf/unkink-polygon'
import { rewind } from './lib/rewinder';

export function makeValid(geojson: any): any {
    // console.log('qwe', geojson.geometry)
    if (geojson.type === 'Feature') {
        if (geojson.geometry.type === 'LineString') {
            // return geojson;
            return {
                type: 'FeatureCollection',
                features: [
                    geojson,
                ]
            }
        }
    } else {
        // FeatureCollection

    }
    return rewind(unkink(geojson), true)
}