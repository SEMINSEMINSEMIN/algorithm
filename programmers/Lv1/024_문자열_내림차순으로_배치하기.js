// 내 코드
// 참고 사이트: https://hianna.tistory.com/409
// sort 함수로 문자열을 정렬하면, 대문자가 소문자보다 앞에 오도록 정렬이 된다.
function solution(s) {
    const toArr = s.split("");
    toArr.sort((a, b) => {
        if (a < b) return 1;
        if (a > b) return -1;
        if (a === b) return 0;
    });
    return toArr.join("");
}

// 다른 사람 풀이
function solution(s) {
  return s
    .split("")
    .sort()
    .reverse()
    .join("");
}