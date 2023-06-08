function isPrime(num) {
  if (num <= 1) return false;

  if (num === 2) return true;

  for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

const getPermutations = function (arr, selectNumber) {
  const results = [];
  if (selectNumber === 1) return arr;

  arr.forEach((fixed, index, origin) => {
    const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
    const permutations = getPermutations(rest, selectNumber - 1);
    const attached = permutations.map((el) => fixed + el);
    results.push(...attached);
  });

  return results;
};

function solution(numbers) {
  const numbersToArray = numbers.split("");
  let answer = 0;
  let lookUpArr = [];

  let r = 1;

  while (r <= numbers.length) {
    lookUpArr = lookUpArr.concat(getPermutations(numbersToArray, r));
    r++;
  }

  // console.log(lookUpArr);
  lookUpArr = lookUpArr.map((e) => parseInt(e, 10));
  lookUpArr = new Set(lookUpArr);

  lookUpArr.forEach((num) => {
    // console.log(num);
    answer += isPrime(num);
  });

  return answer;
}

// 이전 풀이
// function isPrime(num) {
//   if (num <= 1) {
//     return false;
//   }

//   if (num === 2) {
//     return true;
//   }

//   for (let i = 2; i <= Math.floor(Math.sqrt(num)); i++) {
//     if (num % i === 0) {
//       return false;
//     }
//   }

//   return true;
// }

// const getPermutations = function (arr, selectNumber) {
//   const results = [];
//   if (selectNumber === 1) return arr.map((el) => [el]);
//   // n개중에서 1개 선택할 때(nP1), 바로 모든 배열의 원소 return. 1개선택이므로 순서가 의미없음.

//   arr.forEach((fixed, index, origin) => {
//     const rest = [...origin.slice(0, index), ...origin.slice(index + 1)];
//     // 해당하는 fixed를 제외한 나머지 배열
//     const permutations = getPermutations(rest, selectNumber - 1);
//     // 나머지에 대해서 순열을 구한다.
//     const attached = permutations.map((el) => [fixed, ...el]);
//     //  돌아온 순열에 떼 놓은(fixed) 값 붙이기
//     results.push(...attached);
//     // 배열 spread syntax 로 모두다 push
//   });

//   return results; // 결과 담긴 results return
// };

// // 이렇게 하면 안 되는 이유: 포인터를 얼마나 잡아야 할지 모르니까
// // 나는 2개만 잡음
// function solution(numbers) {
//   const numbersToArray = numbers.split("");
//   let answer = [];

//   let r = 1;

//   while (r <= numbers.length) {
//     answer.push(getPermutations(numbersToArray, r));
//     r++;
//   }

//   answer = answer.filter((e) => {
//     const num = parseInt(e, 10);
//     return isPrime(num);
//   });

//   const uniquePrimes = new Set(answer);

//   console.log(uniquePrimes);
//   return uniquePrimes.size || 0;
// }

// console.log(solution("17"));
