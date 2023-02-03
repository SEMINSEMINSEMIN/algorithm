// https://school.programmers.co.kr/learn/courses/30/lessons/120839
function solution(rsp) {
    const rival = { "2": "0", "0": "5", "5": "2" };
    let answer = "";
    for (const i of rsp) {
        answer += rival[i];
    }
    return answer;
}

// 다른 사람 풀이: map과 join 활용
function solution(rsp) {
    let arr = {
        2: 0,
        0: 5,
        5: 2
    };
    var answer = [...rsp].map(v => arr[v]).join("");
    return answer;
}