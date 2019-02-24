import {polygon} from '@turf/helpers'
import unkinkPolygon from '@turf/unkink-polygon'
import transformRotate from '@turf/transform-rotate'
import {ensure} from './rhr'
import {rightHandRule} from './lib/validate'
import rewind from '@turf/rewind'
const poly = polygon([[[0, 0], [2, 0], [0, 2], [2, 2], [0, 0]]]);
// const poly = polygon([[[0, 0], [2, 0], [2, 2], [0, 0]]]);
// console.log(JSON.stringify(poly, undefined, 2))
const result = unkinkPolygon(poly)
result.features = result.features.map(f => rightHandRule(f) ? f : rewind(f))
console.log(JSON.stringify(result, undefined, 2))