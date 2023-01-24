// https://school.programmers.co.kr/learn/courses/30/lessons/120851

// 내 풀이
// function solution(my_string) {
//     let result = 0;
//     my_string.split("").forEach(e => {
//         result += parseInt(e) ? parseInt(e) : 0;
//     });
//     return result;
// }

// 다른 사람 풀이
// 정규 표현식을 이용해 문자열에서 숫자 제거
function solution(my_string) {
    const answer = my_string.replace(/[^0-9]/g, '')
                            .split('')
                            .reduce((acc, curr) => acc + Number(curr), 0);
    return answer;
}