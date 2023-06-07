// 내 풀이:
// StackSizeExceeded 문제가 있었음 -> 해결함
// 근데 코드가 너무 긴듯..
// let fs = require("fs");
// let input =  require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
// let [N, ...data] = input;
// N = +N;

// function solve(data, N) {
//   if (N === 1) {
//     console.log(data[0]);
//     return;
//   }

//   let compressed = "";

//   function helper(data, N) {
//     if (N === 2) {
//       const leftTopData = +data[0][0];
//       const rightTopData = +data[0][1];
//       const leftBottomData = +data[1][0];
//       const rightBottomData = +data[1][1];
  
//       const sum = leftTopData + rightTopData + leftBottomData + rightBottomData;
//       if (sum === 4) return 1;
//       if (sum === 0) return 0;
//       else return `(${leftTopData}${rightTopData}${leftBottomData}${rightBottomData})`;
//     } 

//     const leftTop = [];
//     const rightTop = [];
//     const leftBottom = [];
//     const rightBottom = [];

//     for (let i = 0; i < N; i++) {
//       const isTop = i < N / 2;
//       const left = data[i].slice(0, N / 2);
//       const right = data[i].slice(N / 2);

//       if (isTop) {
//         leftTop.push(left);
//         rightTop.push(right);
//       } else {
//         leftBottom.push(left);
//         rightBottom.push(right);
//       }
//     }
  
//     const halfN = N / 2

//     const leftTopComp = helper(leftTop, halfN);
//     const rightTopComp = helper(rightTop, halfN);
//     const leftBottomComp = helper(leftBottom, halfN);
//     const rightBottomComp = helper(rightBottom, halfN);
  
//     let res = `(${leftTopComp}${rightTopComp}${leftBottomComp}${rightBottomComp})`;
//     if (res === "(1111)") {
//       return "1";
//     } else if (res === "(0000)") {
//       return "0"
//     } else {
//       return res;
//     }
//   }

//   compressed = helper(data, N);

//   console.log(compressed);
// }

// solve(data, N);

// 더 좋은 풀이
let fs = require("fs");
let input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

const N = Number(input[0]);
const nums = input.slice(1).map((v) => v.split("").map(Number));

const quadTree = [];

function recursion(n, x, y) {
  let total = 0;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      total += nums[y + j][x + i];
    }
  }

  if (total === 0) quadTree.push(0);
  else if (total === n * n) quadTree.push(1);
  else {
    n /= 2;
    quadTree.push("(");
    recursion(n, x, y);
    recursion(n, x + n, y);
    recursion(n, x, y + n);
    recursion(n, x + n, y + n);
    quadTree.push(")");
  }
}

recursion(N, 0, 0);
console.log(quadTree.join(""));