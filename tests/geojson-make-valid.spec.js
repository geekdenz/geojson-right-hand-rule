"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var helpers_1 = require("@turf/helpers");
var __1 = require("..");
var geojsonhint_1 = require("@mapbox/geojsonhint");
var fs_1 = require("fs");
mocha_1.describe('Basic polygon gets corrected', function () {
    mocha_1.it('makes a join symbol (⨝) into valid features', function () {
        var poly = helpers_1.polygon([[[0, 0], [2, 0], [0, 2], [2, 2], [0, 0]]]);
        var result = __1.makeValid(poly);
        var hints = geojsonhint_1.hint(result);
        chai_1.expect(hints.length).eq(0);
    });
    mocha_1.it('leaves a valid shape valid', function () {
        var poly = helpers_1.polygon([[[0, 0], [2, 0], [2, 2], [0, 0]]]);
        var result = __1.makeValid(poly);
        var hints = geojsonhint_1.hint(result);
        chai_1.expect(hints.length).eq(0);
    });
    mocha_1.it('handles a valid square', function () {
        var poly = helpers_1.polygon([[[1, 1], [1, -1], [-1, -1], [-1, 1], [1, 1]]]);
        var result = __1.makeValid(poly);
        var hints = geojsonhint_1.hint(result);
        chai_1.expect(hints.length).eq(0);
    });
    mocha_1.it('handles a square within a square that is invalid', function () {
        var poly = helpers_1.polygon([
            [[1, 1], [1, -1], [-1, -1], [-1, 1], [1, 1]],
            [[2, 2], [2, -2], [-2, -2], [-2, 2], [2, 2]]
        ]);
        var result = __1.makeValid(poly);
        var hints = geojsonhint_1.hint(result);
        chai_1.expect(hints.length).eq(0);
    });
    mocha_1.it('handles a valid square within a square that has already been made valid', function () {
        var poly = helpers_1.polygon([
            [[1, 1], [1, -1], [-1, -1], [-1, 1], [1, 1]],
            [[2, 2], [2, -2], [-2, -2], [-2, 2], [2, 2]]
        ]);
        var result = __1.makeValid(__1.makeValid(poly));
        var hints = geojsonhint_1.hint(result);
        chai_1.expect(hints.length).eq(0);
    });
    mocha_1.it('handles a scenario from the Riparian Planner', function () {
        var json = JSON.parse(fs_1.readFileSync('rp/invalid.json', 'utf8'));
        var result = __1.makeValid(json);
        var hints = geojsonhint_1.hint(result);
        chai_1.expect(hints.length).eq(0);
    });
    mocha_1.it('handles non-polygons and does not do anything to them', function () {
        var line = helpers_1.lineString([[0, 0], [5, 5]]);
        var result = __1.makeValid(line);
        result.features.forEach(function (feature) { return chai_1.expect(feature.geometry.coordinates.length).to.not.equal(0); });
        var hints = geojsonhint_1.hint(result);
        chai_1.expect(hints.length).eq(0);
    });
    mocha_1.it('handles valid 2193 line string', function () {
        var json = { "type": "Feature", "id": "d3e2ed45-5373-4f80-8dd6-5f889be444c6", "geometry": { "type": "LineString", "coordinates": [[1693577.0177813934, 6001360.516283825], [1705501.1941938647, 6000876.414327129]] }, "properties": { "featureType": "Waterway" } };
        var result = __1.makeValid(json);
        result.features.forEach(function (feature) { return chai_1.expect(feature.geometry.coordinates.length).to.not.equal(0); });
        var hints = geojsonhint_1.hint(result);
        chai_1.expect(hints.length).eq(0);
    });
    mocha_1.it('handles valid geometries', function () {
        var coords = [[0, 0], [1, 0], [1, -1], [0, -1], [0, 0]];
        var json = {
            'type': 'FeatureCollection',
            features: [
                helpers_1.polygon([coords])
            ],
        };
        var result = __1.makeValid(json);
        result.features.forEach(function (feature) { return chai_1.expect(feature.geometry.coordinates.length).to.not.equal(0); });
        var hints = geojsonhint_1.hint(result);
        chai_1.expect(hints.length).eq(0);
        var result2 = __1.makeValid(result);
        result2.features.forEach(function (feature) { return chai_1.expect(feature.geometry.coordinates.length).to.not.equal(0); });
        var hints2 = geojsonhint_1.hint(result2);
        chai_1.expect(hints2.length).eq(0);
    });
});
