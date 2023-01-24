// https://school.programmers.co.kr/learn/courses/30/lessons/120849

// 내 풀이
// function solution(my_string) {
//     let answer = '';
//     for (const e of my_string) {
//         answer += "aeiou".includes(e) ? "" : e;
//     }
//     return answer;
// }

// 다른 사람 풀이: 정규 표현식 & replace
function solution(my_string) {
    return my_string.replace(/[aeiou]/g, '');
}