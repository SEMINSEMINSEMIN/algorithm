// https://school.programmers.co.kr/learn/courses/30/lessons/120821

// 내 풀이
// function solution(num_list) {
//     let answer = [];
//     num_list.forEach(e => answer.unshift(e));
//     return answer;
// }

// 다른 사람 풀이: array.prototype.reverse()
function solution(num_list) {
    return num_list.reverse();
}