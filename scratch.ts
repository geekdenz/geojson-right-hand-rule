// import { makeValid } from ".";
// import { readFileSync } from 'fs'

// const json = JSON.parse(readFileSync('./rp/test_this.json', 'utf8'))

// const geojson = JSON.parse(json.planBoundaryText)
// const valid = makeValid(geojson)
// console.log(JSON.stringify(valid, undefined, 2))

import unkinkPolygon from '@turf/unkink-polygon'
import rewind from '@turf/rewind'
import { Polygon, Feature } from '@turf/helpers'
// import { Feature, Geometry } from '@turf/helpers'

// const json = <Feature<Polygon>> {"type":"Feature","id":"8162c374-5733-49d1-b08e-f9a5fe9843e0","geometry":{"type":"Polygon","coordinates":[[[175.60213058461957,-40.373317228580596],[175.6017376326301,-40.37370619740938],[175.6022909768336,-40.37358615740738],[175.60213058461957,-40.373317228580596]]]},"properties":{"featureType":"CSA"}}
const json = <Feature<Polygon>> {"type":"Feature","id":"8162c374-5733-49d1-b08e-f9a5fe9843e0",
"geometry":{"type":"Polygon","coordinates":[
    [
        [0,0], [1,1], [1, 0], [0, 1], [0, 0]
    ]
]},"properties":{"featureType":"CSA"}}

const unkinked = rewind(unkinkPolygon(json))
console.log(JSON.stringify(unkinked))