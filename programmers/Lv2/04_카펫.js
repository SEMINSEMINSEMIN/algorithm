// https://seminkang.notion.site/dec2d7230d9b4a09992e1a07b37f4313?pvs=4

const getDivisors = (num) => {
  const divisors = [];

  for (let i = 1; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      divisors.push([num / i, i]);
    }
  }

  return divisors;
};

function solution(brown, yellow) {
  const getBrownWidth = (yellowWidth) => yellowWidth + 2;
  const getBrownHeight = (yellowHeight) => yellowHeight + 2;
  const getBrownTotal = (brownWidth, brownHeight) =>
    (brownWidth + brownHeight) * 2 - 4;

  const yellowCases = getDivisors(yellow);

  for (const e of yellowCases) {
    const [width, height] = e;
    const brownWidth = getBrownWidth(width);
    const brownHeight = getBrownHeight(height);
    const brownTotal = getBrownTotal(brownWidth, brownHeight);

    if (brownTotal === brown) return [brownWidth, brownHeight];
  }
}
