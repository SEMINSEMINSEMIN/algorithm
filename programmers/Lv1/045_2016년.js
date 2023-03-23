// 내 풀이
function solution(a, b) {
    const lookUp = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
    const dayOfWeek = lookUp[new Date(`2016-${a}-${b}`).getDay()];
    return dayOfWeek;
}

// 리팩토링
// new Date("2016-5-24")
// Tue May 24 2016 00:00:00 GMT+0900 (한국 표준시)
// 메서드를 쓸거면 그 메서드에 대해 잘 알고 쓰자
function solution(a, b) {
    return new Date(`2016-${a}-${b}`).toString().slice(0, 3).toUpperCase();
}

function getDayName(a, b) {
    var answer = "";
    var MONTH = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    var WEEK = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
    var sum = 0;
    for (var i = 1; i < a; i++) {
        console.log(i - 1);
        sum += MONTH[i - 1];
    }
    answer = WEEK[(sum + b - 1) % 7];
    // 1월 1일은 금요일
    // 31,29,31,30,31,30,31,31,30,31,30,31

    return answer;
}
