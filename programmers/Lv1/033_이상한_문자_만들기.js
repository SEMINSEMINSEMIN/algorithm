function solution(s) {
    let answer = '';
    let isEven = true;
    for (const e of s) {
        if (e === " ") {
            isEven = true;
            answer += e;
        } else {
            answer += isEven ? e.toUpperCase() : e.toLowerCase();
            isEven = !isEven;
        }
    }
    return answer;
}