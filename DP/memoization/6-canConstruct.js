const canConstruct = (target, words, memo = {}) => {
  if (target in memo) return memo[target];
  if (target === "") return true;

  for (let str of words) {
    if (target.startsWith(str)) {
      const rem = target.slice(str.length);
      const res = canConstruct(rem, words, memo);
      if (res === true) {
        memo[target] = true;
        return true;
      }
    }
  }

  memo[target] = false;
  return false;
};

console.log(canConstruct("abcdef", ["ab", "cd", "abc", "def", "abcd"]));

console.log(
  canConstruct(
    "eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
    ["e", "ee", "eee", "eeee", "eeeee", "eeeeee", "eeeeeeeeee"]
  )
);
