import { readFile } from '../utils/fileReader'

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
  let themAndYou = line.split(' ')
  const them = themAndYou[0]
  const you = themAndYou[1]
  const handValue = getHandValue(you)
  // Draw
  if (isDraw(them, you)) {
    return DRAW_VALUE + handValue
  }
  // Win
  if (isWin(them, you)) {
    return WIN_VALUE + handValue
  }
  // Everything else is a loss
  return LOSE_VALUE + handValue
}

function isDraw(them: string, you: string) {
  return (
    // Rock beats scissors
    (you === 'X' && them === 'A') ||
    // Paper beats rock
    (you === 'Y' && them === 'B') ||
    // Scissors beats paper
    (you === 'Z' && them === 'C')
  )
}

export function isWin(them: string, you: string) {
  return (
    // Rock beats scissors
    (you === 'X' && them === 'C') ||
    // Paper beats rock
    (you === 'Y' && them === 'A') ||
    // Scissors beats paper
    (you === 'Z' && them === 'B')
  )
}

export function getHandValue(hand: string): number {
  const ROCK_VALUE = 1
  const PAPER_VALUE = 2
  const SCISSORS_VALUE = 3

  const handMap = new Map()
  handMap.set('X', ROCK_VALUE) // Rock (A)
  handMap.set('Y', PAPER_VALUE) // Paper (B)
  handMap.set('Z', SCISSORS_VALUE) // Scissors (C)

  return handMap.get(hand)
}

const process = async () => {
  const input: Promise<string[]> = readFile('./02/test.txt')
  const myStringArrayInput: string[] = await input
  calculateScore(myStringArrayInput)
}

process()
