import unkinkPolygon from '@turf/unkink-polygon'
// import kinks from '@turf/kinks'
import rewind from '@turf/rewind'
import {readFileSync, writeFileSync} from 'fs'

const json = JSON.parse(readFileSync('rp/invalid.json', 'utf8'))
// console.log(kinks(json))
const valid = rewind(unkinkPolygon(json))
writeFileSync('rp/turf_unkinked.json', JSON.stringify(valid, undefined, 2), 'utf8')