// https://school.programmers.co.kr/learn/courses/30/lessons/120836

// 1: (1, 1)
// 2: (1, 2), (2, 1)
// 3: (1, 3), (3, 1)
// 4: (1, 4), (2, 2), (4, 1)
// 99: (1, 99), (3, 33), (9, 11),

// 내 풀이
// while문 이용(근데 효율적이지 않을거 같음)
// function solution(n) {
//     let answer = 0;
//     let dividing = 1;
//     let divided = Infinity;
//     while (dividing < divided) {
//         if (n % dividing) {
//             dividing++;
//             continue;
//         } else {
//             divided = n / dividing;
//             answer += dividing === divided ? 1 : 2;
//             dividing++;
//         }
//     }
//     return answer;
// }

// 다른 사람 풀이
function solution(n) {
    let ans = 0;
    for (let i = 1; i < Math.sqrt(n); i++) {
        if (n % i === 0) ans += 2;
    }
    return Number.isInteger(Math.sqrt(n)) ? ans + 1 : ans;
}