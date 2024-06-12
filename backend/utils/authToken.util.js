const jwt = require("jsonwebtoken");
const { secretToken, accessExpirationMinutes } = require("../config/config");

const generateToken = (userId, expires, type, secret = secretToken) => {
    const payload = {
    sub: userId,
    type: type,
    exp: expires
  };
  const jwtToken = jwt.sign(payload, secret);
  return jwtToken;
};

const generateAuthToken = async (user) => {
  const expires = Math.floor(Date.now() / 1000) + accessExpirationMinutes * 60;
  const accessToken = generateToken(user.id, expires, "ACCESS");
  return {
    access: {
      token: accessToken,
      expires: new Date(expires * 1000),
    },
  };
};

module.exports = generateAuthToken;
