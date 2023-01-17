// https://school.programmers.co.kr/learn/courses/30/lessons/120829
/*
예각 : 0 < angle < 90 => 1 리턴
직각 : angle = 90 => 2 리턴
둔각 : 90 < angle < 180 => 3 리턴
평각 : angle = 180 => 4 리턴
*/

// 내 풀이: if문 사용
// function solution(angle) {
//     if (angle > 0 && angle < 90) {
//         return 1;
//     } else if (angle === 90) {
//         return 2;
//     } else if (angle < 180) {
//         return 3;
//     } else if (angle === 180) {
//         return 4;
//     }
// }

// 다른 사람 풀이: filter 사용
function solution(angle) {
    return [0, 90, 91, 180].filter(x => angle >= x).length;
}