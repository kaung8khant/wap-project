const jwt = require("jsonwebtoken");
const users = [
  {
    id: "0.13123123123",
    username: "sai",
    password: "sai123",
  },
];

class User {
  constructor(username, password) {
    this.username = username;
    this.password = password;
  }

  static login(username, password) {
    console.log(username, password);
    let user = users.find(
      (u) => u.username === username && u.password === password
    );
    if (user) {
      let token = jwt.sign({ username }, "saiprivatekey");
      return {
        username: user.username,
        token,
      };
    } else {
      throw new Error("Invalid username or passowrd");
    }
  }
}
module.exports = User;
