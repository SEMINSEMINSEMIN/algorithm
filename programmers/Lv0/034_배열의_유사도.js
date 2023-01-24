// https://school.programmers.co.kr/learn/courses/30/lessons/120903

// 내 풀이
// Array.prototype.indexOf()
// 배열에서 지정된 요소를 찾을 수 있는 첫 번째 인덱스를 반환하고 존재하지 않으면 -1을 반환
// function solution(s1, s2) {
//     let answer = 0;
//     s1.forEach(e => {
//         answer += s2.indexOf(e) === -1 ? 0 : 1;
//     });
//     return answer;
// }

// 다른 사람 풀이
// Array.prototype.includes()
function solution(s1, s2) {
    const intersection = s1.filter(x => s2.includes(x));
    return intersection.length;
}
