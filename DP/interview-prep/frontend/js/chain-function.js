const calc = {
  total: 0,
  add: function (a) {
    this.total += a;
    return this;
  },
  multiply: function (a) {
    this.total *= a;
    return this;
  },
  subtract: function (a) {
    this.total -= a;
    return this;
  },
};

console.log(calc.add(10).total);
