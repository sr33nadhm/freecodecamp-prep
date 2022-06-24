/*
 *    Currying is about decomposing a function taking multiple arguments
 *   into numerous functions with single arguments.
 */

function add(a) {
  return function (b) {
    if (b) return add(a + b);
    return a;
  };
}

console.log(add(5)(2)(4)(8)());
