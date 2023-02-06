// 내 코드
function solution(s) {
    let count = 0;
    for (const e of s.toLowerCase()) {
        if (e === "p") {
            count++;
        } else if (e === "y") {
            count--;
        } else continue;
    }
    return count === 0 ? true : false;
}

// 다른 사람 풀이
function numPY(s) {
    return (
        s.toUpperCase().split("P").length === s.toUpperCase().split("Y").length
    );
}

/*
"pPoooyY".toUpperCase().split("P")
(3) ['', '', 'OOOYY']

"pPoooyY".toUpperCase().split("Y")
(3) ['PPOOO', '', '']
*/