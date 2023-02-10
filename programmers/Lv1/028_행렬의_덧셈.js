// 이중 배열밖에 생각 안 남
function solution(arr1, arr2) {
    const answer = [];

    for (const i in arr1) {
        const tmp = [];
        for (const j in arr1[i]) {
            tmp.push(arr1[i][j] + arr2[i][j]);
        }
        answer.push(tmp);
    }

    return answer;
}

// 다른 사람 풀이
function sumMatrix(A,B){
    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}
