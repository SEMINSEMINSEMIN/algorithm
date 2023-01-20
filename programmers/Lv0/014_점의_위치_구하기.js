// https://school.programmers.co.kr/learn/courses/30/lessons/120841

// 내 풀이
// function solution(dot) {
//     if (dot[0] > 0) {
//         return dot[1] > 0 ? 1 : 4;
//     } else {
//         return dot[1] > 0 ? 2 : 3;
//     }
// }

// 다른 사람 풀이: 구조 분해
function solution(dot) {
    const [num, num2] = dot;
    const check = num * num2 > 0;
    return num > 0 ? (check ? 1 : 4) : (check ? 3 : 2);
}