function solution(arr, divisor) {
    const filtered = arr.filter(e => !(e % divisor));
    return filtered.length ? filtered.sort((a, b) => a - b) : [-1];
}