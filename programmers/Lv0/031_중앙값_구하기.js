function solution(array) {
    array.sort((a, b) => a - b);
    const mediumIndex = (array.length + 1) / 2 - 1;
    return array[mediumIndex];
}