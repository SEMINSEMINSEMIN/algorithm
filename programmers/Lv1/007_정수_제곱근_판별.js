function solution(n) {
    const squared = Math.sqrt(n);
    if (squared !== Math.floor(squared)) return -1;
    return (squared + 1) ** 2;
}

// 정수 판별하는 다른 방법
// n % 1 === 0이 true이면 정수이다