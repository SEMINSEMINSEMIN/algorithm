// https://school.programmers.co.kr/learn/courses/30/lessons/120889

function solution(sides) {
    sides.sort((a, b) => b - a);
    return sides[0] >= sides.slice(1, ).reduce((acc, cur) => acc + cur, 0) ? 2 : 1;
}
