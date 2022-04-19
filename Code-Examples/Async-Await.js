// Async / Await Example
let storeIsOpen = true;

let shoesChoice = () => {
  return new Promise((resolve, reject) => {
    if (storeIsOpen) {
      resolve(
        setTimeout(() => {
          console.log("An employee appears!");
          console.log("- Which one would you choose?");
        }, 3000)
      );
    } else {
      reject(console.log("The Store is closed!"));
    }
  });
};

async function otherThingsAreHappening() {
  console.log("The customer walks in...");

  try {
    await shoesChoice();
    setTimeout(() => {
      console.log("I choose...");
      console.log("This one!");
    }, 8000);
  } catch (error) {
    console.log("Customer left...", error);
  }
}

otherThingsAreHappening();

console.log("People are talking to with each other...");
console.log("No one to help...");
