const gridTraveller = (m, n, memo = {}) => {
  let key = m + "-" + n;
  if (key in memo) return memo[key];
  if (m == 0 || n == 0) return 0;
  if (m == 1 && n == 1) return 1;
  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveller(13, 12));
