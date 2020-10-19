const products = require("./products.js");

exports.getProducts = (req, res) => {
  if (!Object.keys(products).length) {
    throw new Error("the products list is empty");
  }
  res.send(products);
};

exports.addProduct = (req, res) => {
  const newProduct = req.body;

  if (!newProduct.name || !newProduct.id) {
    throw new Error("the data is invalid");
  }

  for (let product in products) {
    if (parseInt(products[product].id) === parseInt(newProduct.id)) {
      throw new Error("the Product id is taken");
    }
  }

  products["product" + newProduct.id] = newProduct;

  return res.send(products);
};
