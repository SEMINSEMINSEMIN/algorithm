// 형변환, 0은 if에 조건으로 들어가면 false로 처리되는 거 등등 주의하기!
function solution(s) {
    let result = "";
    const lookUp = {
        zero: 0,
        one: 1,
        two: 2,
        three: 3,
        four: 4,
        five: 5,
        six: 6,
        seven: 7,
        eight: 8,
        nine: 9,
    };
    let key = "";

    for (const e of s) {
        if (!isNaN(parseInt(e))) {
            result += e;
            continue;
        }

        key += e;
        const toNum = lookUp[key];

        if (toNum !== undefined) {
            result += toNum;
            key = "";
        } else continue;
    }

    return +result;
}

// "one4seveneight"	1478
// 다른 사람 풀이, join과 split 활용
function solution(s) {
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    var answer = s;

    for(let i=0; i< numbers.length; i++) {
        let arr = answer.split(numbers[i]);
        answer = arr.join(i);
    }

    return Number(answer);
}