const bcrypt = require("bcrypt");
const {
  User,
  validateRegistration,
  validateLogin,
  validateUpdate,
  validatePasswordUpadate,
} = require("../models/User");

const register = async (req, res) => {
  //Validate the request body
  const { error } = validateRegistration(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //Ensure passwords match
  if (req.body.password !== req.body.confirmPassword)
    return res.status(400).send({ message: "Passwords to donnot match." });

  //Ensure the user is not in the database
  let user = await User.findOne({ username: req.body.username });
  if (user)
    return res
      .status(400)
      .send({ message: "The given username is already taken." });

  //Create a new user
  user = new User({
    username: req.body.username,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    profileImage: req.body.profileImage,
  });

  //Hash the password
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  user.password = hashedPassword;

  //save to the database
  await user.save();

  //Remove sensitive data
  user.password = undefined;

  //return the user to the client
  res.send({ user });
};

const login = async (req, res) => {
  //validate the request body
  const { error } = validateLogin(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //look up the user
  const user = await User.findOne({ username: req.body.username });
  if (!user)
    return res.status(400).send({ message: "Invalid username or password" });

  //verify password
  const passwordValid = await bcrypt.compare(req.body.password, user.password);
  if (!passwordValid)
    return res.status(400).send({ message: "Invalid username or password." });

  //generate token
  const token = user.generateToken();

  //set login time
  user.lastLogin = Date.now();
  await user.save();

  //return response
  res.send({ lastLogin: user.lastLogin, token: token });
};

const update = async (req, res) => {
  //validate input
  const { error } = validateUpdate(req.body);
  if (error) return res.status(400).send({ message: error.details[0].message });

  //look up and update user
  const user = await User.findByIdAndUpdate(
    req.user._id,
    {
      $set: {
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        profilePicture: req.body.profilePicture,
      },
    },
    { new: true }
  );

  //return 404 if user does not exist
  if (!user) return res.status(404).send({ message: "User not found." });

  //return response
  res.send({ message: "Update was successful.", user });
};

const updatePassword = async (req, res) => {
  //validate request body
  const { error } = validatePasswordUpadate();
  if (error) return res.status(400).send({ message: error.details[0].message });

  //ensure passwords match
  if (req.body.password !== req.body.confirmPassword)
    return res.status(400).send({ message: "Passwords donnot match" });

  //look up user
  const user = await User.findById(req.user._id);
  if (!user) return res.status(404).send({ message: "User not found." });

  //hash and update password
  user.password = await user.hashPassword(req.body.password);

  //save changes
  await user.save();

  //remove sensitive data
  user.password = undefined;

  //return response
  res.send({ message: "Password was updated.", user });
};

const getUserInfo = async (req, res) => {
  const user = await User.findById(req.user._id);

  user.password = undefined;

  res.send({ user });
};

module.exports.login = login;
module.exports.update = update;
module.exports.getUserInfo = getUserInfo;
module.exports.updatePassword = updatePassword;
module.exports.register = register;
