const fs = require("fs");
const inputs = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);

function solve(int1, int2) {
  const diff = int1 - int2;

  if (diff > 0) {
    return ">";
  } else if (diff < 0) {
    return "<";
  } else {
    return "==";
  }
}

console.log(solve(inputs[0], inputs[1]));
