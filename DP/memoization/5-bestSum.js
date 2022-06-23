const bestSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [];
  if (target < 0) return null;

  let shortestCombo = null;

  for (let num of numbers) {
    const rem = target - num;
    const res = bestSum(rem, numbers, memo);
    if (res !== null) {
      const combination = [...res, num];
      if (shortestCombo === null || combination.length < shortestCombo.length) {
        shortestCombo = combination;
      }
    }
  }
  memo[target] = shortestCombo;
  return shortestCombo;
};

console.log(bestSum(8, [1, 4, 5]));
console.log(bestSum(100, [1, 2, 5, 25]));
