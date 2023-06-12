const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().trim();

function solve(num) {
  if (num >= 90) return "A";
  else if (num >= 80) return "B";
  else if (num >= 70) return "C";
  else if (num >= 60) return "D";
  else return "F";
}

console.log(solve(Number(input)));
