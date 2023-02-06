// 내 풀이
function solution(s) {
    const isNegative = s[0] === "-";
    return isNegative ? -parseInt(s.slice(1)) : parseInt(s);
}

// 다른 사람 풀이: 형변환
function strToInt(str) {
    return str / 1;
}
