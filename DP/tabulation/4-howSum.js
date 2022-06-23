const howSum = (target, numbers) => {
  const table = Array(target + 1).fill(null);
  table[0] = [];
  for (let i = 0; i <= target; i++) {
    if (table[i] !== null) {
      for (let num of numbers) {
        if (table[i + num] !== undefined) {
          table[i + num] = [...table[i], num];
        }
      }
    }
  }
  console.log(table);
  return table[target];
};

console.log(howSum(7, [3, 4, 5]));
