function solution(N, stages) {
    const frequency = {};
    const failRates = [];
    let userCount = stages.length;

    for (const e of stages) {
        frequency[e] = (frequency[e] || 0) + 1;
    }

    // console.log(frequency);

    for (let j = 1; j <= N; j++) {
        const failNum = frequency[j] || 0;
        userCount -= frequency[j - 1] || 0;
        const failRate = userCount === 0 ? 0 : failNum / userCount;
        // console.log(`${j}번 스테이지 실패율: ${failNum} / ${userCount}`);
        failRates.push([j, failRate]);
    }

    failRates.sort((a, b) => {
        const diff = b[1] - a[1];
        if (diff > 0) return 1;
        if (diff < 0) return -1;
        if (diff === 0) return a[0] - b[0];
    });

    return failRates.map(e => e[0]);
}
