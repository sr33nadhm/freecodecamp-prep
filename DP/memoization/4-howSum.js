const howSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return [];
  if (targetSum < 0) return null;

  for (let num of numbers) {
    const rem = targetSum - num;
    const res = howSum(rem, numbers, memo);
    if (res !== null) {
      memo[targetSum] = [...res, num];
      return memo[targetSum];
    }
  }
  memo[targetSum] = null;
  return null;
};

//console.log(howSum(7, [2, 4]));
console.log(howSum(300, [7, 14]));
