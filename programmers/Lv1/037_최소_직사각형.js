// https://seminkang.notion.site/Lv1-59b0798e47ed4f3b84ceb5d9ff54c43c

function solution(sizes) {
    let max1 = max2 = -Infinity;

    sizes.forEach(e => {
        // let eMax, eMin;
        // Array.prototype.reverse 시간 복잡도: O(n), 이로 인해 시간이 어떤거는 32.xx ms 이런식으로 나옴
        // [eMax, eMin] = (e[0] - e[1] >= 0) ? e : e.reverse();
        const [eMax, eMin] = (e[0] - e[1] >= 0) ? e : [e[1], e[0]];
        if (eMax > max1) max1 = eMax;
        if (eMin > max2) max2 = eMin;
    });

    return max1 * max2;
}

// 다른 사람 풀이
function solution(sizes) {
    const rotated = sizes.map(([w, h]) => w < h ? [h, w] : [w, h]);

    let maxSize = [0, 0];
    rotated.forEach(([w, h]) => {
        if (w > maxSize[0]) maxSize[0] = w;
        if (h > maxSize[1]) maxSize[1] = h;
    })
    return maxSize[0]*maxSize[1];
}