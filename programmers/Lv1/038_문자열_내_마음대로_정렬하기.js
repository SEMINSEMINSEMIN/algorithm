// https://www.notion.so/seminkang/String-prototype-localeCompare-90dc2ee0fd8d411fade9c85d42f0dec8?pvs=4

function solution(strings, n) {
    const sorted = strings.sort((a, b) => {
        if (a[n] > b[n]) {
            return 1;
        } else if (a[n] < b[n]) {
            return -1;
        } else {
            return a > b ? 1 : -1;
        }
    });

    return sorted;
}

// 다른 사람 풀이: localeCompare 활용
// 내가 짠 코드가 이거보다 시간 복잡도 나음.
function solution(strings, n) {
    // strings 배열
    // n 번째 문자열 비교
    return strings.sort((s1, s2) => s1[n] === s2[n] ? s1.localeCompare(s2) : s1[n].localeCompare(s2[n]));
}