// 내 풀이
function solution(arr) {
    let min = Infinity;
    let minIndex;

    for (let i = 0; i < arr.length; i++) {
        const el = arr[i];
        if (el < min) {
            min = el;
            minIndex = i;
        }
    }

    arr.splice(minIndex, 1);
    return arr.length ? arr : [-1];
}

// 다른 사람 풀이
function solution(arr) {
    arr.splice(arr.indexOf(Math.min(...arr)),1);
    if(arr.length<1)return[-1];
    return arr;
}
