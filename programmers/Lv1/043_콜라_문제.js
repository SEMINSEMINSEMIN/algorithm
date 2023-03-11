function solution(a, b, n) {
    if (n < a) return 0;
    const newNum = Math.floor(n / a) * b;
    const remainedNum = n % a;
    return newNum + solution(a, b, newNum + remainedNum);
}

// 다른 사람 풀이
function solution(a, b, n) {
    let answer = 0;
    while (n >= a) {
        answer += parseInt(n / a) * b;
        n = parseInt(n / a) * b + n % a;
    }
    return answer;
}