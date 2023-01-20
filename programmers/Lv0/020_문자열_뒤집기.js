// https://school.programmers.co.kr/learn/courses/30/lessons/120822

// 내 풀이
// function solution(my_string) {
//     let answer = "";
//     for (const i of my_string) {
//         answer = i + answer;
//     }
//     return answer;
// }

// 다른 사람 풀이
function solution(my_string) {
    var answer = [...my_string].reverse().join("");
    return answer;
}