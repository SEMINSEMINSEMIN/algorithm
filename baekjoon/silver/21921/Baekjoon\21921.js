// 최초 풀이 시간: 20분
// 처음 제출시 틀림 -> https://bmy1320.tistory.com/entry/%EB%B0%B1%EC%A4%80-Silver-3-%EB%AC%B8%EC%A0%9C-%EB%B0%B1%EC%A4%80-Nodejs-%EC%9E%90%EB%B0%94%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8-21921-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%8A%AC%EB%9D%BC%EC%9D%B4%EB%94%A9-%EC%9C%88%EB%8F%84%EC%9A%B0 참고

let fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const [N, X] = input[0].split(" ").map(Number);
const data = input[1].split(" ").map(Number);

function solve(data, N, X) {
  let max = 0;
  let acc = 0;
  let count = 0;

  for (let i = 0; i < X; i++) {
    acc += data[i];
  }

  max = Math.max(acc, max);
  count = 1;

  for (let i = 1; i <= N - X; i++) {
    acc += data[i + X - 1] - data[i - 1];

    if (acc < max) continue;

    if (acc > max) {
      max = acc;
      count = 1;
    } else count++;
  }

  if (!max) console.log("SAD");
  else {
    console.log(max);
    console.log(count);
  }
}

solve(data, N, X);