const fs = require("fs");
const inputs = fs
  .readFileSync("dev/stdin")
  .toString()
  .trim()
  .split(" ")
  .map(Number);
const [hour, min] = inputs;

function solve(hour, min) {
  const earlierTime = hour * 60 + min - 45;

  if (earlierTime >= 0) {
    const earlierHour = Math.floor(earlierTime / 60);
    const earlierMin = earlierTime % 60;
    console.log(`${earlierHour} ${earlierMin}`);
  } else if (earlierTime < 0) {
    const earlierMin = 60 + earlierTime;
    console.log(`23 ${earlierMin}`);
  }
}

solve(hour, min);
