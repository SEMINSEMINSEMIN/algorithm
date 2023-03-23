function solution(s) {
    const answer = [];
    const lookUp = {};
    
    for (let i = 0; i < s.length; i++) {
        const val = s[i];

        lookUp[val] !== undefined ? answer.push(i - lookUp[val]) : answer.push(-1);
        lookUp[val] = i;
    }

    return answer;
}

// 다른 사람 풀이
function solution(s) {
    const hash={};

    return [...s].map((v,i)=>{
        let result = hash[v] !== undefined ? i - hash[v] : -1;
        hash[v] = i;
        return result;
    });
}