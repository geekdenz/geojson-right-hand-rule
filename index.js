import { readFileSync } from 'fs';
import { writeFileSync } from 'fs';
// const {readFileSync, writeFileSync} = require('fs')
// const rhr = require('./rhr.mjs')
import { ensure } from './rhr';
// const {ensure} = require('./')
// const ensure = rhr.ensure
const geoJsonSourceFileName = process.env['SOURCE'] || 'complicated_geo.json';
const targetFileName = process.env['TARGET'] || 'complicated_rhr_geo.json';
const geoJson = JSON.parse(readFileSync(geoJsonSourceFileName, 'utf8'));
const rhrEnsured = ensure(geoJson);
writeFileSync(targetFileName, JSON.stringify(rhrEnsured, undefined, 2), 'utf8');
