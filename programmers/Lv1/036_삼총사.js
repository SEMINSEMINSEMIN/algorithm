// 내 풀이
// https://www.notion.so/seminkang/Lv1-6bb076a687d04b8c9aae51f79876a073?pvs=4
function solution(number) {
    const len = number.length;
    let count = 0;

    let locations = [0, 1, 2];

    while (locations[0] <= len - 3) {
        let [first, second, third] = locations;
        const sum = number[first] + number[second] + number[third];
        !sum && count++;

        if (third === len - 1 && second === len - 2) {
            first++;
            second = first + 1;
            third = second + 1;
        } else if (third === len - 1 && second !== len -2) {
            second++;
            third = second + 1;
        } else {
            third++;
        }

        locations = [first, second, third];
    }

    return count;
}

// 다른 사람 풀이: 재귀, 조합
function solution(number) {
    let result = 0;

    const combination = (current, start) => {
        if (current.length === 3) {
            result += current.reduce((acc, cur) => acc + cur, 0) === 0 ? 1 : 0;
            return;
        }

        for (let i = start; i < number.length; i++) {
            combination([...current, number[i]], i + 1);
        }
    }
    combination([], 0);
    return result;
}