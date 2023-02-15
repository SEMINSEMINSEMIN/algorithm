function solution(arr) {
    const result = [];
    let prev;

    for (const e of arr) {
        if (prev !== e) {
            prev = e;
            result.push(e);
        }
    }

    return result;
}

// 다른 사람 풀이: filter 이용
function solution(arr)
{
    return arr.filter((val,index) => val != arr[index+1]);
}
