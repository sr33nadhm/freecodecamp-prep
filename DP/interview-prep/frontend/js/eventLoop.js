// Event loop and presedence
console.log("a");
// set timeout loads only after everything ran
setTimeout(() => console.log("Set"), 0);
Promise.resolve(() => console.log("Pro")).then((res) => {
  res();
  console.log("mise");
});
console.log("b");
