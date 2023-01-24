// 내 풀이
// function solution(n) {
//     return Math.sqrt(n) === Math.floor(Math.sqrt(n)) ? 1 : 2;
// }

// 다른 사람 풀이
// Number.isInteger: 정수인지 아닌지
function solution(n) {
  return Number.isInteger(Math.sqrt(n)) ? 1 : 2;
}