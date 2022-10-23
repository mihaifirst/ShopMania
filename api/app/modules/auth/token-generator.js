const jwt = require("jsonwebtoken");
const secretKey = "dnsjinoq12321eni1ew!#@!#321";

function generateToken(user) {
  return jwt.sign(
    {
      data: user,
      iat: new Date().getTime(),
      exp: new Date().setDate(new Date().getDate() + 2),
    },
    secretKey
  );
}

module.exports = { generateToken };
