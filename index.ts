import unkink from '@turf/unkink-polygon'
import { rewind } from './lib/rewinder';

export function makeValid(geojson: any): any {
    return rewind(unkink(geojson), true)
}