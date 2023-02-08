function solution(numbers) {
    const total = (0 + 9) * 5;
    let cur = 0;
    const frequencyCounter = {};
    
    for (const e of numbers) {
        frequencyCounter[e] ? frequencyCounter[e] += 1 : frequencyCounter[e] = 1;
    }

    for (const key in frequencyCounter) {
        cur += +key;
    }

    return total - cur;
}

// 문제 조건 제대로 안 읽음
// numbers의 모든 원소는 서로 다르다!
// 내 코드는 굳이 쓸데없는 과정 하고 있었음..
function solution(numbers) {
    return 45 - numbers.reduce((cur, acc) => cur + acc, 0);
}