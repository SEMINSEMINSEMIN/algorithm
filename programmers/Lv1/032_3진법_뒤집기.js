// https://hongjw1938.tistory.com/43#:~:text=%EC%88%98%ED%95%99%EC%9C%BC%EB%A1%9C%20%EC%83%9D%EA%B0%81%ED%95%98%EB%A9%B4%2010,%ED%91%9C%EC%8B%9C%ED%95%98%EB%AF%80%EB%A1%9C%2012%EA%B0%80%20%EB%90%9C%EB%8B%A4.
function solution(n) {
    let answer = 0;
    const to3 = [];

    while (n > 0) {
        to3.push(n % 3);
        n = Math.floor(n / 3);
    }

    to3.forEach((e, i) => {
        answer += 3 ** Math.abs(i - to3.length + 1) * e;
    });

    return answer;
}

// 다른 사람 풀이
// 10진수.toString(n): 10진수를 n진수로 바꿔준다.
// parseInt(n진수, n): n진수를 10진수로 바꿔준다.
const solution = (n) => {
    return parseInt([...n.toString(3)].reverse().join(""), 3);
}