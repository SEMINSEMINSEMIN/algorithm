// https://www.acmicpc.net/problem/10807

const fs = require('fs');
const inputs = fs.readFileSync("dev/stdin").toString().trim().split("\n");
const dataListArr = inputs[1].split(" ").map(v => +v);
const target = +inputs[2];

function solve(data, target) {
  // 찾고자 하는 값이 몇 개 있는지 숫자 형태로 저장한 뒤 이를 추후 반환할 것이다.
  let count = 0;

  // 배열을 for of문으로 돈다
  for (const e of data) {
    // 배열의 각 요소가 찾고자 하는 값과 같은지 비교 후 같다면 count에 1을 더해준다. 그렇지 않다면 0을 더해준다.
    count += e === target;
  }
  
  // 반환
  return count;
}


console.log(solve(dataListArr, target));