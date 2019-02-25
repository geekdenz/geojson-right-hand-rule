import {describe, it} from 'mocha'
import {expect} from 'chai'
import {polygon} from '@turf/helpers'
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
})