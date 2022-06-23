const coinChangeTabulation = (target, coins) => {
  const table = Array(target + 1).fill(null);
  table[0] = 0;

  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let coin of coins) {
        const combination = table[Number(i + coin)];
        if (combination !== null && combination !== undefined) {
          table[Number(i + coin)] = Math.min(table[i] + 1, combination);
        } else if (combination !== undefined) {
          table[Number(i + coin)] = table[i] + 1;
        }
      }
    }
  }

  return table[target] === null ? -1 : table[target];
};

const coinChangeMemo = (target, coins, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === 0) return 0;
  if (target < 0) return -1;

  var combination = Number.MAX_VALUE;

  for (let coin of coins) {
    const rem = target - coin;
    const res = coinChangeMemo(rem, coins, memo);
    if (res >= 0) {
      combination = Math.min(combination, res + 1);
    }
  }
  memo[target] = combination > target ? -1 : combination;
  return memo[target];
};

console.log(coinChangeMemo(11, [1, 2, 5]));
console.log(coinChangeMemo(7, [1, 3, 4, 5]));
console.log(coinChangeMemo(300, [14, 7]));

console.log(coinChangeTabulation(11, [1, 2, 5]));
console.log(coinChangeTabulation(7, [1, 3, 4, 5]));
console.log(coinChangeTabulation(300, [14, 7]));
