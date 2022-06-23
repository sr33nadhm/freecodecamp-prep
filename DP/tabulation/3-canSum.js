const canSum = (target, numbers) => {
  const table = Array(target + 1).fill(false);
  table[0] = true;
  for (let i = 0; i <= target; i++) {
    if (table[i] === true) {
      for (let num of numbers) {
        if (table[i + num] !== undefined) {
          table[i + num] = true;
        }
      }
    }
  }
  console.table(table);
  return table[target];
};

console.log(canSum(7, [5, 4, 2]));
