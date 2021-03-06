const express = require("express");
const bodyParser = require("body-parser");

// process.env.PORT is for heroku:
const port = process.env.PORT || 3030;

const app = express();

app.use(bodyParser.json());

// --------------------------------------
// users
const usersControl = require("./usersControl.js");

app.get("/users", usersControl.getUsers);

app.post("/user", usersControl.addUser);

app.delete("/user", usersControl.deleteUser);

app.put("/user", usersControl.updateUser);

// --------------------------------------
// products
const productsControl = require("./productsControl.js");

app.get("/products", productsControl.getProducts);

app.post("/product", productsControl.addProduct);

// --------------------------------------
app.listen(port, () => {
  console.log("server is up on port " + port);
});
