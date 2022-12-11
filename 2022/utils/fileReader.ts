// @ts-ignore
import fs from 'fs'
// @ts-ignore
import readline from 'readline'

export async function readFile(pathToFile: string): Promise<string[]> {
  const fileStream = fs.createReadStream(pathToFile)
  const rl = readline.createInterface({
    input: fileStream
  })

  const outputArray: string[] = []

  for await (const line of rl) {
    outputArray.push(line)
  }

  return outputArray
}
