function solution(numbers) {
    const result = [];
    const collected = {};

    let one = 0;
    let two = 1;

    while (one <= numbers.length - 2) {
        const sum = numbers[one] + numbers[two];
        if (!collected[sum]) collected[sum] = 1;

        if (two === numbers.length - 1) {
            one++;
            two = one + 1;
        } else if (two < numbers.length - 1) {
            two++;
        }
    }

    for (const key in collected) {
        result.push(+key);
    }

    return result.sort((a, b) => a - b);
}