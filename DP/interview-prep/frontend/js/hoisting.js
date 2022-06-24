// Ability to access a varaible before even initialized

abc();
//def();
console.log(abc);
//console.log(def);
console.log(x);

var x = 7;

function abc() {
  console.log("Hello");
}

const def = () => {
  console.log("World");
};
