// 내 풀이
function solution(x) {
    let y = x;
    let sum = 0;

    do {
        sum += y % 10;
        y = Math.floor(y / 10);
    } while(y > 0);

    // return x % sum ? false : true;
    // 조건문은 이미 true/false로 나와서 삼항 조건 연산자 필요 없음
    return !(x % sum);
}