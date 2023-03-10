function solution(t, p) {
    let result = 0;
    let position = 0;

    while (position <= t.length - p.length) {
        const sliced = t.slice(position, position + p.length);
        result += sliced <= p;
        position++;
    }

    return result;
}