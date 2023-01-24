// https://school.programmers.co.kr/learn/courses/30/lessons/120908

// 내 풀이
// 정규 표현식과 match 사용
// function solution(str1, str2) {
//     const reg = new RegExp(str2);
//     return str1.match(reg) ? 1: 2;
// }

// 다른 사람 풀이 - 1
// String.prototype.includes()
// function solution(str1, str2) {
//     return str1.includes(str2) ? 1 : 2;
// }

// 다른 사람 풀이 - 2
// split
function solution(str1, str2) {
    console.log(str1.split(str2));
    return str1.split(str2).length > 1 ? 1 : 2
}