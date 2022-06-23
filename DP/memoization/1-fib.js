const fib = (n, memo = {}) => {
  if (n in memo) return memo[n];
  if (n == 1 || n == 2) return 1;
  memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
  return memo[n];
};

console.log(fib(50));
// 1 2 3 4 5 6 7  8
// 1 1 2 3 5 8 13 21
