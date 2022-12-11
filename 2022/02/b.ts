import { readFile } from '../utils/fileReader'
import { getHandValue } from './a'

export function calculateScore(input: string[]): number {
  let totalScore = 0
  input.forEach((line: string) => {
    totalScore += calculateRound(line)
  })
  console.log(totalScore)
  return totalScore
}

export function calculateRound(line: string): number {
  const WIN_VALUE = 6
  const DRAW_VALUE = 3
  const LOSE_VALUE = 0

  // Split with space delimiter
  let themAndExpectedOutcome = line.split(' ')
  const them = themAndExpectedOutcome[0]
  const expectedOutcome = themAndExpectedOutcome[1]
  const handToThrow = getHandToThrow(them, expectedOutcome)
  const handValue = getHandValue(handToThrow)

  switch (expectedOutcome) {
    // Draw (Y)
    case 'Y':
      return DRAW_VALUE + handValue
    // Win (Z)
    case 'Z':
      return WIN_VALUE + handValue
    // Loss (X)
    case 'X':
      return LOSE_VALUE + handValue
    default:
      return 0
  }
}

function getDrawHand(them: string) {
  switch (them) {
    case 'A':
      return 'X'
    case 'B':
      return 'Y'
    case 'C':
      return 'Z'
    default:
      return ''
  }
}

export function getWinHand(them: string) {
  switch (them) {
    // Rock beats scissors
    case 'C':
      return 'X'
    // Paper beats rock
    case 'A':
      return 'Y'
    // Scissors beats paper
    case 'B':
      return 'Z'
    default:
      return ''
  }
}

export function getLossHand(them: string) {
  switch (them) {
    // Rock loses to paper
    case 'C':
      return 'Y'
    // Paper loses to scissors
    case 'A':
      return 'Z'
    // Scissors loses to rock
    case 'B':
      return 'X'
    default:
      return ''
  }
}

export function getHandToThrow(them: string, expectedOutcome: string): string {
  switch (expectedOutcome) {
    // Draw (Y)
    case 'Y':
      return getDrawHand(them)
    // Win (Z)
    case 'Z':
      return getWinHand(them)
    // Loss (X)
    case 'X':
      return getLossHand(them)
    default:
      return ''
  }
}

const process = async () => {
  const input: Promise<string[]> = readFile('./02/input.txt')
  const myStringArrayInput: string[] = await input
  calculateScore(myStringArrayInput)
}

process()
