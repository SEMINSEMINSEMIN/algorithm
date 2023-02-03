// https://school.programmers.co.kr/learn/courses/30/lessons/120910

// 내 풀이
// function solution(n, t) {
//     return n * 2 ** t;
// }

// 다른 사람 풀이
function solution(n, t) {
  return n << t;
}
// 비트 연산자 - 시프트 연산자: https://colossus-java-practice.tistory.com/19