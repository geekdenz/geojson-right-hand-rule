"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mocha_1 = require("mocha");
var chai_1 = require("chai");
var helpers_1 = require("@turf/helpers");
var __1 = require("..");
var geojsonhint_1 = require("@mapbox/geojsonhint");
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
});
