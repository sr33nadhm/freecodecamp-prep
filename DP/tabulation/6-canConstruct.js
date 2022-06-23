const canConstruct = (target, words) => {
  const len = target.length;
  const table = Array(len + 1).fill(false);
  table[0] = true;

  for (let i = 0; i <= len; i++) {
    if (table[i] === true) {
      for (let word of words) {
        if (target.slice(i, i + word.length) === word) {
          table[i + word.length] = true;
        }
      }
    }
  }

  console.table(table);
  return table[len];
};

console.log(canConstruct("abcdef", ["ab", "abc", "cd", "def", "abcd"]));
