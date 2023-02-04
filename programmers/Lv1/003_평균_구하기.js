function solution(arr) {
    // reduce로 합을 구한 뒤 arr.length로 나누기
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
}