require("dotenv").config();

var jwt = require("jsonwebtoken");
const User = require("../Models/User.model");

const newToken = (user) => {
  return jwt.sign({ user: user }, `${process.env.JWT_SECRET_KEY}`, {
    expiresIn: 60 * 60 * 3,
  });
};

const registerUser = async (req, res) => {
  try {
    let user = await User.findOne({ email: req.body.email });

    if (user)
      return res
        .status(400)
        .send({ message: "User with that mail already exists" });

    user = await User.create(req.body);
    const token = newToken(user);

    return res.status(201).send({ user, token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

const login = async (req, res) => {
  try {
    // first we will find the user with the email
    let user = await User.findOne({ email: req.body.email }).select(
      "+password"
    );

    if (!user.roles.includes("admin")) {
      return res.status(400).send({ message: "Permission denied" });
    }

    // if user is not found then throw an error 400 Bad Request
    if (!user)
      return res
        .status(400)
        .send({ message: "Either Email or Password is incorrect" });

    // if user found then try to match the password provided with the password in db
    const match = user.checkPassword(req.body.password);

    // if not match then throw an error 400 Bad Request
    if (!match)
      return res
        .status(400)
        .send({ message: "Either Email or Password is incorrect" });

    // stateful => session on the server => cookie on the browser
    // stateless => nothing stored on the server

    // if password also matches then create a token
    const token = newToken(user);

    // return the token and the user details
    return res.status(201).send({ user, token });
  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};

module.exports = { registerUser, login };
