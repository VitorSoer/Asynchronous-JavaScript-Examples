//Synchronous Example

console.log("I");
console.log("Drink");
console.log("Coffee");
console.log("With Milk");
console.log("And Sugar");

//Asynchronous Example

setTimeout(() => {
  console.log("Second One");
}, 1000);

setTimeout(() => {
  console.log("Third One");
}, 2000);

console.log("First One");
