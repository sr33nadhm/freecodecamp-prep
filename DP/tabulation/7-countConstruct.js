const countConstruct = (target, words) => {
  const len = target.length;
  const table = Array(len + 1).fill(0);
  table[0] = 1;

  for (let i = 0; i <= len; i++) {
    if (table[i] > 0) {
      for (let word of words) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] += table[i];
        }
      }
    }
  }

  console.table(table);
  return table[len];
};

console.log(countConstruct("purple", ["purp", "p", "ur", "le", "purpl"]));
