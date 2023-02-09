// 내 풀이: forEach
function solution(a, b) {
    let result = 0;
    a.forEach((e, i) => result += e * b[i]);
    return result;
}

// 다른 사람 풀이: reduce
function solution(a, b) {
    return a.reduce((acc, _, i) => acc += a[i] * b[i], 0);
}
