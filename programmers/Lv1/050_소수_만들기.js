// https://velog.io/@devjade/JavaScript%EB%A1%9C-%EC%88%9C%EC%97%B4%EA%B3%BC-%EC%A1%B0%ED%95%A9-%EC%95%8C%EA%B3%A0%EB%A6%AC%EC%A6%98-%EA%B5%AC%ED%98%84%ED%95%98%EA%B8%B0
function solution(nums) {
    let count = 0;

    function isPrimeNum(n) {
        let n_sqrt = Math.sqrt(n);
        for (let i = 2; i <= n_sqrt; ++i) {
            if (n % i === 0) {
                return false;
            }
        }

        return true;
    }

    const getCombinations = function (arr, selectNumber) {
        const results = [];
        if (selectNumber === 1) return arr.map((el) => [el]);
        // n개중에서 1개 선택할 때(nC1), 바로 모든 배열의 원소 return

        arr.forEach((fixed, index, origin) => {
            const rest = origin.slice(index + 1);
            // 해당하는 fixed를 제외한 나머지 뒤
            const combinations = getCombinations(rest, selectNumber - 1);
            // 나머지에 대해서 조합을 구한다.
            const attached = combinations.map((el) => [fixed, ...el]);
            //  돌아온 조합에 떼 놓은(fixed) 값 붙이기
            results.push(...attached);
            // 배열 spread syntax 로 모두다 push
        });

        return results; // 결과 담긴 results return
    }

    getCombinations(nums, 3).forEach((combi) => {
        const sum = combi.reduce((acc, cur) => acc + cur, 0);
        count += isPrimeNum(sum);
    });

    return count;
}
