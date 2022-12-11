import { calculateRound, calculateScore } from './a'
import {
  calculateRound as bCalculateRound,
  calculateScore as bCalculateScore
} from './b'

describe('02', () => {
  describe('a', () => {
    describe('calculateRound', () => {
      test('A Y', () => {
        expect(calculateRound('A Y')).toEqual(8)
      })
      test('B X', () => {
        expect(calculateRound('B X')).toEqual(1)
      })
      test('C Z', () => {
        expect(calculateRound('C Z')).toEqual(6)
      })
    })
    test('calculateScore', () => {
      expect(calculateScore(['A Y', 'B X', 'C Z'])).toEqual(15)
    })
  })
  describe('b', () => {
    describe('calculateRound', () => {
      test('A Y', () => {
        expect(bCalculateRound('A Y')).toEqual(4)
      })
      test('B X', () => {
        expect(bCalculateRound('B X')).toEqual(1)
      })
      test('C Z', () => {
        expect(bCalculateRound('C Z')).toEqual(7)
      })
    })
    test('calculateScore', () => {
      expect(bCalculateScore(['A Y', 'B X', 'C Z'])).toEqual(12)
    })
  })
})
