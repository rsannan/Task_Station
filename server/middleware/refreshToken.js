const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const config = require("config");
const moment = require("moment");

const secret_key = "dummy_private_key";
module.exports = async (req, res, next) => {
  //ensure token is provided
  const token = req.headers["x-auth-token"];
  if (!token)
    return res
      .status(401)
      .send({ message: "Access denied. No token provided." });

  try {
    //decode token
    const decoded = jwt.verify(token, secret_key);

    let issuedAt = decoded.iat;

    //convert to microseconds
    issuedAt *= 1000;

    //calculate the time the token has elapsed
    const timeDifference = moment(Date.now()).diff(issuedAt, "minutes");

    //return if the time difference is more than 5 minutes
    if (timeDifference > config.get("refreshTokenTimeAllowed"))
      return res.status(403).send({ message: "Please sign in to continue." });

    //look up user with decoded token
    const user = await User.findById(decoded._id);

    //Add user to the request object
    req.user = user;

    //pass control to the next function
    next();
  } catch (err) {
    //return a 400 message if token token is not valid
    return res.status(400).send({ message: "Invalid token" });
  }
};
