// https://seminkang.notion.site/59b7ec08b58b420881a907f270316b20?pvs=4

function solution(progresses, speeds) {
  const answer = [];
  const deploydates = [];

  for (let i = 0; i < progresses.length; i++) {
    const date = Math.ceil((100 - progresses[i]) / speeds[i]);
    deploydates.push(date);
  }

  let compareBase = deploydates[0];
  let answerIndex = 0;

  for (const e of deploydates) {
    if (compareBase >= e) {
      answer[answerIndex] = (answer[answerIndex] || 0) + 1;
    } else {
      answer.push(1);
      answerIndex++;
      compareBase = e;
    }
  }

  return answer;
}

console.log(solution([90, 90, 90, 90], [30, 1, 1, 1]));