// 내 풀이
// function solution(my_string, letter) {
//     return my_string.split("").filter(e => e !== letter).join("");
// }

// 다른 사람 풀이 - 1
// function solution(my_string, letter) {
//     const answer = my_string.split(letter).join('')
//     return answer;
// }

// 다른 사람 풀이 - 2: replaceAll
// function solution(my_string, letter) {
//     return my_string.replaceAll(letter, "");
// }

// 다른 사람 풀이 - 3: Array.from
// Array.from() static method creates a new, shallow-copied Array instance from an "iterable" or "array-like" object
function solution(my_string, letter) {
    return Array.from(my_string).filter(t => t !== letter).join('');
}