function solve(x, y) {
  if (x > 0) {
    return y > 0 ? 1 : 4;
  } else {
    return y > 0 ? 2 : 3;
  }
}

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on("line", function (line) {
  input.push(Number(line));
}).on("close", function () {
  console.log(solve(input[0], input[1]));
  process.exit();
});
