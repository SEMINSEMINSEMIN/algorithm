// https://school.programmers.co.kr/learn/courses/30/lessons/120831
// n 이하의 짝수 모두 더한 값 리턴하기

// 내 풀이
// 접근 방법: for문, i += 2
// function solution(n) {
//     let answer = 0;
//     for (let i = 0; i <= n; i += 2) {
//         answer += i;
//     }
//     return answer;
// }

// 다른 사람 풀이
// 접근 방법: 등차수열
// 등차수열 설명: http://egloos.zum.com/kissgirl/v/5379596
// function solution(n) {
//     var half = Math.floor(n/2);
//     return half*(half+1);
// }

// 그렇다면 홀수의 경우는?
function solution(n) {
    var half = Math.ceil(n/2);
    return half ** 2;
}