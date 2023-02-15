function solution(d, budget) {
    d.sort((a, b) => a - b);
    let len = d.length;
    let sum = d.reduce((acc, cur) => acc + cur, 0);

    while (sum > budget) {
        sum -= d.pop();
        len--;
    }

    return len;
}

// 다른 사람 풀이
function solution(d, budget) {
    return d.sort((a, b) => a - b).reduce((count, price) => {
        return count + ((budget -= price) >= 0);
    }, 0);
}