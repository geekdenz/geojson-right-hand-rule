import {readFileSync, writeFileSync} from 'fs'
import { makeValid } from '.';
const json = JSON.parse(readFileSync('onefeature_geo.json', 'utf8'))
const geojsonString = json.planBoundaryText
const geojson = JSON.parse(geojsonString)
const rhrGeoJson = makeValid(geojson)
writeFileSync('rp/valid.json', JSON.stringify(rhrGeoJson, undefined, 2), 'utf8')