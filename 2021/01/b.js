const fs = require("fs");
const readline = require("readline");

async function processLineByLine() {
  const fileStream = fs.createReadStream("./01/test.txt");
  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });

  let myArray = [];

  for await (const line of rl) {
    // Store values in an array
    myArray.push(Number.parseInt(line));
  }

  let newSums = [];

  // Iterate through array
  for (let i = 0; i < myArray.length; i++) {
    // While i is less than 2 off the array length
    if (i + 2 < myArray.length) {
      // sum(i, i+1, i+2) --> store into an array
      const triplet = myArray.slice(i, i + 3);
      newSums[i] = triplet.reduce((a, b) => {
        return a + b;
      });
    }
  }

  console.log(newSums);
  // Run the previous algorithm on the new array
}

processLineByLine();
