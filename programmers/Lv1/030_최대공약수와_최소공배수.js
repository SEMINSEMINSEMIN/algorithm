// 내 풀이
function solution(n, m) {
    const divisor1 = {};
    const divisor2 = {};
    const intersection = [];

    const getDivisors = (target, output) => {
        for (let i = 1; i < Math.sqrt(target); i++) {
            if (!(target % i)) {
                output[i] = 1;
                output[target / i] = 1;
            };
        }
    };

    getDivisors(n, divisor1);
    getDivisors(m, divisor2);

    for (const e in divisor1) {
        if (divisor2[e]) {
            intersection.push(parseInt(e));
        }
    }

    const lcm = Math.max(...intersection);
    // https://luran.me/275
    const gcd = (n * m) / lcm;

    return [lcm, gcd];
}

// 다른 사람 풀이
function gcdlcm(a, b) {
    var r;
    for(var ab= a*b;r = a % b;a = b, b = r){
    }
    return [b, ab/b];
}

gcdlcm(2, 5);