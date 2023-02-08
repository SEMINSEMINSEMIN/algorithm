function solution(absolutes, signs) {
    let answer = 0;

    for (const i in absolutes) {
        signs[i] ? answer += absolutes[i] : answer -= absolutes[i];
    }

    return answer;
}

// 다른 사람 풀이
function solution(absolutes, signs) {
    return absolutes.reduce((acc, val, i) => acc + (val * (signs[i] ? 1 : -1)), 0);
}