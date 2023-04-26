const express = require("express");

const {
  register,
  login,
  update,
  updatePassword,
  getUserInfo,
  deleteUser,
} = require("../controllers/users.controller");
const auth = require("../middleware/auth");
const refreshToken = require("../middleware/refreshToken");

const router = express.Router();

router.get("/me", [auth], getUserInfo);
router.post("/register", register);
router.post("/login", login);
router.patch("/update", [auth], update);
router.patch("/update_password", [auth], updatePassword);
router.delete("/me", [refreshToken], deleteUser);

module.exports = router;
