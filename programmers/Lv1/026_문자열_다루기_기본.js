function solution(s) {
    const length = s.length;
    if (!(length === 4 || length === 6)) return false;
    const regex = /[0-9]/g;
    s = s.replaceAll(regex, "*");
    return s === "*".repeat(4) || s === "*".repeat(6);
}

// 정규표현식 다른 방법
function alpha_string46(s){
    var regex = /^\d{6}$|^\d{4}$/;
    return regex.test(s);
  }