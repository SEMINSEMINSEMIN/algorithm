// https://school.programmers.co.kr/learn/courses/30/lessons/120824

// 내 풀이
// function solution(num_list) {
//     const evenNum = num_list.filter(e => e % 2 === 0).length;
//     return [evenNum, num_list.length - evenNum];
// }

// 다른 사람 풀이
function solution(num_list) {
    var answer = [0,0];

    for(let a of num_list){
        answer[a%2] += 1
    }

    return answer;
}