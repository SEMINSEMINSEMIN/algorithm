// 섞여있으면 안 될듯
// [1, 2, 3, 1, 2, 3, 1] -> [3, 3, 2, 2, 1, 1, 1]
// [4, 1, 2, 2, 4, 4, 4, 4, 1, 2, 4, 2] -> [4, 4, 4, 4, 4, 4, 2, 2, 2, 2, 1, 1]
// 내림차순으로 정렬 -> m의 개수만큼 배열 분할해서 합 구하기 
// 이익이 발생하지 않는 경우에 0을 return 한다 -> 이익이 발생하지 않는 경우란? -> 예를 들어 score는 [1,2,3]인데 m이 10일때

function solution(k, m, score) {
    if (m > score.length) return 0;

    let answer = 0;
    let i = 0;
    score.sort((a, b) => b - a);

    while (i + m - 1 < score.length) {
        const min = score[i + m - 1];
        const price = min * m;
        answer += price;
        i += m;
    }

    return answer;
}
// 최대 시간: 228.77ms


// 다른 사람의 풀이: 오름차순으로 정렬
function solution(k, m, score) {
    let answer = 0;
    const sortedScore = score.slice().sort((a, b) => a - b).slice(score.length % m);
    for (let i = 0; i < sortedScore.length; i += m) {
        answer += sortedScore[i] * m;
    }
    return answer;
}