function solution(my_string) {
    let answer = '';
    for (const e of my_string) {
        answer += e.toUpperCase() === e ? e.toLowerCase() : e.toUpperCase();
    }
    return answer;
}