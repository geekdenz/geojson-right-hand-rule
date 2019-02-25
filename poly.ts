import {readFileSync} from 'fs'
import { polygon } from '@turf/helpers';
import kinks from '@turf/kinks';
import {hint} from '@mapbox/geojsonhint'
import { makeValid } from '.';

const json = JSON.parse(readFileSync('poly.json', 'utf8'))
const geometry = json.features[0].geometry.coordinates
const poly = makeValid(polygon(geometry))
// const ks = kinks(poly)
const hints = hint(poly)
hints