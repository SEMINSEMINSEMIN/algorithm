function solution(n) {
    // n+""(n을 문자열로 바꾼거)를 split후 reverse 사용하기
    // 이후 배열의 각 요소를 숫자로 형변환
    const target = n+"";
    return target.split("").reverse().map(e => parseInt(e));
}

// 근데 꼭 이렇게 해야 하나

// 아니면 n을 문자열로 바꿔서 for of과 unshift 이용하기(그 과정에서 형변환)
function solution(n) {
    const result = [];

    for (const e of n+"") {
        result.unshift(parseInt(e));
    }
    return result;
}

// 다른 사람 풀이
function solution(n) {
    // 문자풀이
    // return (n+"").split("").reverse().map(v => parseInt(v));

    // 숫자풀이
    var arr = [];

    do {
        arr.push(n%10);
        n = Math.floor(n/10);
    } while (n>0);

    return arr;
}

/*
12345가 주어졌다고 했을 때

첫 번째 반복문
arr = [5]
n = 1234

두 번째 반복문
arr = [5, 4]
n = 123

세 번째 반복문
arr = [5, 4, 3]
n = 12

네 번째 반복문
arr = [5, 4, 3, 2]
n = 1

다섯 번째 반복문
arr = [5, 4, 3, 2, 1]
n = 0
*/