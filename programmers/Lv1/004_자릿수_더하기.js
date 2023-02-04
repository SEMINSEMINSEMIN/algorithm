function solution(n)
{
    // n을 문자로 만든 뒤
    // n = n.toString();
    // for of을 이용해서 합 구하기
    let answer = 0;

    for (const e of n+"") {
        answer += parseInt(e);
    }

    return answer;
}

// 코드 리팩토링 참고 코드
// 나는 숫자를 문자열로 바꿀 때 toString을 이용했는데
// 아래 코드 작성자는 +가 연산자로 쓰였을 때 피연산자 중 하나가 문자열이면 문자열로 형변환된다는걸 이용하심

// function solution(n){
//     // 쉬운방법
//     return (n+"").split("").reduce((acc, curr) => acc + parseInt(curr), 0)
// }