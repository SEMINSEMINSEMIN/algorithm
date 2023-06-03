// 내 풀이 (틀림 - 근데 왜 틀렸는지 이해 못하겠음)
// const fs = require('fs'); 
// const inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
// const [length, target] = inputs[0].split(" ").map(e => +e);
// const data = inputs[1].split(" ").map(e => +e);

// function solve(dataLength, data, target) {
//   let count = 0;
//   let pointer1 = 0;
//   let pointer2 = 0;
//   let sum = 0;

//   // while문을 이용할 것이다. pointer1이 dataLength보다 작을 때까지 while문을 반복한다.
//   while (pointer1 < dataLength) {
//     pointer1 === pointer2 ? sum = data[pointer1] : sum += data[pointer2];

//     if (sum < target) {
//       if (pointer2 < dataLength - 1) pointer2++;
//       else {
//         pointer1++;
//         pointer2 = pointer1 + 1;
//       }
//       continue;
//     }

//     if (sum === target) count++;
//     pointer1++;
//     pointer2 = pointer1;
//   }
  
//   return count;
// }


// console.log(solve(length, data, target));

/* -------------------------------------------------------------------------- */

// 다른 사람 풀이
let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, M] = input
  .shift()
  .split(" ")
  .map((v) => Number(v));
const nums = input
  .shift()
  .split(" ")
  .map((v) => Number(v));

let answer = 0;
let left = 0;
let right = 0;
let sum = nums[left];

while (left < N && right < N) {
  if (sum === M) {
    answer++;
    sum += nums[++right];
  } else if (sum < M) {
    sum += nums[++right];
  } else if (sum > M) {
    sum -= nums[left++];
  }
}

console.log(answer);