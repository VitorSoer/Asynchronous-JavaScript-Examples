// Async / Await Example
let storeIsOpen = true;

let shoesChoice = () => {
  return new Promise((res, err) => {
    if (storeIsOpen) {
      res(
        setTimeout(() => {
          console.log("- Which one would you choose?");
        }, 2000)
      );
    } else {
      console.log("The Store is closed!");
    }
  });
};

async function otherThingsAreHappening() {
  console.log("The customer walks in...");

  await shoesChoice();

  setTimeout(() => {
    console.log("I choose...");
    console.log("This one!");
  }, 5000);
}

otherThingsAreHappening();

console.log("An employee appears!");
