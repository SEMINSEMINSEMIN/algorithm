// https://school.programmers.co.kr/learn/courses/30/lessons/120806
// num1을 num2로 나눈 후 1000을 곱한 값에서 정수 부분만 리턴

function solution(num1, num2) {
    return Math.floor((num1 / num2) * 1000);
}