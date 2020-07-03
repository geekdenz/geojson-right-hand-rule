import {describe, it} from 'mocha'
import {expect} from 'chai'
import {polygon, lineString} from '@turf/helpers'
import {makeValid} from '..'
import {hint} from '@mapbox/geojsonhint'
import { readFileSync } from 'fs';

describe('Basic polygon gets corrected', () => {
    it('makes a join symbol (⨝) into valid features', () => {
        const poly = polygon([[[0, 0], [2, 0], [0, 2], [2, 2], [0, 0]]]);
        const result = makeValid(poly)
        const hints = hint(result)
        expect(hints.length).eq(0)
    })
    it('leaves a valid shape valid', () => {
        const poly = polygon([[[0, 0], [2, 0], [2, 2], [0, 0]]]);
        const result = makeValid(poly)
        const hints = hint(result)
        expect(hints.length).eq(0)
    })
    it('handles a valid square', () => {
        const poly = polygon([[[1, 1], [1, -1], [-1, -1], [-1, 1], [1, 1]]])
        const result = makeValid(poly)
        const hints = hint(result)
        expect(hints.length).eq(0)
    })
    it('handles a square within a square that is invalid', () => {
        const poly = polygon([
            [[1, 1], [1, -1], [-1, -1], [-1, 1], [1, 1]],
            [[2, 2], [2, -2], [-2, -2], [-2, 2], [2, 2]]
        ])
        const result = makeValid(poly)
        const hints = hint(result)
        expect(hints.length).eq(0)
    })
    it('handles a valid square within a square that has already been made valid', () => {
        const poly = polygon([
            [[1, 1], [1, -1], [-1, -1], [-1, 1], [1, 1]],
            [[2, 2], [2, -2], [-2, -2], [-2, 2], [2, 2]]
        ])
        const result = makeValid(makeValid(poly))
        const hints = hint(result)
        expect(hints.length).eq(0)
    })
    it('handles a scenario from the Riparian Planner', () => {
        const json = JSON.parse(readFileSync('rp/invalid.json', 'utf8'))
        const result = makeValid(json)
        const hints = hint(result)
        expect(hints.length).eq(0)
    })
    it('handles non-polygons and does not do anything to them', () => {
        const line = lineString([[0, 0], [5, 5]])
        const result = makeValid(line)
        result.features.forEach(feature => expect(feature.geometry.coordinates.length).to.not.equal(0));
        const hints = hint(result)
        expect(hints.length).eq(0)
    })
    it('handles valid 2193 line string', () => {
        const json = {"type":"Feature","id":"d3e2ed45-5373-4f80-8dd6-5f889be444c6","geometry":{"type":"LineString","coordinates":[[1693577.0177813934,6001360.516283825],[1705501.1941938647,6000876.414327129]]},"properties":{"featureType":"Waterway"}}
        const result = makeValid(json)
        result.features.forEach(feature => expect(feature.geometry.coordinates.length).to.not.equal(0));
        const hints = hint(result)
        expect(hints.length).eq(0)
    })
    it('handles valid geometries', () => {
        const coords = [[0, 0], [1, 0], [1, -1], [0, -1], [0, 0]];
        const json = {
            'type': 'FeatureCollection',
            features: [
                polygon([coords])
            ],
        }
        const result = makeValid(json)
        result.features.forEach(feature => expect(feature.geometry.coordinates.length).to.not.equal(0));
        const hints = hint(result)
        expect(hints.length).eq(0)
        const result2 = makeValid(result)
        result2.features.forEach(feature => expect(feature.geometry.coordinates.length).to.not.equal(0));
        const hints2 = hint(result2)
        expect(hints2.length).eq(0)
    })
})