const allSum = (target, numbers, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return [[]];
  if (target < 0) return null;

  const result = [];

  for (let num of numbers) {
    const rem = target - num;
    const ways = allSum(rem, numbers, memo);
    if (ways !== null) {
      const targetWays = ways.map((way) => [num, ...way]);
      result.push(...targetWays);
    }
  }
  memo[target] = result;
  return result;
};
console.log(allSum(8, [1, 4, 5]));
console.log(allSum(100, [1, 2, 5, 10]));
