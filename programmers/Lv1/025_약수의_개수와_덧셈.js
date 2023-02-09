// 이중 반복문밖에 생각이 안 난다.. ㅠㅠ
function solution(left, right) {
    let result = 0;

    for (let i = left; i <= right; i++) {
        let count = 2;
        const squared = Math.sqrt(i);
        for (let j = i % 2 + 2; j < squared; j++) {
            count += i % j ? 0 : 2;
        }
        if (!(squared % 1)) count++;
        count % 2 ? result -= i : result += i;
    }

    return result;
}

// 다른 사람 풀이
// 제곱근이 정수면 약수의 개수가 홀수다
function solution(left, right) {
    var answer = 0;
    for (let i = left; i <= right; i++) {
        if (Number.isInteger(Math.sqrt(i))) {
            answer -= i;
        } else {
            answer += i;
        }
    }
    return answer;
}