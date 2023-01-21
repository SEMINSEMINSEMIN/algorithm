function solution(n) {
    return Array(n).fill(1).map((e, i) => e + i).filter(e => e % 2 === 1);
}