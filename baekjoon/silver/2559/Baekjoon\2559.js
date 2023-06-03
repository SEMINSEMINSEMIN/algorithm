let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");
const [N, K] = input[0].split(" ").map(e => +e);
const data = input[1].split(" ").map(e => +e);

// 10

// function solve(data, N, K) {
//   let i = 0;
//   let j = 1;

//   let acc = data[0];
//   let max = -Infinity;

//   while (i <= N - K) {
//     acc += data[j];
//     const isEndInRange = j === (i + K - 1);

//     if (isEndInRange) {
//       max = Math.max(max, acc);
//       i++;
//       acc = data[i];
//       j = i + 1;
//     } else {
//       j++;
//     }
//   }

//   return max;
// }

// console.log(solve(data, N, K));

// 이와 같이 하니 시간 초과가 났다.
/*
잘 생각해보시면 2~k+1번째 수의 합은 1~k번째 수의 합에서 1번째 수를 빼고, k+1번째 수를 더한 값과 같습니다. 이를 생각하면 굳이 반복문을 매번 돌리지 않아도 다음 부분합을 구할 수 있죠.
*/

// function solve(data, N, K) {
//   let i = 0;
//   let j = 1;

//   let acc = data[0];
//   let max = -Infinity;

//   while (i <= N - K) {
//     acc += data[j];
//     const isEndInRange = j === (i + K - 1);

//     if (isEndInRange) {
//       max = Math.max(max, acc);
//       acc -= data[i++];
//     }

//     j++;
//   }

//   return max;
// }

// console.log(solve(data, N, K));

// 위와 같이 하니 63%에서 시간 초과가 났다.

// sliding window
// 연속적인 합 (연속 개수가 정해져 있음)
// pointer 2개를 관리하는 거보다 합을 구하는 범위를 옮기는 게 더 효율적임
// 마치 창문을 옮기는 거처럼
function solve(data, N, K) {
  let acc = 0;
  let i = 0;
  let max = -Infinity;

  for (let i = 0; i < K; i++) {
    acc += data[i];
  }

  max = acc;
  i = K;

  while (i < N) {
    acc += data[i] - data[i - K];
    max = Math.max(max, acc);
    i++;
  }

  return max;
}

console.log(solve(data, N, K));