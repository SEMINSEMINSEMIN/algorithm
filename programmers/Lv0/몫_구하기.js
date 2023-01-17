function solution(num1, num2) {
    const limitCheck = {};
    limitCheck.con1 = num1 > 0 && num1 <= 100;
    limitCheck.con2 = num2 > 0 && num2 <= 100;
    if (limitCheck.con1 && limitCheck.con2) {
        let answer;
        answer = Math.floor(num1 / num2);
        return answer;
    } else {
        console.log("매개변수의 범위는 0 초과 100 이하 입니다.");
    }
}