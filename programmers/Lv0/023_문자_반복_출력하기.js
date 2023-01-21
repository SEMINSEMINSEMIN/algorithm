// 내 풀이
// function solution(my_string, n) {
//     let answer = '';
//     for (const e of my_string) {
//         answer += e.repeat(n);
//     }
//     return answer;
// }

// 다른 사람 풀이
function solution(my_string, n) {
    return my_string.split("").reduce((acc, cur) => acc + cur.repeat(n), "");
}