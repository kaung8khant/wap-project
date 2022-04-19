const userTokenValidation = (req, res, next) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader != "undefined") {
    const bearer = bearerHeader.split(" ")[1];
    req.token = bearer;
  } else {
    throw new error("unauthorized");
  }
  next();
};

module.exports = {
  userTokenValidation,
};
