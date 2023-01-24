// 내 풀이
// function solution(n) {
//     return n.toString().split("").reduce((acc, cur) => parseInt(acc) + parseInt(cur), 0);
// }

// 다른 사람 풀이: acc는 parseInt 필요 없음!
function solution(n) {
  return n
    .toString()
    .split("")
    .reduce((acc, cur) => acc + Number(cur), 0);
}
