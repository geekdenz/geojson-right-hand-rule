import { makeValid } from ".";
import { readFileSync } from 'fs'

const json = JSON.parse(readFileSync('./rp/test_this.json', 'utf8'))

const geojson = JSON.parse(json.planBoundaryText)
const valid = makeValid(geojson)
console.log(JSON.stringify(valid, undefined, 2))