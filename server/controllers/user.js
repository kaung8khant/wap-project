const User = require("../models/user");
const path = require("path");

const login = (req, res, next) => {
  let body = req.body;
  console.log(req);
  res.status(200).json(User.login(body.username, body.password));
};

module.exports = {
  login,
};
