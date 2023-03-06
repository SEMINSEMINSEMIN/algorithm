function solution(array, commands) {
    const answer = [];

    for (const e of commands) {
        const sliced = array.slice(e[0] - 1, e[1]);
        sliced.sort((a, b) => a - b);
        answer.push(sliced[e[2] - 1]);
    }

    return answer;
}

// 다른 사람 풀이
function solution(array, commands) {
    var answer = [];

    answer = commands.map(a=>{
        return array.slice(a[0]-1,a[1]).sort((b,c)=>b-c)[a[2]-1];
    })
    return answer;
}