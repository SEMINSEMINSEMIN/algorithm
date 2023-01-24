// https://school.programmers.co.kr/learn/courses/30/lessons/120837

// 장군 개미: 5
// 병정 개미: 3
// 일개미: 1

// 사냥감의 체력에 딱 맞게 최소한의 병력 구성

// hp: 23일 경우
// 5 * 4, 3 * 1

// hp: 24일 경우
// 5 * 4, 3 * 1, 1 * 1

// hp: 999일 경우
// 5 * 199, 3 * 1, 1 * 1

// 내 풀이
// function solution(hp) {
//     let answer = 0;
//     answer += Math.floor(hp / 5);
//     hp = hp % 5;
//     answer += Math.floor(hp / 3);
//     hp = hp % 3;
//     answer += hp;
//     return answer;
// }

// 다른 사람 풀이
function solution(hp) {
    return Math.floor(hp/5) + Math.floor((hp % 5) / 3) + (hp % 5) % 3;
}
