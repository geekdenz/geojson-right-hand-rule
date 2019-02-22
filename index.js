"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = require("fs");
var fs_2 = require("fs");
// const {readFileSync, writeFileSync} = require('fs')
// const rhr = require('./rhr.mjs')
var rhr_1 = require("./rhr");
// const {ensure} = require('./')
// const ensure = rhr.ensure
var geoJsonSourceFileName = process.env['SOURCE'] || 'complicated_geo.json';
var targetFileName = process.env['TARGET'] || 'complicated_rhr_geo.json';
var geoJson = JSON.parse(fs_1.readFileSync(geoJsonSourceFileName, 'utf8'));
var rhrEnsured = rhr_1.ensure(geoJson);
fs_2.writeFileSync(targetFileName, JSON.stringify(rhrEnsured, undefined, 2), 'utf8');
