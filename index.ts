import unkinkPolygon from '@turf/unkink-polygon'
import {rightHandRule} from './lib/validate'
import rewind from '@turf/rewind'


export function makeValid(geojson: any): any {
    const result = unkinkPolygon(geojson)
    result.features = result.features.map(f => rightHandRule(f) ? f : rewind(f))
    return result
}