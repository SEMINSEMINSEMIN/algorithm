function solution(price, money, count) {
    const fee = price * ((1 + count) / 2 * count);
    const sub = money - fee;
    return sub < 0 ? Math.abs(sub) : 0;
}