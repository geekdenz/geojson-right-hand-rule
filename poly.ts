import {readFileSync} from 'fs'
import { polygon } from '@turf/helpers';
import kinks from '@turf/kinks';
import {hint} from '@mapbox/geojsonhint'
import { makeValid } from '.';

const json = JSON.parse(readFileSync('rp/test.json', 'utf8'))
const poly = makeValid(JSON.parse(json.planBoundaryText))
// const ks = kinks(poly)
const hints = hint(poly)
hints