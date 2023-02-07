// 내 풀이
function solution(n) {
    // let result;

    for (let i = 2; i <= n - 1; i++) {
        if (!((n - 1) % i)) {
            // result = i;
            return i;
        }
    }

    // return result;
}

// 다른 사람 풀이
function solution(n, x = 1) {    
    while (x++) {
        if (n % x === 1) {
            return x;
        }
    }    
}