import unkinkPolygon from '@turf/unkink-polygon'
import kinks from '@turf/kinks'
import {hint} from '@mapbox/geojsonhint'
import rewind from '@turf/rewind'
import polygonize from '@turf/polygonize'
import {ensure} from './rhr'
import {readFileSync, writeFileSync} from 'fs'

const json = JSON.parse(readFileSync('rp/invalid.json', 'utf8'))
// console.log(kinks(json))
// const valid = rewind(unkinkPolygon(json))
// const hasKinks = kinks(json)
// const polygons = polygonize(json)
// const hasKinks = kinks(polygons.features.map(f => f.geometry.coordinates))
const valid = ensure(unkinkPolygon(json))
const result = hint(valid)
// console.log(hasKinks)
console.log(result)
writeFileSync('rp/turf_unkinked.json', JSON.stringify(valid, undefined, 2), 'utf8')