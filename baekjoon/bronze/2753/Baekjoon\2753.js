const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

function solve(num) {
  const isMultipleOf4 = !(num % 4);

  if (!isMultipleOf4) return 0;

  const isMultipleOf400 = !(num % 400);
  const isMultipleOf100 = !(num % 100);

  if (isMultipleOf400) return 1;
  else if (!isMultipleOf100) return 1;
  else return 0;
}

console.log(solve(Number(input)));
