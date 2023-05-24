const bcrypt = require("bcrypt");
const Joi = require("joi");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");

const secret_key = "dummy_private_key";
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      minlength: 3,
      maxlength: 256,
      required: true,
      trim: true,
    },
    firstname: {
      type: String,
      minlength: 3,
      maxlength: 256,
      required: true,
      trim: true,
    },
    lastname: {
      type: String,
      minlength: 3,
      maxlength: 256,
      required: true,
      trim: true,
    },
    profileImage: {
      type: String,
      maxlength: 1024,
      required: false,
    },
    password: {
      type: String,
      minlength: 7,
      maxlength: 1024,
      required: true,
    },
    lastLogin: {
      type: Date,
    },
  },
  { timestamps: true }
);

//generates a json web token
userSchema.methods.generateToken = function () {
  return jwt.sign({ _id: this._id }, secret_key);
};

//Generates a hash for user password
userSchema.methods.hashPassword = async function (password) {
  const salt = await bcrypt.genSalt(12);
  const hashedPassword = await bcrypt.hash(password, salt);

  return hashedPassword;
};

//compile the schema into a model
const User = mongoose.model("User", userSchema);

//validates user data provided for registration
const validateRegistration = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(256).email().required(),
    firstname: Joi.string().min(3).max(256).required(),
    lastname: Joi.string().min(3).max(256).required(),
    profileImage: Joi.string().max(1024).optional(),
    password: Joi.string().min(7).max(256).required(),
    confirmPassword: Joi.string().min(7).max(256).required(),
  });

  return schema.validate(user);
};

//validates validated login data
const validateLogin = (user) => {
  const schema = Joi.object({
    username: Joi.string().min(3).max(256).required(),
    password: Joi.string().min(7).max(256).required(),
  });

  return schema.validate(user);
};

const validateUpdate = (user) => {
  const schema = Joi.object({
    firstname: Joi.string().min(3).max(256).required(),
    lastname: Joi.string().min(3).max(256).required(),
    profileImage: Joi.string().max(1024).optional(),
  });

  return schema.validate(user);
};


//validates request body on password update
const validatePasswordUpadate = (user) => {
  const schema = Joi.object({
    password: Joi.string().min(7).max(256).required(),
    confirmPassword: Joi.string().min(7).max(256).required(),
  });

  return schema.validate(user);
};

//module exports
module.exports.validateLogin = validateLogin;
module.exports.validateUpdate = validateUpdate;
module.exports.validatePasswordUpadate = validatePasswordUpadate;
module.exports.validateRegistration = validateRegistration;
module.exports.User = User;
