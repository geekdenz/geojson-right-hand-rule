import {readFileSync} from 'fs'

const json = JSON.parse(readFileSync('rp/test_this.json', 'utf8'))
const geojsonString = json.planBoundaryText
const geojson = JSON.parse(geojsonString)
// geojson
console.log(JSON.stringify(geojson, undefined, 2))