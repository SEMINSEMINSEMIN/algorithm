// https://seminkang.notion.site/36f11c698e5a4215bc37744b815af1c5?pvs=4
// 근데 스택/큐를 어떻게 적용해야 할지 모르겠음..

// 첫 번째로 생각한 방향: frequencyCounter
// function solution(s){
// if (!(s[0] === "(" && s[s.length - 1] === ")")) return false;
// if (s.length % 2 !== 0) return false;

//   let answer = false;

//   const frequencyCounter = {
//     "(" : 1,
//     ")" : 1
//   };

//   for (let i = 1; i < s.length - 1; i++) {
//     const char = s[i];
//     frequencyCounter[char] += 1;
//   }

//   return frequencyCounter["("] === frequencyCounter[")"] ? true : false;
// }

/* ----------------------------------- */

// 2번째로 생각한 방향: 재귀
// function solution(s){
//   if (!(s[0] === "(" && s[s.length - 1] === ")")) return false;
//   if (s.length % 2 !== 0) return false;

//   let answer = false;

//   const toArray = s.split("");
//   const leftBracketIndex = 0;
//   let compareIdx = 1;

//   function helper(data, leftIdx, compareIdx) {
// if (!data.length) return;

// const bracket = data[compareIdx];
// const isRightBracket = bracket === ")";

//     if (isRightBracket) {
//       toArray[leftBracketIndex] = "";
//       toArray[compareIdx] = "";
//       // index 조정
//     } else {
//       // 아닐 경우 뭔가를 해야 함
//       leftBracketIndex = compareIdx;
//       compareIdx++; // ??
//     }

//     // 어디선가 재귀호출
//   }

//   helper(toArray, leftBracketIndex, compareIdx);

//   return frequencyCounter["("] === frequencyCounter[")"] ? true : false;
// }

/* ----------------------------------- */

// 3번째 접근 방향: 모각공 스터디원분이 제시한 방향, 좋은거 같다
// (가 있으면 쌓고 )가 있으면 제거하는데
// size가 0일 때 제거를 하면 틀린 오답
/*
())(()

const arr = [];

1. (
arr = [(]

2. )
arr = []

3. )
arr = [].delete Something => error
return false


()()

1. (
arr = [(]

2. )
arr = []

3. (
arr = [(]

4. )
arr = []

루프를 다 돌 때까지 에러가 없으면 return true
*/

function solution(s) {
  if (!(s[0] === "(" && s[s.length - 1] === ")")) return false;
  if (s.length % 2 !== 0) return false;

  const lookUp = [];

  for (const e of s) {
    const isRightBracket = e === ")";
    if (isRightBracket) {
      if (lookUp.length) {
        lookUp.pop();
      } else {
        return false;
      }
    } else {
      lookUp.push("(");
    }
  }

  return true;
}
