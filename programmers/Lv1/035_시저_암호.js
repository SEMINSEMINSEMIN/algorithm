function solution(s, n) {
    const indexLookUp = { "a": 0, "b": 1, "c": 2, "d": 3, "e": 4, "f": 5, "g": 6, "h": 7, "i": 8, "j": 9, "k": 10, "l": 11, "m": 12, "n": 13, "o": 14, "p": 15, "q": 16, "r": 17, "s": 18, "t": 19, "u": 20, "v": 21, "w": 22, "x": 23, "y": 24, "z": 25 };
    const stringLookUp = [ "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" ];
    let answer = "";

    for (const e of s) {
        if (e === " ") {
            answer += e;
            continue;
        }

        let index = indexLookUp[e.toLowerCase()] + n;
        while (index > 25) {
            index = index % 26;
        }
        
        const strFound = stringLookUp[index];
        answer += /[a-z]/.test(e) ? strFound : strFound.toUpperCase();
    }

    return answer;
}

// 다른 사람 코드
// n은 1 이상, 25 이하인 자연수!!
// 문제 조건 잘 읽기
function solution(s, n) {
    var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lower = "abcdefghijklmnopqrstuvwxyz";
    var answer= '';

    for(var i =0; i <s.length; i++){
        var text = s[i];
        if(text == ' ') {
            answer += ' '; 
            continue;
        }
        var textArr = upper.includes(text) ? upper : lower;
        var index = textArr.indexOf(text)+n;
        if(index >= textArr.length) index -= textArr.length;
        answer += textArr[index];
    }
    return answer;
}