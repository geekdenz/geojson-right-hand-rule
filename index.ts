import unkink from '@turf/unkink-polygon'
import { rewind } from './lib/rewinder';

export function makeValid(geojson: any): any {
    if (geojson.type === 'Feature') {
        if (geojson.geometry.type === 'LineString') {
            return {
                type: 'FeatureCollection',
                features: [
                    geojson,
                ]
            }
        }
    }
    // else FeatureCollection
    return rewind(unkink(geojson), true)
}