const fs = require("fs");
const inputs = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const [startHour, startMin] = inputs[0].split(" ").map(Number);
const cookingTime = Number(inputs[1]);

function solve(startHour, startMin, cookingTime) {
  let finishTime = startHour * 60 + startMin + cookingTime;
  let finishHour = Math.floor(finishTime / 60);
  let finishMin = finishTime % 60;

  if (finishHour >= 24) {
    finishHour -= 24;
  }

  console.log(`${finishHour} ${finishMin}`);
}

solve(startHour, startMin, cookingTime);
