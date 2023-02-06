// 내 풀이
function solution(x, n) {
    return new Array(n).fill(x).map((e, i) => e + x * i);
}

// 위 방법보다 for이 더 성능이 좋음
function solution(x, n) {
    var answer = [];
    for (let i = 1; i <= n; i++) {
        answer.push(x*i)
    }
    return answer;
}