import { getTotalCaloriesPerElf } from './a.js'

async function process() {
  const totalCaloriesPerElf = await getTotalCaloriesPerElf()
  console.log(totalCaloriesPerElf)

  // Sort the array and store the top three
  totalCaloriesPerElf.sort(function (a, b) {
    return b - a
  })
  const topThreeElvesCalories = totalCaloriesPerElf.splice(0, 3)
  console.log(topThreeElvesCalories)

  // Return the top three
  const topThreeElvesCaloriesTotal = topThreeElvesCalories.reduce(
    (a, b) => a + b,
    0
  )

  console.log(topThreeElvesCaloriesTotal)
}

process()
