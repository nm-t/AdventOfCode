import { calculateRound, calculateScore } from './a'

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
})
