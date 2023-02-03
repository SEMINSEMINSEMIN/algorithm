// https://school.programmers.co.kr/learn/courses/30/lessons/120892
// 내 풀이
function solution(cipher, code) {
    let answer = "";
    for (let i = 0; i < cipher.length; i++) {
        answer += (i + 1 - code) % code === 0 ? cipher[i] : "";
    }
    return answer;
}

// solution("dfjardstddetckdaccccdegk", 4);

// 0 1 2 3 4 5 6 7 8
// 1 2 3 4 5 6 7 8 9
// -3 -2 -1 0 1 2 3 4 5

// 이 문제 처음 풀 때 for in으로 접근했는데, for in과 for of의 i의 타입이 문자열인걸 기억하자!!
// 그거 때문에 계속 답이 안 나왔음
(function () {
    console.log("type of for ... in");
    for (const i in "hi") {
        console.log(typeof i);
    }
    console.log("---");
    console.log("type of for ... of");
    for (const e of "hi") {
        console.log(typeof e);
    }
}());

/*
type of for ... in
string
string
---
type of for ... of
string
string
*/

// 다른 사람 풀이: for문을 전부 다 돌 필요가 없음!
function solution(cipher, code) {
  var answer = "";
  for (let i = code - 1; i < cipher.length; i += code) {
    answer += cipher[i];
  }
  return answer;
}