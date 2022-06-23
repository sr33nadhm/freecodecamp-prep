const bestSum = (target, numbers) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        if (table[i + num] !== undefined) {
          const combination = [...table[i], num];
          if (
            table[i + num] === null ||
            table[i + num].length > combination.length
          ) {
            table[i + num] = combination;
          }
        }
      }
    }
  }
  console.table(table);
  return table[target];
};

console.log(bestSum(100, [25, 25, 25, 25]));
