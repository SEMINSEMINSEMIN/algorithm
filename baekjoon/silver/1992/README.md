# 기존 코드

```js
let fs = require("fs");
let input = process.platform === "linux" ? "dev.stdin" : fs.readFileSync(__dirname + "/example.txt").toString().trim().split("\n");
const [N, ...data] = input;

function solve(data, N) {
  let compressed = "";

  function helper(data, N) {
    if (N === 2) {
      const leftTopData = +data[0][0];
      const rightTopData = +data[0][1];
      const leftBottomData = +data[1][0];
      const rightBottomData = +data[1][1];
  
      const sum = leftTopData + rightTopData + leftBottomData + rightBottomData;
      if (sum === 4) return 1;
      if (sum === 0) return 0;
      else return `(${leftTopData}${rightTopData}${leftBottomData}${rightBottomData})`;
    } 

    const leftTop = [];
    const rightTop = [];
    const leftBottom = [];
    const rightBottom = [];

    for (let i = 0; i < N; i++) {
      const isTop = i < N / 2;
      const left = data[i].slice(0, N / 2);
      const right = data[i].slice(N / 2);

      if (isTop) {
        leftTop.push(left);
        rightTop.push(right);
      } else {
        leftBottom.push(left);
        rightBottom.push(right);
      }
    }
  
    const halfN = N / 2

    const leftTopComp = helper(leftTop, halfN);
    const rightTopComp = helper(rightTop, halfN);
    const leftBottomComp = helper(leftBottom, halfN);
    const rightBottomComp = helper(rightBottom, halfN);
  
    let res = `(${leftTopComp}${rightTopComp}${leftBottomComp}${rightBottomComp})`;
    if (res === "(1111)") {
      return "1";
    } else if (res === "(0000)") {
      return "0"
    } else {
      return res;
    }
  }

  compressed = helper(data, N);

  console.log(compressed);
}

solve(data, N);
```
```
input:
1
1

expected:
1
```
이 코드를 실행시 <pre>Maxiumum call stack size exceeded</pre> 에러가 떴다.<br>
이유는 N = 1 일 때 처리를 해주지 않았기 때문이다.
# 해결 방법
```js
if (N === 1) {
  console.log(data[0]);
  return;
}
```
종료 조건에 N이 1인 경우 추가
# 배운 점
input의 범위가 어떻게 되는지 항상 확인.<br>
문제를 제대로 안 읽어서 2부터 시작하는 거만 생각함