// 내 풀이
function solution(n) {
    let answer = "";

    for (let i = 0; i < n; i++) {
        answer += i % 2 ? "박" : "수";
    }
    
    return answer;
}

// 다른 사람 풀이
const waterMelon = n => {
    return '수박'.repeat(n/2) + (n%2 === 1 ? '수' : '');
}