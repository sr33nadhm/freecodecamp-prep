//

var obj = {
  name: "Hello",
  display: function () {
    console.log(this.name);
  },
};

var obj2 = {
  name: "Hello",
  display: () => {
    console.log(this.name);
  },
};

var obj1 = {
  name: "World",
};

obj2.display.call(obj1);
