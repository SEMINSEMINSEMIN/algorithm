function solution(phone_number) {
    let result = "";

    for (let i = 0; i < phone_number.length; i++) {
        result += i < phone_number.length - 4 ? "*" : phone_number[i];
    }

    return result;
}

// 다른 사람 풀이 - 1
function hide_numbers(s) {
    var result = "*".repeat(s.length - 4) + s.slice(-4);
    return result;
}

// 다른 사람 풀이 - 2
// https://elvanov.com/2388
// positive lookahead: X(?=Y), X if followed by Y
// \d: any digit character (0-9)
// {4}: Match 4 of the preceding token
function hide_numbers(s) {
    return s.replace(/\d(?=\d{4})/g, "*");
}
