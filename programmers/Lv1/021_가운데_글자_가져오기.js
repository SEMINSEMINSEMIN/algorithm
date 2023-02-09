function solution(s) {
    const length = s.length;
    let answer = "";

    if (length % 2) {
        answer += s[(length + 1) / 2 - 1];
    } else {
        answer += s[length / 2 - 1];
        answer += s[length / 2];
    }

    return answer;
}

// 다른 사람 풀이
function solution(s) {
    const mid = Math.floor(s.length/2);
    return s.length %2 === 1 ? s[mid] : s[mid-1]+s[mid];
}