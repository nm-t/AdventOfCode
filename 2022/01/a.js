import fs from 'fs'
import readline from 'readline'

async function process() {
  const totalCaloriesPerElf = await getTotalCaloriesPerElf()

  // Return highest value in array
  console.log(Math.max(...totalCaloriesPerElf))
  return Math.max(...totalCaloriesPerElf)
}

export async function getTotalCaloriesPerElf() {
  const fileStream = fs.createReadStream('./01/01-test.txt')
  const rl = readline.createInterface({
    input: fileStream
  })

  const totalCaloriesPerElf = []
  let currentTotal = 0

  for await (const line of rl) {
    if (!isNaN(Number.parseInt(line))) {
      currentTotal += Number.parseInt(line)
    } else {
      // Store the total and reset the current running total
      totalCaloriesPerElf.push(currentTotal)
      currentTotal = 0
    }
  }
  return totalCaloriesPerElf
}

process()
