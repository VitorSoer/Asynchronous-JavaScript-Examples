// Callback Example

let stock = {
  Shoes: ["Air Max 90", "Jordan", "Puma Suede", "Vans"],
};

let order = (shoesBrandName, callProduction) => {
  setTimeout(() => {
    console.log(`${stock.Shoes[shoesBrandName]} was selected! `);
    callProduction();
  }, 1000);
  console.log("Welcome to our Store!");
};

let production = () => {
  setTimeout(() => {
    console.log("Here it is, your new shoes!!!");
  }, 2000);
  console.log("Processing your order...");
};

order(0, production);
