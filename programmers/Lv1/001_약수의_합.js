// 약수란? 어떤 수나 식을 나누어 나머지가 없이 떨어지는 수나 식

// 내가 생각한 방법
function solution(n) {
    // n은 0 이상 3000 이하의 정수
    // while문을 이용하기(첫 번째 인수, 두 번째 인수, 첫 번째 인수가 두 번째 인수보다 작거나 같을 때까지만
    // 이렇게 한 이유: 조금이라도 반복 횟수를 줄이기 위해

    // const sumList = [];
    let answer = 0;
    let first = 1;
    let second = n / first;

    while (first <= second) {
        if (!(n % first)) {
            if (first === second) {
                // sumList.push(first);
                answer += first;
            } else {
                // sumList.push(...[first, second]);
                answer += first + second;
            }
        }
        first++;
        second = n / first;
    }

    // return sumList.reduce((acc, cur) => acc + cur, 0);
    return answer;
}

// 리팩토링 시 참고 코드
// 처음에는 더해야 할 목록을 배열로 만든 뒤 거기에 push로 넣고 나중에 그 배열 안에 모든 걸 합하는 방식으로 했는데
// 굳이 그렇게 할 필요 없이 그냥 바로바로 더해버리면 됨
// 아래 코드 쓴 사람은 for문과 Math.sqrt 이용함
function solution(n) {
    var answer = 0;
    let i;
    for (i = 1; i <= Math.sqrt(n); i++){
        if (!(n%i)) {
            answer += (i+n/i);
        }
    }
    i--;
    return (i === n/i) ? answer-i : answer;
}