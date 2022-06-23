const canSum = (x, arr, memo = {}) => {
  if (x in memo) return memo[x];
  if (x == 0) return true;
  if (x < 0) return false;
  for (let i of arr) {
    if (canSum(x - i, arr, memo) === true) {
      memo[x] = true;
      return true;
    }
  }
  memo[x] = false;
  return false;
};

console.log(canSum(300, [14, 7]));
