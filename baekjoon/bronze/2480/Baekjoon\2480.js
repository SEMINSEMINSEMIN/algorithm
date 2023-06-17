const fs = require("fs");
let inputs = fs.readFileSync("dev/stdin").toString().trim();
inputs = inputs.split(" ").map(Number);

function solve(numArr) {
  const frequencyMap = new Map();

  for (const e of numArr) {
    const frequency = frequencyMap.get(e);
    frequency !== undefined
      ? frequencyMap.set(e, frequency + 1)
      : frequencyMap.set(e, 1);
  }

  let duplicationCount = 0;
  let duplicationVal;

  for (let [num, frequency] of frequencyMap) {
    if (frequency >= 2) {
      duplicationCount = frequency;
      duplicationVal = num;
    }
  }

  switch (duplicationCount) {
    case 0:
      return Math.max(...numArr) * 100;
    case 2:
      return 1000 + duplicationVal * 100;
    case 3:
      return 10000 + duplicationVal * 1000;
  }
}

console.log(solve(inputs));
