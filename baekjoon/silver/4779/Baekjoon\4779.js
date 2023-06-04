// 최초 풀이 시간: 55분..

let fs = require("fs");
let inputs = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

function solve(cantor) {
  const result = new Array(3 ** cantor).fill(" ");

  function helper(cantor, start) {
    if (!cantor) { 
      result[start] = "-";
      return;
    }

    const length = 3 ** cantor;
    const trisection = length / 3;

    helper(cantor - 1, start);
    helper(cantor - 1, start + 2 * trisection);
  }

  helper(cantor, 0);

  return result.join("");
}

inputs.map(e => console.log(solve(+e)));