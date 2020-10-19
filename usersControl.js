const users = require("./users.js");

exports.getUsers = (req, res) => {
  if (!Object.keys(users).length) {
    throw new Error("the users list is empty");
  }
  res.send(users);
};

exports.addUser = (req, res) => {
  const newUser = req.body;

  if (!newUser.name || !newUser.age || !newUser.id) {
    throw new Error("the data is invalid");
  }

  for (let user in users) {
    if (parseInt(users[user].id) === parseInt(newUser.id)) {
      throw new Error("the user id is taken");
    }
  }

  users["user" + newUser.id] = newUser;

  return res.send(users);
};

exports.deleteUser = (req, res) => {
  const userIndex = req.query.id;
  if (!userIndex || !users["user" + userIndex]) {
    throw new Error("the id is invalid");
  }
  delete users["user" + userIndex];
  res.send(users);
};

exports.updateUser = (req, res) => {
  const newUser = req.body;
  const userId = req.query.id;

  if (!newUser.name || !newUser.age || !newUser.id) {
    throw new Error("the data is invalid");
  }

  if (!users["user" + userId] || !users["user" + newUser.id]) {
    throw new Error("the id is invalid");
  }

  users["user" + userId] = newUser;
  return res.send(users);
};
