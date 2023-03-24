// 내 코드: 정확성은 되지만, 효율성 개판
function solution(n) {
    let answer = 1; // n이 2이상이니까
    const oddPrimeNum = [3, 5, 7];
    for (let i = 3; i <= n; i += 2) {
        if (i <= 7) {
            answer++;
        } else {
            for (let j = 0; j < oddPrimeNum.length; j++) {
                if (i % oddPrimeNum[j] === 0) break;
                if (j === oddPrimeNum.length - 1) {
                    answer++;
                    oddPrimeNum.push(i);
                }
            } 
        }
    }

    return answer;
}

// 다른 사람 풀이 효율성 통과하게 일단 풀었음.....
function solution(n) {
    var answer = 1;

    function isPrimeNum(n) {
      let n_sqrt = Math.sqrt(n);
      for (let i = 2; i <= n_sqrt; ++i) {
        if (n % i === 0) {
          return false;
        }
      }

      return true;
    }

    for (let i = 3; i <= n; i += 2) {
      if (i === 3 || i === 5 || i === 7) {
        answer++;
        continue;
      }

      if ((i !== 3) && (i % 3 === 0) || (i !== 5) && (i % 5 === 0) || (i !== 7) && (i % 7 === 0)) {
         continue;
      }
      if (isPrimeNum(i)) {
        answer++;
      }
    }

    return answer;
}

// 제일 좋은 방법
function solution(n) {
    const s = new Set();
    for(let i=1; i<=n; i+=2){
        s.add(i);
    }
    s.delete(1);
    s.add(2);
    
    for(let j = 3; j <= Math.sqrt(n); j += 2){
        for(let k = j * 2; k <= n ; k += j){    
            s.delete(k);
        }
    }
    return s.size;
}