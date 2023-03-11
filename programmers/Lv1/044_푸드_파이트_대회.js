function solution(food) {
    let answer = "";
    let left = "";

    for (let i = 1; i < food.length; i++) {
        if (food[i] >= 2) {
            const addStr = (i + "").repeat(Math.floor(food[i] / 2));
            left += addStr;
        }
    }

    answer += left + "0";

    for (let i = left.length - 1; i >= 0; i--) {
        answer += left[i];
    }

    return answer;
}

// 다른 사람 풀이
function solution(food) {
    let res = '';
    for (let i = 1; i < food.length; i++) {
        res += String(i).repeat(Math.floor(food[i]/2));
    }

    return res + '0' + [...res].reverse().join('');
}