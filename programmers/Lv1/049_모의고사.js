function solution(answers) {
    var answer = [];
    const pattern = [[1, 2, 3, 4, 5], [2, 1, 2, 3, 2, 4, 2, 5], [3, 3, 1, 1, 2, 2, 4, 4, 5, 5]];
    const score = [0, 0, 0];
    
    for (let i = 0; i < answers.length; i++) {
        const val = answers[i];
        score[0] += pattern[0][i % pattern[0].length] === val;
        score[1] += pattern[1][i % pattern[1].length] === val;
        score[2] += pattern[2][i % pattern[2].length] === val;
    }

    const max = Math.max(...score);

    score.forEach((e,i) => {
        e === max && answer.push(i + 1);
    });

    return answer;
}