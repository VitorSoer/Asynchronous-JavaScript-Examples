// Promise Example

let stock = {
  Shoes: ["Air Max 90", "Jordan", "Puma Suede", "Vans"],
};

let isStoreOpen = true;

let order = (time, work) => {
  return new Promise((resolve, reject) => {
    if (isStoreOpen) {
      setTimeout(() => {
        resolve(work());
      }, time);
    } else {
      reject(console.log("Our Store is closed..."));
    }
  });
};

order(1000, () => console.log(`${stock.Shoes[3]} was selected!`))
  .then(() => {
    order(2000, () => console.log("Here it is, your new shoes!!!"));
    console.log("Processing your order...");
  })
  .catch(() => console.log("Customer left."))
  .finally(order(3000, () => console.log("That's All.")));
