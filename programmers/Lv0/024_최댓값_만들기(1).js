// https://school.programmers.co.kr/learn/courses/30/lessons/120847
// 배열의 원소 중 두 개를 곱해 만들 수 있는 최댓값 return

// 내 풀이: 제일 큰 값 찾기, 그 다음으로 큰 값 찾기
// function solution(numbers) {
//     const max1st = Math.max(...numbers);
//     const max1stIndex = numbers.indexOf(max1st);
//     numbers.splice(max1stIndex, 1);
//     const max2nd = Math.max(...numbers);
//     return max1st * max2nd;
// }

// 다른 사람 풀이: 내 풀이를 정렬로 풀었음
function solution(numbers) {
    numbers.sort((a, b) => b - a);
    return numbers[0] * numbers[1];
}