// 내 풀이
function solution(a, b) {
    if (a === b) return a;
    let result = 0;

    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) {
        result += i;
    }

    return result;
}

// 다른 사람 풀이: 등차수열의 합 이용
// https://ko.wikihow.com/%EB%93%B1%EC%B0%A8%EC%88%98%EC%97%B4%EC%9D%98-%ED%95%A9%EC%9D%84-%EA%B5%AC%ED%95%98%EB%8A%94-%EB%B0%A9%EB%B2%95
function adder(a, b){
    return (a+b)*(Math.abs(b-a)+1)/2;
}
